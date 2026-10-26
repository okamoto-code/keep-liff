// 選ぶ画面の設定。選択肢はここだけ直せばよい（主任と中身を決める）。
// この画面は公開の置き場所（GitHub Pages）に置くので、人の名前やお客様の情報は書かない。
window.APP_CONFIG = {
  // LINE ログインチャネルの LIFF ID（秘密ではない）。未設定のあいだは ?mock=1 の見本でだけ動く
  LIFF_ID: '2012202762-JvZuy6un',

  // 商品。kind で下の選び方が決まる（bed＝ベッド、mattress＝マットレス、wheelchair＝車いす、other＝商品名を書く）
  ITEMS: [
    { label: 'ベッド', kind: 'bed' },
    { label: '車いす', kind: 'wheelchair' },
    { label: 'マットレス', kind: 'mattress' },
    { label: 'その他', kind: 'other' },
  ],
  MOTOR: ['1M', '2M', '3M'],
  WIDTH: ['83幅', '85幅', '91幅', '110幅'],
  LENGTH: ['レギュラー', 'ショート', 'ロング'],
  BED_EXTRAS: ['サイドレール', '介助バー', 'テーブル'],
  WHEELCHAIR: ['自走', '介助'],
  COUNT: ['1台', '2台', '3台'],
};
