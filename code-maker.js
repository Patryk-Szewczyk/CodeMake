var page_OBJ = {
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
page_OBJ.setPage();
var navMob_dropdownButton_OBJ = {
    isEnable: false,
    action: function () {
        var _this = this;
        var button = document.querySelector('div.nav-mob-dropdown-button');
        var target = document.querySelector('div.nav-mob-dropdown-target');
        var strip_AR = [];
        for (var i = 0; i < 3; i++) {
            strip_AR[i] = document.querySelectorAll('div.nav-mob-dropdown-strip')[i];
        }
        ;
        var iconTitle_AR = [];
        var iconTitles_Length = document.querySelectorAll('div.nav-mov-dropdown-item-title').length;
        for (var i = 0; i < iconTitles_Length; i++) {
            iconTitle_AR[i] = document.querySelectorAll('div.nav-mov-dropdown-item-title')[i];
        }
        ;
        ['click', 'touchend'].forEach(function (ev) {
            button.addEventListener(ev, function () {
                if (_this.isEnable === false) { // Show target:
                    // Switch:
                    _this.isEnable = true;
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom left, hsl(37, 90%, 40%), hsl(37, 100%, 49%), hsl(37, 90%, 62%))";
                    button.style.transitionDuration = 0.35 + "s";
                    for (var i = 0; i < 3; i++) {
                        strip_AR[i].style.backgroundColor = "rgb(50,50,50)";
                        strip_AR[i].style.transitionDuration = 0.0 + "s";
                    }
                    ;
                    target.style.height = 265 + "px";
                    target.style.transitionDuration = 0.35 + "s";
                    setTimeout(function () {
                        target.style.width = 250 + "px";
                        target.style.transitionDuration = 0.35 + "s";
                        for (var i = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 190 + "px";
                            iconTitle_AR[i].style.opacity = 1.0;
                            iconTitle_AR[i].style.transitionDuration = 0.35 + "s";
                        }
                        ;
                    }, 350);
                    // Strips:
                    strip_AR[1].style.width = 0 + "px";
                    strip_AR[1].style.transitionDuration = 0.175 + "s";
                    strip_AR[0].style.transform = "rotate(45deg)";
                    strip_AR[0].style.transitionDuration = 0.35 + "s";
                    strip_AR[2].style.transform = "rotate(-45deg)";
                    strip_AR[2].style.transitionDuration = 0.35 + "s";
                }
                else if (_this.isEnable === true) { // Hide target:
                    // Switch:
                    _this.isEnable = false;
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom right, rgb(70,70,70), rgb(70,70,70))";
                    button.style.transitionDuration = 0.35 + "s";
                    for (var i = 0; i < 3; i++) {
                        strip_AR[i].style.backgroundColor = "#BBB";
                        strip_AR[i].style.transitionDuration = 0.0 + "s";
                    }
                    ;
                    target.style.width = 60 + "px";
                    target.style.transitionDuration = 0.35 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        iconTitle_AR[i].style.width = 0 + "px";
                        iconTitle_AR[i].style.opacity = 0.0;
                        iconTitle_AR[i].style.transitionDuration = 0.35 + "s";
                    }
                    ;
                    setTimeout(function () {
                        target.style.height = 0 + "px";
                        target.style.transitionDuration = 0.35 + "s";
                    }, 350);
                    // Strips:
                    strip_AR[1].style.width = 30 + "px";
                    strip_AR[1].style.transitionDuration = 0.175 + "s";
                    strip_AR[0].style.transform = "rotate(0deg)";
                    strip_AR[0].style.transitionDuration = 0.35 + "s";
                    strip_AR[2].style.transform = "rotate(0deg)";
                    strip_AR[2].style.transitionDuration = 0.35 + "s";
                }
            }, false);
        });
    },
};
navMob_dropdownButton_OBJ.action();
