var page_OBJ = {
    setPage: function () {
        var header = document.querySelector('div.header');
        //addEventListener('load', () => {
        var DESKTOP_navbar = document.querySelector('nav.navbar-desktop');
        DESKTOP_navbar.style.top = window.innerHeight + "px";
        DESKTOP_navbar.style.transitionDuration = 0.0 + "s";
        //}, false);
        ['load', 'resize'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                var pageHeight = String(window.innerHeight);
                header.style.height = pageHeight + 'px';
            }, false);
        });
    }
};
page_OBJ.setPage();
var pageMain_VIDEO = {
    video: document.querySelector('video.pm-video-background')
};
var pageIntro_OBJ = {
    DESKTOP_contentCol_AR: [],
    active_AEL: function () {
        var _this = this;
        if (window.innerWidth < 1000) {
            //
        }
        else if (window.innerWidth >= 1000) {
            // Desktop navbar:
            var DESKTOP_navbar_1 = document.querySelector('nav.navbar-desktop');
            // Desktop content:
            var DESKTOP_contentCol_Length_1 = document.querySelectorAll('div.dsk-content-col').length;
            setTimeout(function () {
                DESKTOP_navbar_1.style.top = 0 + "px";
                DESKTOP_navbar_1.style.transitionDuration = 0.75 + "s";
                for (var i = 0; i < DESKTOP_contentCol_Length_1; i++) {
                    _this.DESKTOP_contentCol_AR[i] = document.querySelectorAll('div.dsk-content-col')[i];
                }
                ;
                setTimeout(function () {
                    pageMain_VIDEO.video.play();
                    var header_EL = document.querySelector('div.header');
                    header_EL.style.backgroundColor = "transparent";
                    document.getElementById('dskNavIc0').style.color = 'hsl(215, 100%, 59%)';
                    // Show:
                    var dealy_show_AR = [900, 600, 300, 0];
                    var _loop_1 = function (i) {
                        setTimeout(function () {
                            _this.DESKTOP_contentCol_AR[i].style.width = 0 + '%';
                            _this.DESKTOP_contentCol_AR[i].style.transitionDuration = 1 + 's';
                        }, dealy_show_AR[i]);
                    };
                    for (var i = 0; i <= 3; i++) {
                        _loop_1(i);
                    }
                    ;
                    // Hide:
                    /*const dealy_hide_AR: number[] = [0, 300, 600, 900];
                    for (let i: number = 0; i <= DESKTOP_contentCol_Length; i++) {
                        setTimeout(() => {
                            DESKTOP_contentCol_AR[i].style.width = 25 + '%';
                            DESKTOP_contentCol_AR[i].style.transitionDuration = 1 + 's';
                        }, dealy_hide_AR[i]);
                    };*/
                }, 900);
            }, 200);
        }
    }
};
// RESTRYKCJA z auto-odtwarzaniem wideo tak jak w przypadku odtwarzania muzyki od razu:
var cookie_OBJ = {
    accept: function () {
        var accept_EL = document.querySelector('div.cookie-accept');
        ['click', 'touchend'].forEach(function (ev) {
            accept_EL.addEventListener(ev, function () {
                accept_EL.parentElement.style.display = 'none';
                pageIntro_OBJ.active_AEL();
            }, false);
        });
    },
    about: function () {
        var about_EL = document.querySelector('div.cookie-about');
        ['click', 'touchend'].forEach(function (ev) {
            about_EL.addEventListener(ev, function () {
                window.location.href = 'https://cookieinformation.com/what-is-a-cookie/';
            }, false);
        });
    }
};
cookie_OBJ.accept();
cookie_OBJ.about();
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
                    setTimeout(function () { return _this.isEnable = true; }, 800);
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom left, hsl(215, 90%, 35%), hsl(215, 100%, 49%), hsl(215, 90%, 67%))";
                    button.style.transitionDuration = 0.3 + "s";
                    target.style.height = 265 + "px";
                    target.style.transitionDuration = 0.3 + "s";
                    setTimeout(function () {
                        target.style.width = 250 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                        for (var i = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 190 + "px";
                            iconTitle_AR[i].style.opacity = 1.0;
                            iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        }
                        ;
                    }, 300);
                    // Strips:
                    strip_AR[1].style.width = 0 + "px";
                    strip_AR[1].style.transitionDuration = 0.15 + "s";
                    strip_AR[0].style.transform = "rotate(45deg)";
                    strip_AR[0].style.transitionDuration = 0.3 + "s";
                    strip_AR[2].style.transform = "rotate(-45deg)";
                    strip_AR[2].style.transitionDuration = 0.3 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = 'white';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                    ;
                }
                else if (_this.isEnable === true) { // Hide target:
                    // Switch:
                    setTimeout(function () { return _this.isEnable = false; }, 800);
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom right, rgb(50,50,50), rgb(50,50,50))";
                    button.style.transitionDuration = 0.3 + "s";
                    target.style.width = 60 + "px";
                    target.style.transitionDuration = 0.3 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        iconTitle_AR[i].style.width = 0 + "px";
                        iconTitle_AR[i].style.opacity = 0.0;
                        iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                    ;
                    setTimeout(function () {
                        target.style.height = 0 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                    }, 300);
                    // Strips:
                    strip_AR[1].style.width = 30 + "px";
                    strip_AR[1].style.transitionDuration = 0.15 + "s";
                    strip_AR[0].style.transform = "rotate(0deg)";
                    strip_AR[0].style.transitionDuration = 0.3 + "s";
                    strip_AR[2].style.transform = "rotate(0deg)";
                    strip_AR[2].style.transitionDuration = 0.3 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = '#BBB';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                    ;
                }
            }, false);
        });
    },
};
navMob_dropdownButton_OBJ.action();
var navDesk_dropdownButton_OBJ = {
    currentPage: 0,
    getPages_AR: function () {
        var pages_AR = [];
        var pagesNum = document.querySelectorAll('div.nav-dsk-dropdown-item-icon').length;
        for (var i = 0; i < pagesNum; i++) {
            pages_AR[i] = document.querySelectorAll('section.page')[i];
            if (this.currentPage === i) {
                // nothing
            }
            else if (this.currentPage !== i) {
                pages_AR[i].style.display = 'none';
            }
        }
        ;
        return pages_AR;
    },
    action: function () {
        var _this = this;
        var dropdownButton_AR = [];
        var dropdownTitle_AR = [];
        var ballTop_AR = [];
        var topMenuIcon_AR = [];
        var icon_AR = [];
        var toBallTopARvalInc = 10.5; /*15 - (9 / 2)*/
        var dropdownButtons_Length = document.querySelectorAll('div.nav-dsk-dropdown-item').length;
        var dropdownButtonsGroup_EL = document.querySelector('div.top-nav-buttons-group');
        var ball_EL = document.querySelector('div.nav-dsk-choose-ball');
        for (var i = 0; i < dropdownButtons_Length; i++) {
            ballTop_AR[i] = toBallTopARvalInc;
            toBallTopARvalInc += 45;
        }
        ;
        for (var i = 0; i < dropdownButtons_Length; i++) {
            dropdownButton_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item')[i];
            dropdownTitle_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-title-item')[i];
            topMenuIcon_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item-icon')[i];
            icon_AR[i] = document.getElementById('dskNavIc' + String(i));
            dropdownButton_AR[i].addEventListener('mouseover', function (e) {
                var element = e.currentTarget;
                var element_ID = Number(element.id);
                for (var i_1 = 0; i_1 < dropdownButtons_Length; i_1++) {
                    if (element_ID === i_1) { // Slide ON:
                        dropdownTitle_AR[i_1].style.width = "auto"; /*130px*/
                        dropdownTitle_AR[i_1].style.padding = "0px 17px";
                        dropdownTitle_AR[i_1].style.transitionDuration = 0.3 + "s";
                        ball_EL.style.top = ballTop_AR[i_1] + "px";
                        ball_EL.style.left = 40 + "%";
                        ball_EL.style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i_1].style.left = 20 + "px";
                        topMenuIcon_AR[i_1].style.transitionDuration = 0.3 + "s";
                        if (_this.currentPage !== element_ID) {
                            icon_AR[i_1].style.color = "white";
                            icon_AR[i_1].style.transitionDuration = 0.2 + "s";
                        }
                        else { }
                    }
                    else if (element_ID !== i_1) { // Slide OFF:
                        dropdownTitle_AR[i_1].style.width = 0 + "%";
                        dropdownTitle_AR[i_1].style.padding = "0px";
                        dropdownTitle_AR[i_1].style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i_1].style.left = 0 + "px";
                        topMenuIcon_AR[i_1].style.transitionDuration = 0.3 + "s";
                        if (_this.currentPage !== i_1) {
                            icon_AR[i_1].style.color = "#888";
                            icon_AR[i_1].style.transitionDuration = 0.2 + "s";
                        }
                        else { }
                    }
                }
                ;
            }, false);
            dropdownButtonsGroup_EL.addEventListener('mouseout', function (e) {
                var element = e.currentTarget;
                var element_ID = Number(element.id);
                for (var i_2 = 0; i_2 < dropdownButtons_Length; i_2++) {
                    dropdownTitle_AR[i_2].style.width = 0 + "%";
                    dropdownTitle_AR[i_2].style.padding = "0px";
                    dropdownTitle_AR[i_2].style.transitionDuration = 0.3 + "s";
                    ball_EL.style.left = 0 + "%";
                    ball_EL.style.transitionDuration = 0.3 + "s";
                    topMenuIcon_AR[i_2].style.left = 0 + "px";
                    topMenuIcon_AR[i_2].style.transitionDuration = 0.3 + "s";
                    if (_this.currentPage === i_2) {
                        icon_AR[i_2].style.color = "hsl(215, 100%, 49%)";
                        icon_AR[i_2].style.transitionDuration = 0.2 + "s";
                    }
                    else if (_this.currentPage !== i_2) {
                        icon_AR[i_2].style.color = "#888";
                        icon_AR[i_2].style.transitionDuration = 0.2 + "s";
                    }
                }
                ;
            }, false);
            dropdownButton_AR[i].addEventListener('click', function (e) {
                var element = e.currentTarget;
                var element_ID = Number(element.id);
                var pages_AR = _this.getPages_AR(); // pages
                var _loop_2 = function (i_3) {
                    _this.currentPage = element_ID;
                    if (element_ID === i_3) {
                        icon_AR[i_3].style.color = "hsl(215, 100%, 49%)";
                        icon_AR[i_3].style.transitionDuration = 0.2 + "s";
                        // Hide:
                        var dealy_hide_AR = [0, 0, 0, 0]; /*OLD: 0, 300, 600, 900*/
                        var _loop_3 = function (i_4) {
                            setTimeout(function () {
                                pageIntro_OBJ.DESKTOP_contentCol_AR[i_4].style.width = 25 + '%';
                                pageIntro_OBJ.DESKTOP_contentCol_AR[i_4].style.transitionDuration = 0.8 + 's'; /*OLD: 1*/
                            }, dealy_hide_AR[i_4]);
                        };
                        for (var i_4 = 0; i_4 <= 3; i_4++) {
                            _loop_3(i_4);
                        }
                        ;
                        // Show:
                        setTimeout(function () {
                            pages_AR[i_3].style.display = 'flex';
                            var dealy_show_AR = [0, 0, 0, 0]; /*OLD: 900, 600, 300, 0*/
                            var _loop_4 = function (i_5) {
                                setTimeout(function () {
                                    pageIntro_OBJ.DESKTOP_contentCol_AR[i_5].style.width = 0 + '%';
                                    pageIntro_OBJ.DESKTOP_contentCol_AR[i_5].style.transitionDuration = 0.8 + 's'; /*OLD: 1*/
                                }, dealy_show_AR[i_5]);
                            };
                            for (var i_5 = 0; i_5 <= 3; i_5++) {
                                _loop_4(i_5);
                            }
                            ;
                        }, 1000); /*OLD: 1300*/
                    }
                    else if (element_ID !== i_3) {
                        icon_AR[i_3].style.color = "#888";
                        icon_AR[i_3].style.transitionDuration = 0.2 + "s";
                        setTimeout(function () {
                            pages_AR[i_3].style.display = 'none';
                        }, 1000); /*OLD: 1300*/
                    }
                };
                for (var i_3 = 0; i_3 < dropdownButtons_Length; i_3++) {
                    _loop_2(i_3);
                }
                ;
            }, false);
        }
        ;
    }
};
navDesk_dropdownButton_OBJ.action();
navDesk_dropdownButton_OBJ.getPages_AR();
var pageTransforms_OBJ = {
    isMobile: false,
    isDesktop: false,
    pageWidth: 0,
    getElements: function () {
        var video_EL = document.querySelector('video.pm-video-background');
        return [video_EL];
    },
    transform_AEL: function () {
        var _this = this;
        ['load', 'resize'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.pageWidth = window.innerWidth;
                if (_this.pageWidth < 1000 && _this.isMobile === false) { /// Boolean'y są tutaj zabezpieczeniem przed niechcianym powtarzaniem się wywoływania funkcji:
                    // MOBILE
                    _this.isMobile = true;
                    _this.isDesktop = false;
                    var elements = _this.getElements();
                    var video_EL = elements[0];
                    video_EL.style.display = 'none';
                    video_EL.pause();
                }
                else if (_this.pageWidth >= 1000 && _this.isDesktop === false) {
                    // DESKTOP
                    _this.isDesktop = true;
                    _this.isMobile = false;
                    var elements = _this.getElements();
                    var video_EL = elements[0];
                    video_EL.style.display = 'flex';
                    video_EL.currentTime = 0;
                    video_EL.play();
                }
            }, false);
        });
    }
};
pageTransforms_OBJ.transform_AEL();
