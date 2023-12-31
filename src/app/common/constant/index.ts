export const STORAGE_KEY_TOKEN = 'TOKEN';
export const STORAGE_KEY_REFRESH_TOKEN = 'STORAGE_KEY_REFRESH_TOKEN';
export const STORAGE_KEY_APP_THEME = 'APP_THEME';
export const STORAGE_KEY_NOTIFY = 'STORAGE_KEY_NOTIFY';
export const CHECK_VERIFY = 'CHECK_VERIFY';
export const NON_REFRESH = 'NON_REFRESH';
export const STORAGE_KEY_PROFILE = 'STORAGE_KEY_PROFILE';
export const TIME_REFRESH = 1;
export const KANA_FULL_HALF_MAP = {
  ガ: 'ｶﾞ',
  ギ: 'ｷﾞ',
  グ: 'ｸﾞ',
  ゲ: 'ｹﾞ',
  ゴ: 'ｺﾞ',
  ザ: 'ｻﾞ',
  ジ: 'ｼﾞ',
  ズ: 'ｽﾞ',
  ゼ: 'ｾﾞ',
  ゾ: 'ｿﾞ',
  ダ: 'ﾀﾞ',
  ヂ: 'ﾁﾞ',
  ヅ: 'ﾂﾞ',
  デ: 'ﾃﾞ',
  ド: 'ﾄﾞ',
  バ: 'ﾊﾞ',
  ビ: 'ﾋﾞ',
  ブ: 'ﾌﾞ',
  ベ: 'ﾍﾞ',
  ボ: 'ﾎﾞ',
  パ: 'ﾊﾟ',
  ピ: 'ﾋﾟ',
  プ: 'ﾌﾟ',
  ペ: 'ﾍﾟ',
  ポ: 'ﾎﾟ',
  ヴ: 'ｳﾞ',
  ヷ: 'ﾜﾞ',
  ヺ: 'ｦﾞ',
  ア: 'ｱ',
  イ: 'ｲ',
  ウ: 'ｳ',
  エ: 'ｴ',
  オ: 'ｵ',
  カ: 'ｶ',
  キ: 'ｷ',
  ク: 'ｸ',
  ケ: 'ｹ',
  コ: 'ｺ',
  サ: 'ｻ',
  シ: 'ｼ',
  ス: 'ｽ',
  セ: 'ｾ',
  ソ: 'ｿ',
  タ: 'ﾀ',
  チ: 'ﾁ',
  ツ: 'ﾂ',
  テ: 'ﾃ',
  ト: 'ﾄ',
  ナ: 'ﾅ',
  ニ: 'ﾆ',
  ヌ: 'ﾇ',
  ネ: 'ﾈ',
  ノ: 'ﾉ',
  ハ: 'ﾊ',
  ヒ: 'ﾋ',
  フ: 'ﾌ',
  ヘ: 'ﾍ',
  ホ: 'ﾎ',
  マ: 'ﾏ',
  ミ: 'ﾐ',
  ム: 'ﾑ',
  メ: 'ﾒ',
  モ: 'ﾓ',
  ヤ: 'ﾔ',
  ユ: 'ﾕ',
  ヨ: 'ﾖ',
  ラ: 'ﾗ',
  リ: 'ﾘ',
  ル: 'ﾙ',
  レ: 'ﾚ',
  ロ: 'ﾛ',
  ワ: 'ﾜ',
  ヲ: 'ｦ',
  ン: 'ﾝ',
  ァ: 'ｧ',
  ィ: 'ｨ',
  ゥ: 'ｩ',
  ェ: 'ｪ',
  ォ: 'ｫ',
  ッ: 'ｯ',
  ャ: 'ｬ',
  ュ: 'ｭ',
  ョ: 'ｮ',
  '。': '｡',
  '、': '､',
  ー: 'ｰ',
  '「': '｢',
  '」': '｣',
  '・': '･',
  '１': '1',
  '２': '2',
  '３': '3',
  '４': '4',
  '５': '5',
  '６': '6',
  '７': '7',
  '８': '8',
  '９': '9',
  '０': '0',
} as Record<string, string>;

export enum MODAL_SELECTED_COUNTRY_TYPE {
  'COUNTRY' = 'COUNTRY',
  'CITY' = 'CITY',
}

export const CONTENT_DEFAULT = `<div>
<button onclick="clickYourButton('[PASS SOME STRING DATA HERE]')">Click</button>
</div>
<script type="text/javascript">
function clickYourButton(data) {
    setTimeout(function () {
        window.ReactNativeWebView.postMessage(data)
    }, 0) // *** here ***
}
</script>`;
export const CONTENT_HEADER = `<div>
</div>`;
export const LINK_INQUIRY = 'https://ki-group.co.jp/owners/app/inquiry/';
