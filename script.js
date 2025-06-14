// Variables
var convertTo = 'hiragana';
var i, tableIndex, tableCount;
var hiraganaMap = {
    // Special Characters
    ' ': '　',
    ',': '、',
    '.': '。',
    '?': '？',
    // The following entries are for conversion purposes
    'yi': 'い',
    'ye': 'いぇ',
    'wi': 'うぃ',
    'wu': 'う',
    'we': 'うぇ',
    'nn': 'ん',
    // Shorthand (shi, chi, tsu)
    'si': 'し',
    'ti': 'ち',
    'tu': 'つ',
    // Special
    'fa': 'ふぁ',
    'fi': 'ふぃ',
    'hu': 'ふ',
    'fe': 'ふぇ',
    'fo': 'ふぉ',
    'ji': 'じ',
    'ja': 'じゃ',
    'ju': 'じゅ',
    'je': 'じぇ',
    'jo': 'じょ',
    // Small
    'ya': 'ゃ',
    'yu': 'ゅ',
    'yo': 'ょ',
    // Extra
    'cho': 'ちょ',
    'chu': 'ちゅ',
    'cha': 'ちゃ',
    // Dakuten (g)
    'ga': 'が',
    'gi': 'ぎ',
    'gu': 'ぐ',
    'ge': 'げ',
    'go': 'ご',
    // Dakuten (z)
    'za': 'ざ',
    'zi': 'じ',
    'zu': 'ず',
    'ze': 'ぜ',
    'zo': 'ぞ',
    // Dakuten (d)
    'da': 'だ',
    'di': 'ぢ',
    'du': 'づ',
    'de': 'で',
    'do': 'ど',
    // Dakuten (b)
    'ba': 'ば',
    'bi': 'び',
    'bu': 'ぶ',
    'be': 'べ',
    'bo': 'ぼ',
};
var hiraganaArr = [
    // base
    ['a', 'あ'],
    ['i', 'い'],
    ['u', 'う'],
    ['e', 'え'],
    ['o', 'お'],
    // k
    ['ka', 'か'],
    ['ki', 'き'],
    ['ku', 'く'],
    ['ke', 'け'],
    ['ko', 'こ'],
    // s
    ['sa', 'さ'],
    ['shi', 'し'],
    ['su', 'す'],
    ['se', 'せ'],
    ['so', 'そ'],
    // t
    ['ta', 'た'],
    ['chi', 'ち'],
    ['tsu', 'つ'],
    ['te', 'て'],
    ['to', 'と'],
    // n
    ['na', 'な'],
    ['ni', 'に'],
    ['nu', 'ぬ'],
    ['ne', 'ね'],
    ['no', 'の'],
    // h
    ['ha', 'は'],
    ['hi', 'ひ'],
    ['fu', 'ふ'],
    ['he', 'へ'],
    ['ho', 'ほ'],
    // m
    ['ma', 'ま'],
    ['mi', 'み'],
    ['mu', 'む'],
    ['me', 'め'],
    ['mo', 'も'],
    // y
    ['ya', 'や'],
    ['yu', 'ゆ'],
    ['yo', 'よ'],
    // r
    ['ra', 'ら'],
    ['ri', 'り'],
    ['ru', 'る'],
    ['re', 'れ'],
    ['ro', 'ろ'],
    // w
    ['wa', 'わ'],
    ['wo', 'を'],
    // n
    ['n', 'ん'],
];

// Populate the Hiragana Map
for (var i = 0; i < hiraganaArr.length; i++) {
    var parts = hiraganaArr[i];
    // Map Romaji to Hiragana
    hiraganaMap[parts[0]] = parts[1];
    // Map Hiragana to Romaji
    hiraganaMap[parts[1]] = parts[0];
}

