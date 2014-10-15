//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

$(function () {
    var intervalTime = 1200;
    var animTime = 500;
    var classBase = 'character-quote';
    var classHidden = 'character-quote-hidden';
    var classes = [
        'character-quote-first', 'character-quote-second',
        'character-quote-third', 'character-quote-fourth'
    ];

    /* Take all elements */
    var elemsLeft = shuffle($('.' + classBase)
        .removeClass(classes.join(' '))
        .addClass(classHidden)
        .toArray()
    );

    /* Select and remove the first ones */
    classes.forEach(function (cls) {
        $(elemsLeft[0]).removeClass(classHidden).addClass(cls);
        elemsLeft.shift();
    });

    var nextIndex = 0;
    var intervalFunc = function () {
        /* If there are no more elements left, get some more */
        if (elemsLeft.length === 0) {
            elemsLeft = shuffle($('.' + classBase + '.' + classHidden).toArray());
            console.log(elemsLeft);
        }

        /* Take the first from the list and change it for the next class */
        var nextClass = classes[nextIndex];
        $('.' + nextClass).css({'z-index': 100}).animate({'opacity': 0}, animTime, function () {
            $(this).removeClass(nextClass).addClass(classHidden).css({'opacity': 1, 'z-index': 0});
        });
        $(elemsLeft[0]).removeClass(classHidden).addClass(nextClass);

        /* Prepare the next iteration */
        nextIndex = (nextIndex + 1) % classes.length;
        elemsLeft.shift();
    };

    setInterval(intervalFunc, intervalTime);
});