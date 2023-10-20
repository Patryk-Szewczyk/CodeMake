console.log('e');
var page_Obj = {
    setPage: function () {
        var hdr = document.querySelector('div.header');
        ['load', 'resize'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                var hgt = String(window.innerHeight);
                hdr.style.height = hgt + 'px';
            }, false);
        });
    }
};
page_Obj.setPage();
