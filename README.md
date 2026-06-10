# ⚔️ 決戦・関ヶ原 ― 3D俯瞰シミュレーション

慶長五年九月十五日、天下分け目の「関ヶ原の戦い」をリアルタイム3Dで再現したシミュレーターです。
地形・軍勢・進軍矢印・朝霧・シネマティックカメラをブラウザだけで体験できます ⚔️

## 🌐 公開URL

[https://egg6112.github.io/sekigahara-3d/](https://egg6112.github.io/sekigahara-3d/)

## ✨ 機能・特徴

- 関ヶ原盆地の3D地形（松尾山・笹尾山・南宮山・桃配山など実地形を再現）
- 東軍・西軍あわせて14部隊をリアルタイムで移動表示
- 6フェーズ（布陣 → 開戦 → 激戦 → 家康前進 → 小早川寝返り → 西軍崩壊）のシネマティック演出
- 朝霧・太陽光・空の色が時刻とともに変化する大気表現
- 進軍矢印・島津の退き口など合戦の流れを視覚化
- フェーズ切り替え・再生/一時停止コントロール付き

## 🛠 使用技術

- React 18
- Three.js
- Vite

## 📂 ファイル構成

```
sekigahara-3d-Fable5/
├── sekigahara-3d.jsx   メインコンポーネント（3Dシーン・ロジック）
├── src/
│   └── main.jsx        エントリーポイント
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 ローカルで動かす方法

```bash
git clone https://github.com/egg6112/sekigahara-3d.git
cd sekigahara-3d
npm install
npm run dev
```

## 📝 作者

egg6112
