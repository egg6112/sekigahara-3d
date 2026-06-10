# 設計書 ― 決戦・関ヶ原 3D俯瞰シミュレーション

## 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| プロジェクト名 | 決戦・関ヶ原 3D俯瞰シミュレーション |
| 公開URL | https://egg6112.github.io/sekigahara-3d/ |
| リポジトリ | https://github.com/egg6112/sekigahara-3d |
| 主要技術 | React 18 / Three.js r177 / Vite 6 |
| エントリポイント | `src/main.jsx` |
| メインコンポーネント | `sekigahara-3d.jsx` (`SekigaharaCinematic`) |

慶長五年九月十五日（1600年）の関ヶ原の戦いを、TV特番風のシネマティック演出でブラウザ上に3D再現する単一Reactコンポーネント。地形・部隊・進軍矢印・大気表現・カメラワークを Three.js で描画し、6フェーズの合戦経過をリアルタイムアニメーションで表示する。

---

## 2. アーキテクチャ概要

```
SekigaharaCinematic (React コンポーネント)
│
├── [定数・データ層]
│   ├── UNITS          部隊定義 (14部隊)
│   ├── PHASES         フェーズ定義 (6フェーズ)
│   ├── PHASE_DEST     フェーズ毎の移動先座標
│   ├── PHASE_FADE     フェーズ毎の不透明度
│   ├── PHASE_ARROWS   進軍矢印の経路定義
│   └── CAMS           カメラキーフレーム
│
├── [Three.js シーン層]  ← useEffect 内で初期化・管理
│   ├── 地形メッシュ    PlaneGeometry + 頂点カラー
│   ├── 街道メッシュ    CatmullRomCurve3 リボン × 2本
│   ├── 部隊グループ    InstancedMesh + 軍旗 + ラベルスプライト
│   ├── 霧スプライト    PlaneGeometry × 9枚 (流動)
│   └── 矢印リボン      BufferGeometry (setDrawRange で段階表示)
│
├── [アニメーションループ]  requestAnimationFrame
│   ├── applyAtmosphere   空・霧・光の補間
│   ├── updateUnits       部隊位置・透明度の補間
│   └── updateArrows      矢印の描画進捗更新
│
└── [React UI層]
    ├── 導入画面 (.skg-intro)
    ├── 縦書きタイトル (.skg-title)
    ├── 凡例 (.skg-legend)
    ├── ナレーションカード (.skg-card)
    ├── フェーズチップ (.skg-chips)
    ├── 再生ボタン (.skg-play)
    └── 進行バー (.skg-prog)
```

### React と Three.js の責務分離

| 層 | 担当 | 状態管理 |
|----|------|----------|
| Three.js (useEffect) | 3D描画・アニメーション | `stateRef`（Ref）で管理。レンダーサイクル外で高速更新 |
| React | UI表示・ユーザー操作 | `useState`（phase / playing / started）で管理 |

> アニメーションループは React の再レンダーを避けるため、再生位置 (`st.t`) と現在フェーズ (`st.phase`) を `useRef` で保持する。`setPhase` / `setPlaying` はフェーズ切替・再生停止のタイミングのみ呼ぶ。

---

## 3. 座標系

Three.js の右手座標系を使用。地形は XZ 平面に展開。

| 軸 | 意味 | 範囲 |
|----|------|------|
| X | 東西方向（東が正） | -140 〜 +140 |
| Y | 高さ（地形高さ関数で決定） | 0 〜 約30 |
| Z | 南北方向（南が正） | -115 〜 +115 |

地形サイズ: **280 × 230** ユニット（セグメント数 150 × 120）

---

## 4. データ設計

### 4-1. 部隊定義 `UNITS`

```js
{
  id:    string,   // 内部ID (例: "ieyasu")
  name:  string,   // 表示名 (例: "徳川家康")
  kanji: string,   // 軍旗文字 (例: "徳")
  side:  "east" | "west" | "turn",  // 陣営。"turn" は途中で東軍に寝返る
  pos:   [x, z],  // 初期座標
  n:     number,  // 兵士インスタンス数
  face:  number,  // 初期向き (radians)
  big?:  boolean  // 大将旗 (旗3本・ラベル大)
}
```

部隊数: 西軍 7 / 東軍 7 = 計 14部隊

### 4-2. フェーズ定義 `PHASES`

```js
{
  key:  string,   // フェーズ名
  time: string,   // 時刻表示
  dur:  number,   // フェーズ長さ (秒)
  fog:  number,   // 霧の強さ (0.0〜1.0)
  desc: string,   // ナレーション文
  sky: {
    top: hex,     // 空上部色
    bot: hex,     // 空下部色 (背景色)
    fog: hex,     // 霧の色
    sun: [x,y,z], // 太陽の方向ベクトル
    sc:  hex,     // 太陽光色
    si:  number   // 太陽光強度
  }
}
```

