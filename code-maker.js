console.log('e');
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
        var strips_AR = [];
        for (var i = 0; i < 3; i++) {
            strips_AR[i] = document.querySelectorAll('div.nav-mob-dropdown-strip')[i];
        }
        ;
        console.log(strips_AR);
        ['click', 'touchend'].forEach(function (ev) {
            button.addEventListener(ev, function () {
                if (_this.isEnable === false) { // Show target:
                    // Switch:
                    _this.isEnable = true;
                    // Target:
                    target.style.height = 500 + "px";
                    target.style.transitionDuration = 0.35 + "s";
                    // Strips:
                    strips_AR[1].style.width = 0 + "px";
                    strips_AR[1].style.transitionDuration = 0.175 + "s";
                    strips_AR[0].style.transform = "rotate(45deg)";
                    strips_AR[0].style.transitionDuration = 0.35 + "s";
                    strips_AR[2].style.transform = "rotate(-45deg)";
                    strips_AR[2].style.transitionDuration = 0.35 + "s";
                }
                else if (_this.isEnable === true) { // Hide target:
                    // Switch:
                    _this.isEnable = false;
                    // Target:
                    target.style.height = 0 + "px";
                    target.style.transitionDuration = 0.35 + "s";
                    // Strips:
                    strips_AR[1].style.width = 30 + "px";
                    strips_AR[1].style.transitionDuration = 0.175 + "s";
                    strips_AR[0].style.transform = "rotate(0deg)";
                    strips_AR[0].style.transitionDuration = 0.35 + "s";
                    strips_AR[2].style.transform = "rotate(0deg)";
                    strips_AR[2].style.transitionDuration = 0.35 + "s";
                }
            }, false);
        });
    }
};
navMob_dropdownButton_OBJ.action();