var katakanaMap = {
    // Special Characters
    ' ': '　',
    ',': '、',
    '.': '。',
    '?': '？',
    // The following entries are for conversion purposes
    'yi': 'イ',
    'ye': 'イェ',
    'wi': 'ウィ',
    'wu': 'ウ',
    'we': 'ウェ',
    'nn': 'ン',
    // Shorthand (shi, chi, tsu)
    'si': 'シ',
    'ti': 'チ',
    'tu': 'ツ',
    // Special
    'fa': 'ファ',
    'fi': 'フィ',
    'hu': 'フ',
    'fe': 'フェ',
    'fo': 'フォ',
    'ji': 'ジ',
    'ja': 'ジャ',
    'ju': 'ジュ',
    'je': 'ジェ',
    'jo': 'ジョ',
    // Small
    'ya': 'ャ',
    'yu': 'ュ',
    'yo': 'ョ',
    // Extra
    'cho': 'チョ',
    'chu': 'チュ',
    'cha': 'チャ',
    // Dakuten (g)
    'ga': 'ガ',
    'gi': 'ギ',
    'gu': 'グ',
    'ge': 'ゲ',
    'go': 'ゴ',
    // Dakuten (z)
    'za': 'ザ',
    'zi': 'ジ',
    'zu': 'ズ',
    'ze': 'ゼ',
    'zo': 'ゾ',
    // Dakuten (d)
    'da': 'ダ',
    'di': 'ヂ',
    'du': 'ヅ',
    'de': 'デ',
    'do': 'ド',
    // Dakuten (b)
    'ba': 'バ',
    'bi': 'ビ',
    'bu': 'ブ',
    'be': 'ベ',
    'bo': 'ボ',
};
var katakanaArr = [
    // base
    ['a', 'ア'],
    ['i', 'イ'],
    ['u', 'ウ'],
    ['e', 'エ'],
    ['o', 'オ'],
    // k
    ['ka', 'カ'],
    ['ki', 'キ'],
    ['ku', 'ク'],
    ['ke', 'ケ'],
    ['ko', 'コ'],
    // s
    ['sa', 'サ'],
    ['shi', 'シ'],
    ['su', 'ス'],
    ['se', 'セ'],
    ['so', 'ソ'],
    // t
    ['ta', 'タ'],
    ['chi', 'チ'],
    ['tsu', 'ツ'],
    ['te', 'テ'],
    ['to', 'ト'],
    // n
    ['na', 'ナ'],
    ['ni', 'ニ'],
    ['nu', 'ヌ'],
    ['ne', 'ネ'],
    ['no', 'ノ'],
    // h
    ['ha', 'ハ'],
    ['hi', 'ヒ'],
    ['fu', 'フ'],
    ['he', 'ヘ'],
    ['ho', 'ホ'],
    // m
    ['ma', 'マ'],
    ['mi', 'ミ'],
    ['mu', 'ム'],
    ['me', 'メ'],
    ['mo', 'モ'],
    // y
    ['ya', 'ヤ'],
    ['yu', 'ユ'],
    ['yo', 'ヨ'],
    // r
    ['ra', 'ラ'],
    ['ri', 'リ'],
    ['ru', 'ル'],
    ['re', 'レ'],
    ['ro', 'ロ'],
    // w
    ['wa', 'ワ'],
    ['wo', 'ヲ'],
    // n
    ['n', 'ン'],
];

// Populate the Katakana Map
for (i = 0; i < katakanaArr.length; i++) {
    var parts = katakanaArr[i];
    // Map Romaji to Katakana
    katakanaMap[parts[0]] = parts[1];
    // Map Katakana to Romaji
    katakanaMap[parts[1]] = parts[0];
}

// Used to print the hiragana/katakana arrays
var kanaTableArr = [5, 5, 5, 5, 5, 5, 5, 3, 5, 2, 1];
var kanaTableLength = 5 + 5 + 5 + 5 + 5 + 5 + 5 + 3 + 5 + 2 + 1;
function printKana(type) {
    var _html = '<div class="kana-table"><div class="kana-row">';
    tableIndex = 0;
    tableCount = 0;
    // Initialize Stuff and Things
    for (i = 0; i < kanaTableLength /*window[`${type}Arr`].length*/; i++) {
        var parts = window[`${type}Arr`][i];
        var romaji = parts[0];
        var kana = parts[1];
        _html += `<span class="kana" title="${romaji}">${kana}</span>`;
        // console.log('tableCount, tableIndex', tableCount, tableIndex);
        if (++tableCount >= kanaTableArr[tableIndex]) {
            if (tableCount >= kanaTableArr[tableIndex]) {
                _html += '</div><div class="kana-row">';
            }
            tableCount = 0;
            tableIndex++;
        }
    }
    _html += '</div></div>';
    document.querySelector(`#${type}`).innerHTML = _html;
}

// Called on load of body
function init() {
    printKana('hiragana');
    printKana('katakana');
}

function conversion(event) {
    console.log("Input:", event.target.value);
    var map = window[convertTo + 'Map'];
    var _text = event.target.value;
    // Four Characters (i.e. kkya = っきゃ)
    _text = _text.replace(/([kstnhmyrgzdb]){2}(y[auo])/g, (fullMatch, letter, y/*, position, entireText*/) => {
        return `っ${map[`${letter}i`]}${map[`${y}`]}`;
    });
    // Three Characters Unique (i.e. shi = し)
    _text = _text.replace(/shi|chi|cho|chu|cha|tsu/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // Three Characters (i.e. kya = きゃ)
    _text = _text.replace(/([kstnhmyrgzdb])(y[auo])/g, (fullMatch, letter, y/*, position, entireText*/) => {
        return `${map[`${letter}i`]}${map[`${y}`]}`;
    });
    // Three Characters (i.e. kka = っか)
    _text = _text.replace(/([kstnhmyrgzdb]){2}([aiueo])/g, (fullMatch, letter, vowel/*, position, entireText*/) => {
        return `っ${map[`${letter}${vowel}`]}`;
    });
    // Two Characters Unique (i.e. fe = ふぇ)
    _text = _text.replace(/f[aieo]|j[aiueo]|nn/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // Two Characters (i.e. ka = か)
    _text = _text.replace(/[kstnhmyrwgzdb][aiueo]/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // Two Characters (i.e. fu = ふ)
    _text = _text.replace(/fu/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // One Character (i.e. a = あ)
    _text = _text.replace(/[aiueo ,\.\?]/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    event.target.value = _text;
}

function selectConversion(newConv) {
    convertTo = newConv;
    document.querySelector('.convert-option.selected').classList.remove('selected');
    document.querySelector(`#${convertTo}Convert`).classList.add('selected');
}