| # | フェーズ名 | 時刻 | 長さ |
|---|-----------|------|------|
| 0 | 布陣 | 夜明け前 | 13s |
| 1 | 開戦 | 午前8時頃 | 12s |
| 2 | 激戦 | 午前10時頃 | 12s |
| 3 | 家康、本陣を進める | 午前11時過ぎ | 11s |
| 4 | 小早川秀秋、寝返る | 正午過ぎ | 13s |
| 5 | 西軍崩壊・島津の退き口 | 午後2時頃 | 14s |

### 4-3. フェーズ移動先 `PHASE_DEST`

各フェーズ終了時点での部隊座標。記載のない部隊は前フェーズ末の座標を維持する。

```js
PHASE_DEST[phaseIndex] = { unitId: [x, z], ... }
```

位置補間はフェーズ内の進捗 `p (0〜1)` に対して `easeIO` (三次イーズイン・アウト) を適用する。

### 4-4. フェーズ不透明度 `PHASE_FADE`

壊滅・潰走した部隊の透明化。`opacity = 0` で消滅表現。

```
フェーズ4: 大谷吉継 → 0.55 (被攻撃)
フェーズ5: 大谷吉継 → 0.0  (壊滅)
           石田三成  → 0.35 (潰走)
           小西行長  → 0.3  (潰走)
           宇喜多秀家 → 0.35 (潰走)
           毛利秀元  → 0.7  (退却)
```

---

## 5. 地形システム

### 5-1. 高さ関数 `terrainH(x, z)`

数学的な地形合成。ガウス関数の重ね合わせで山を表現する。

```
h = 山脈成分 (伊吹山系 / 南山系 / 西尾根)
  + 主要山 (松尾山 / 笹尾山 / 南宮山 / 桃配山 / 天満山)
  + 微地形ノイズ (sin/cos の合成)
```

`hill(x, z, cx, cz, r, h)` は中心 `(cx, cz)` 半径 `r` 高さ `h` のガウシアン丘。

### 5-2. 頂点カラー

高さ `h` の値域ごとに色を線形補間する。

| 高さ | 色 | 意味 |
|------|-----|------|
| h < 1.6 | cValley / cPaddy (市松) | 盆地・田畑 |
| 1.6 〜 7 | cForest lerp cValley | 低木・草地 |
| 7 〜 15 | cForest lerp cHigh | 森林 |
| 15 〜 | cHigh lerp cRidge | 尾根・岩肌 |

微ノイズ `n = 0.92 + 0.08 * sin * cos` で色に変化をつける。

---

## 6. 部隊レンダリング

### 6-1. 兵士メッシュ

`THREE.InstancedMesh` で描画コストを削減。1部隊につき `n` 個の円錐 (`ConeGeometry(0.45, 1.5, 5)`) を格子+千鳥配置で並べる。

```
cols = ceil(√(n × 1.6))  // 横列数
位置: (c - cols/2) × 1.3 + 千鳥オフセット, r × 1.5
スケール: 0.9 〜 1.15 (ランダム)
```

### 6-2. 軍旗テクスチャ `flagTexture(kanji, hex)`

Canvas 2D API で 96×192px のテクスチャを動的生成する。
- 背景: 陣営色
- 文字: 漢字1文字 → 64px 明朝体 / 複数文字 → 30px で縦並び

### 6-3. 小早川の寝返り演出

`side: "turn"` の部隊は、フェーズ4の進捗 `p` に応じて色が西軍色→東軍色へグラデーション変化する。

```
f = clamp01((p - 0.18) / 0.2)  // フェーズ4の 18%〜38% で変化
color = lerp(WEST, EAST, f)

f >= 0.5 のとき:
  軍旗テクスチャを EAST 色に差し替え
  名前ラベルを EAST 色に差し替え
```

---

## 7. 矢印リボンシステム `buildArrow(scene, spec)`

進軍経路を Catmull-Rom 曲線で補間し、テーパー状のリボンメッシュを生成する。

```
入力: { pts: [[x,z],...], side, t0, t1, wide?, flee? }

幅: wide ? 4.2 : 2.6  (先端に向けて徐々に広がる)
分割数: N = 60
```

`setDrawRange(0, cnt)` でインデックス数を段階的に増やすことで「矢印が伸びる」アニメーションを実現する。矢印の先端はフェーズ内進捗が 97% を超えたときのみ表示。

チェブロン（山形）テクスチャを UV スクロールさせることで「流れる」演出を付与する。

---

## 8. 大気システム `applyAtmosphere(pi, p, dt, elapsed)`

フェーズ末尾 15% (`p > 0.85`) で次フェーズの空設定へ線形補間する。

```
mix = clamp01((p - 0.85) / 0.15)

変化要素:
  scene.background (空の色)
  scene.fog.color  (霧の色)
  scene.fog.density (霧の濃度)
  sun.position     (太陽方向)
  sun.color        (太陽光色)
  sun.intensity    (太陽光強度)
```

霧レイヤー (9枚の半透明プレーン) は毎フレーム X 方向に流れ、画面端を超えたら反対端から再出現する。

---

