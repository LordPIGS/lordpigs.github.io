$(function () {
    var classBase = 'character-quote';
    var classHidden = 'character-quote-hidden';
    var classes = [
        'character-quote-first', 'character-quote-second',
        'character-quote-third', 'character-quote-fourth'
    ];

    var quotes = $('.' + classBase).toArray();
    quotes.forEach(function (rawelem) {
        var elem = $(rawelem);
        classes.forEach(function (cls) {
            elem.removeClass(cls);
        });
        elem.addClass(classHidden);
    });
    for (i in classes) {
        $(quotes[i]).addClass(classes[i]).removeClass(classHidden);
    }

    var animationTime = 350;
    var changeInterval = setInterval(function () {
        // Select one that is not visible randomly
        var hiddenQuotes = $('.' + classHidden);
        var target = $(hiddenQuotes.get(Math.floor(Math.random() * hiddenQuotes.length)));

        // Select the position also randomly
        var positionClass = classes[Math.floor(Math.random() * classes.length)];
        var oldTarget = $('.' + positionClass)

        // Remove the old one, set the new one
        oldTarget.css({'z-index': 100}).animate({
            'opacity': 0
        }, function () {
            oldTarget.css({'opacity': 1, 'z-index': 0}).removeClass(positionClass).addClass(classHidden);
        });
        target.removeClass(classHidden).addClass(positionClass);
    }, animationTime * 3);
});