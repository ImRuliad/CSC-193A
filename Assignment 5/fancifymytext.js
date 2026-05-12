function bigger() {
    const BIGGER_FONT_SIZE = "24pt";
    document.getElementById("textArea").style.fontSize = BIGGER_FONT_SIZE;
}

function fancifyTest() {
    const FANCY_SHMANCY = "fancyShmancy";
    const BOLD_FONT_WEIGHT = "bold";
    const BLUE_COLOR = "blue";
    const UNDERLINE_TEXT_DECORATION = "underline";
    const NORMAL_FONT_WEIGHT = "normal";
    const NO_COLOR = "";
    const NO_TEXT_DECORATION = "none";
    var fancyShmancy = document.getElementById(FANCY_SHMANCY);

    if (fancyShmancy.checked) {
        document.getElementById("textArea").style.fontWeight = BOLD_FONT_WEIGHT;
        document.getElementById("textArea").style.color = BLUE_COLOR;
        document.getElementById("textArea").style.textDecoration = UNDERLINE_TEXT_DECORATION;
    } else {
        document.getElementById("textArea").style.fontWeight = NORMAL_FONT_WEIGHT;
        document.getElementById("textArea").style.color = NO_COLOR;
        document.getElementById("textArea").style.textDecoration = NO_TEXT_DECORATION;
    }
}

function turnIntoMoo() {
    const UPPERCASE_TEXT = "toUpperCase";
    const SENTENCES_SEPARATOR = ".";
    const WORDS_SEPARATOR = " ";
    const MOO_SUFFIX = "-MOO";  
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase(UPPERCASE_TEXT);
    var sentences = text.split(SENTENCES_SEPARATOR);
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];
        if (sentence.trim().length > 0) {
            var words = sentence.trimEnd().split(WORDS_SEPARATOR);
            words[words.length - 1] += MOO_SUFFIX;
            sentences[i] = words.join(WORDS_SEPARATOR);
        }
    }
        textArea.value = sentences.join(SENTENCES_SEPARATOR);
}
