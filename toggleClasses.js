var headerBurger = document.querySelector(".header__burger")
var headerMenu = document.querySelector(".header__menu")
var body = document.body

headerBurger.onclick = function() {
    if (hasClass(headerBurger, 'active') && hasClass(headerMenu, 'active')) {
        removeClass(headerBurger, 'active')
        removeClass(headerMenu, 'active')
        removeClass(body, 'lock')
    }
    else if (!hasClass(headerBurger, 'active') && !hasClass(headerMenu, 'active')) {
        addClass(headerBurger, 'active')
        addClass(headerMenu, 'active')
        addClass(body, 'lock')
    }
}

function hasClass(ele, cls) {
    const cname = ele.className
    const has = cname.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
    return has === null ? false : true
}

function addClass(ele, cls) {
    ele.className += ' ' + cls;
}

function removeClass(ele, cls) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, '');
}
