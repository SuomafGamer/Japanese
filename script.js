// Variables
var convertTo = 'hiragana';
var hiraganaMap = {
    // Special Characters
    ' ': '　',
    ',': '、',
    '.': '。',
    '?': '？',
    '-': 'ー',
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
    'xya': 'ゃ',
    'xyu': 'ゅ',
    'xyo': 'ょ',
    // Extra
    'cho': 'ちょ',
    'chu': 'ちゅ',
    'cha': 'ちゃ',
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
// Add to the Hiragana Map
for (var i = 0; i < hiraganaArr.length; i++) {
    var parts = hiraganaArr[i];
    // Map Romaji to Hiragana
    hiraganaMap[parts[0]] = parts[1];
    // Map Hiragana to Romaji
    hiraganaMap[parts[1]] = parts[0];
}
var hiraganaDiacritics = [
    // Dakuten (g)
    ['ga', 'が'],
    ['gi', 'ぎ'],
    ['gu', 'ぐ'],
    ['ge', 'げ'],
    ['go', 'ご'],
    // Dakuten (z)
    ['za', 'ざ'],
    ['zi', 'じ'],
    ['zu', 'ず'],
    ['ze', 'ぜ'],
    ['zo', 'ぞ'],
    // Dakuten (d)
    ['da', 'だ'],
    ['di', 'ぢ'],
    ['du', 'づ'],
    ['de', 'で'],
    ['do', 'ど'],
    // Dakuten (b)
    ['ba', 'ば'],
    ['bi', 'び'],
    ['bu', 'ぶ'],
    ['be', 'べ'],
    ['bo', 'ぼ'],
    // Handakuten (p)
    ['pa', 'ぱ'],
    ['pi', 'ぴ'],
    ['pu', 'ぷ'],
    ['pe', 'ぺ'],
    ['po', 'ぽ'],
];
// Add to the Hiragana Map
for (var i = 0; i < hiraganaDiacritics.length; i++) {
    var parts = hiraganaDiacritics[i];
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
    '-': 'ー',
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
    'xya': 'ャ',
    'xyu': 'ュ',
    'xyo': 'ョ',
    // Extra
    'cho': 'チョ',
    'chu': 'チュ',
    'cha': 'チャ',
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
    ['ya', 'ヤ'], // 35
    ['yu', 'ユ'], // 37
    ['yo', 'ヨ'], // 39
    // r
    ['ra', 'ラ'],
    ['ri', 'リ'],
    ['ru', 'ル'],
    ['re', 'レ'],
    ['ro', 'ロ'],
    // w
    ['wa', 'ワ'], // 45
    ['wo', 'ヲ'], // 49
    // n
    ['n', 'ン'],  // 50
];
// Populate the Katakana Map
for (var i = 0; i < katakanaArr.length; i++) {
    var parts = katakanaArr[i];
    // Map Romaji to Katakana
    katakanaMap[parts[0]] = parts[1];
    // Map Katakana to Romaji
    katakanaMap[parts[1]] = parts[0];
}
var katakanaDiacritics = [
    // Dakuten (g)
    ['ga', 'ガ'],
    ['gi', 'ギ'],
    ['gu', 'グ'],
    ['ge', 'ゲ'],
    ['go', 'ゴ'],
    // Dakuten (z)
    ['za', 'ザ'],
    ['zi', 'ジ'],
    ['zu', 'ズ'],
    ['ze', 'ゼ'],
    ['zo', 'ゾ'],
    // Dakuten (d)
    ['da', 'ダ'],
    ['di', 'ヂ'],
    ['du', 'ヅ'],
    ['de', 'デ'],
    ['do', 'ド'],
    // Dakuten (b)
    ['ba', 'バ'],
    ['bi', 'ビ'],
    ['bu', 'ブ'],
    ['be', 'ベ'],
    ['bo', 'ボ'],
    // Handakuten (p)
    ['pa', 'パ'],
    ['pi', 'ピ'],
    ['pu', 'プ'],
    ['pe', 'ペ'],
    ['po', 'ポ'],
];
// Populate the Katakana Map
for (var i = 0; i < katakanaDiacritics.length; i++) {
    var parts = katakanaDiacritics[i];
    // Map Romaji to Katakana
    katakanaMap[parts[0]] = parts[1];
    // Map Katakana to Romaji
    katakanaMap[parts[1]] = parts[0];
}

// Used to print the hiragana/katakana arrays
var kanaTableCellSkip = { 36: true, 38: true, 46: true, 47: true, 48: true };
var kanaTableLength = 51; // 46 kana + 5 skipped cells
function printKana(type) {
    var _html = '<table class="kana-table"><tr class="kana-row">';
    var rowCount = 0;
    var skip = 0;
    // Initialize Stuff and Things
    for (var i = 0; i < kanaTableLength; i++) {
        if (kanaTableCellSkip[i]) {
            _html += `<td class="kana"></td>`;
            skip++;
            continue;
        }
        var parts = window[`${type}Arr`][i - skip];
        var romaji = parts && parts[0] || '';
        var kana = parts && parts[1] || '';
        _html += `<td class="kana" title="${romaji}">${kana}</td>`;
        if ((i + 1) % 5 == 0) {
            _html += '</tr><tr class="kana-row">';
            rowCount++;
        }
    }
    _html += '</tr></table>';
    document.querySelector(`#${type}`).innerHTML = _html;
}

// Called on load of body
function init() {
    printKana('hiragana');
    printKana('katakana');
}

function conversion(event) {
    var textArea = event.target;
    console.log("Input:", textArea.value);
    var map = window[convertTo + 'Map'];
    var _text = textArea.value.toLowerCase();
    // To preserve the caret position
    var startLength = _text.length;
    var caretPos = textArea.selectionStart;
    // Four Characters (i.e. kkya = っきゃ)
    _text = _text.replace(/([kstnhmyrgzdbp]){2}(y[auo])/g, (fullMatch, letter, y/*, position, entireText*/) => {
        return `っ${map[`${letter}i`]}${map[`x${y}`]}`;
    });
    // Three Characters Unique (i.e. shi = し)
    _text = _text.replace(/shi|chi|cho|chu|cha|tsu/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // Three Characters (i.e. kya = きゃ)
    _text = _text.replace(/([kstnhmyrgzdbp])(y[auo])/g, (fullMatch, letter, y/*, position, entireText*/) => {
        return `${map[`${letter}i`]}${map[`x${y}`]}`;
    });
    // Three Characters (i.e. kka = っか)
    _text = _text.replace(/([kstnhmyrgzdbp]){2}([aiueo])/g, (fullMatch, letter, vowel/*, position, entireText*/) => {
        return `っ${map[`${letter}${vowel}`]}`;
    });
    // Two Characters Unique (i.e. fe = ふぇ)
    _text = _text.replace(/f[aieo]|j[aiueo]|nn/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // Two Characters (i.e. ka = か)
    _text = _text.replace(/[kstnhmyrwgzdbp][aiueo]/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // Two Characters (i.e. fu = ふ)
    _text = _text.replace(/fu/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // One Character (i.e. a = あ)
    _text = _text.replace(/[aiueo ,\.\?-]/g, (fullMatch/*, position, entireText*/) => {
        return map[fullMatch];
    });
    // To preserve the caret position
    var endLength = _text.length;
    var newCaretPos = caretPos - (startLength - endLength);
    // Overwriting the text moves the caret
    event.target.value = _text;
    // Set the correct caret position
    textArea.setSelectionRange(newCaretPos, newCaretPos);
}

function selectConversion(newConv) {
    convertTo = newConv;
    document.querySelector('.convert-option.selected').classList.remove('selected');
    document.querySelector(`#${convertTo}Convert`).classList.add('selected');
}