## 9. カメラシステム

### 9-1. キーフレームアニメーション

各フェーズに 3〜4 個のキーフレーム `{ p: [x,y,z], l: [x,y,z] }` を定義。
- `p`: カメラ位置
- `l`: 注視点

これを `CatmullRomCurve3` に渡し、フェーズ進捗 `easeIO(p)` でサンプリングする。

### 9-2. 手持ち風の揺れ

```js
cpos.x += sin(elapsed × 0.55) × 0.5
cpos.y += sin(elapsed × 0.40 + 2) × 0.35
clook.x += sin(elapsed × 0.30 + 1) × 0.4
```

経過時間の正弦波を重ねることで、固定カメラにドキュメンタリー風の微揺れを加える。

---

## 10. アニメーションループ

```
animate()  ← requestAnimationFrame
│
├── dt = min(Δt, 0.05)  // 最大フレーム時間を 50ms にクランプ
│
├── ジャンプ処理 (st.jump !== null)
│     st.phase = jump; st.t = 0
│
├── 再生中 (st.playing)
│     st.t += dt
│     フェーズ時間超過 → 次フェーズへ / 最終フェーズなら停止
│
├── p = clamp01(st.t / PHASES[pi].dur)  // 正規化進捗
│
├── カメラ更新
├── applyAtmosphere(pi, p, dt, elapsed)
├── updateUnits(pi, p)
├── updateArrows(pi, p, dt)
├── プログレスバー更新
└── renderer.render(scene, camera)
```

---

## 11. React 状態管理

| 状態 | 型 | 初期値 | 用途 |
|------|-----|--------|------|
| `phase` | number | 0 | ナレーションカード・チップのアクティブ表示 |
| `playing` | boolean | false | 再生ボタンのアイコン切替 |
| `started` | boolean | false | 導入画面の表示/非表示 |
| `stateRef` | Ref | `{playing, phase, t, jump}` | アニメーションループ内の実行状態 (レンダー外) |

`stateRef.current` を直接書き換えることで React の再レンダーを起こさずにアニメーション状態を更新する。UI 反映が必要なタイミング（フェーズ変更・停止）のみ `setPhase` / `setPlaying` を呼ぶ。

---

## 12. UI レイアウト

```
┌─────────────────────────────────────────┐  ← .skg-bar (レターボックス上)
│  [凡例]              [縦書きタイトル]   │
│                                          │
│         3D Canvas (.skg-canvas)          │
│                                          │
│  [ナレーションカード]                    │
├─────────────────────────────────────────┤  ← .skg-prog (進行バー)
│   ▶  [布陣][開戦][激戦][家康...][小早川][崩壊]  │  ← .skg-ctrl
└─────────────────────────────────────────┘  ← .skg-bar (レターボックス下)
```

CSS は `<style>` タグでコンポーネント内にインライン定義。クラス名プレフィックス `skg-` で名前衝突を回避。

### レスポンシブ対応

| 条件 | 変更 |
|------|------|
| `max-width: 640px` | 縦書きタイトル非表示 / ナレーションカードの bottom を上げる |
| `prefers-reduced-motion: reduce` | フィルムグレイン非表示 |

---

## 13. テクスチャ一覧

| 関数 | サイズ | 用途 |
|------|--------|------|
| `flagTexture(kanji, hex)` | 96 × 192 px | 軍旗ののぼり |
| `labelTexture(text, hex, small)` | 512 × 128 px | 部隊名ラベル・山名ラベル |
| `chevronTexture()` | 128 × 64 px | 矢印リボンの流れるパターン |
| `fogTexture()` | 256 × 256 px | 朝霧レイヤー（放射グラデーション） |

すべて `document.createElement("canvas")` で実行時に動的生成し、`THREE.CanvasTexture` に変換する。

---

## 14. ビルド・デプロイ設計

| コマンド | 内容 |
|----------|------|
| `npm run dev` | Vite 開発サーバー起動 |
| `npm run build` | `dist/` へプロダクションビルド |
| `npm run deploy` | ビルド後、`gh-pages` ブランチへプッシュ |

### vite.config.js

```js
base: "./"  // GitHub Pages サブディレクトリ対応 (相対パス)
```

### バンドルサイズ

| ファイル | サイズ | gzip |
|----------|--------|------|
| `dist/assets/index-*.js` | 655 KB | 179 KB |

Three.js が大部分を占める。`dynamic import` による遅延ロードで改善可能（現状は未実施）。

---

## 15. 既知の制約・改善候補

| 項目 | 内容 |
|------|------|
| バンドルサイズ | Three.js 込みで 655KB。dynamic import で分割可能 |
| 地形精度 | 数学的近似のため実地形とは異なる |
| モバイル性能 | InstancedMesh × 14部隊はミドルレンジ端末で重い可能性あり |
| アクセシビリティ | 3D描画部分はスクリーンリーダー非対応 |
| メモリ解放 | renderer.dispose() は実装済みだが、CanvasTexture の個別 dispose は未実施 |
