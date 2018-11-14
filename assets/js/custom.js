let typed
$(document).ready(function () {
    typed = new Typed('#i-am', {
        strings: ["ein Hacker.", "ein Schüler.", "ein Denker.", "ein Qualitätsfanatiker.", "ein Chaot.", "<b>Moritz</b>."],
        loop: false,
        typeSpeed: 100,
        backSpeed: 30,
        smartBackspace: true
    });
});
