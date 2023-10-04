function textSplit(el) {
    el.each(function() {
        var el = $(this)
        var string = el.html() 

        el.removeClass("cb-ts__active")

        if (el.find(".cb-ts__item").length) {return}

        var type = $(this).attr("cb-textreveal-type")

        var regex = /(?![^<]*>)[^<\s]+/g

        if (type === "character") {
            regex = /(?![^<]*>)[^<\s]/g
        }
        else if (type === "full") {
            regex = /(?![^<]*>)[^<]+/g
        }

        var result = string.replace(regex, c => `<span class="cb-ts__wrapper"><span class="cb-ts__item">${c}</span></span>`);

        el.html(result)

        el.find("[cb-textreveal-element=element]").each(function() {

            var regex = /<span class="cb-ts__wrapper"><span class="cb-ts__item">(.*?)<\/span><\/span>/g;
            var html = $(this)[0].outerHTML.split(regex).filter(Boolean).join('');

            $(this).wrapAll('<div>').parent().html(`<div class="cb-ts-el__wrapper"><div class="cb-ts-el__item">${html}</div></div>`)
        })

        var c = el.find(".cb-ts__item, .cb-ts-el__item")

        c.each(function(index) {
            $(this).attr("style", "--index: " + index + ";")
        })

        el.attr("style", "--length: " + c.length)
        el.addClass("cb-ts__visible")
    })
}


try {
    Weglot.on("languageChanged", function() {
        textSplit($("[cb-textreveal-element=text]"))
    })
    Weglot.on("initialized", function() {
        if (Weglot.getCurrentLang() !== Weglot.options.language_from) {return}
        textSplit($("[cb-textreveal-element=text]"))
    })
} catch(e) {
   textSplit($("[cb-textreveal-element=text]"))
}