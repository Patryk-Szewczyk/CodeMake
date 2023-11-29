const page_OBJ: {
    setPage: Function
} = {
    setPage(): void {
        let header: HTMLDivElement = document.querySelector('div.header');
        //addEventListener('load', () => {
            const DESKTOP_navbar: HTMLDivElement = document.querySelector('nav.navbar-desktop');
            DESKTOP_navbar.style.top = window.innerHeight + "px";
            DESKTOP_navbar.style.transitionDuration = 0.0 + "s";
        //}, false);
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, () => {
                let pageHeight: string = String(window.innerHeight);
                header.style.height = pageHeight + 'px';
            }, false);
        });
    }
};
page_OBJ.setPage();

const pageMain_VIDEO: {
    video: HTMLVideoElement
} = {
    video: document.querySelector('video.pm-video-background')
};

const pageIntro_OBJ: {
    active_AEL: Function
} = {
    active_AEL() {
        if (window.innerWidth < 1000) {
            //
        } else if (window.innerWidth >= 1000) {
            // Desktop navbar:
            const DESKTOP_navbar: HTMLDivElement = document.querySelector('nav.navbar-desktop');
            // Desktop content:
            const DESKTOP_contentCol_AR: any[] = [];
            const DESKTOP_contentCol_Length: number = document.querySelectorAll('div.dsk-content-col').length;
            setTimeout(() => {
                DESKTOP_navbar.style.top = 0 + "px";
                DESKTOP_navbar.style.transitionDuration = 0.75 + "s";
                for (let i: number = 0; i < DESKTOP_contentCol_Length; i++) {
                    DESKTOP_contentCol_AR[i] = document.querySelectorAll('div.dsk-content-col')[i];
                };
                setTimeout(() => {
                    pageMain_VIDEO.video.play();
                    const header_EL: HTMLDivElement = document.querySelector('div.header');
                    header_EL.style.backgroundColor = "transparent";
                    // Show:
                    const dealy_show_AR: number[] = [900, 600, 300, 0];
                    for (let i: number = 0; i <= 3; i++) {
                        setTimeout(() => {
                            DESKTOP_contentCol_AR[i].style.width = 0 + '%';
                            DESKTOP_contentCol_AR[i].style.transitionDuration = 1 + 's';
                        }, dealy_show_AR[i]);
                    };
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
const cookie_OBJ: {
    accept: Function
    about: Function
} = {
    accept() {
        const accept_EL: HTMLDivElement = document.querySelector('div.cookie-accept');
        ['click', 'touchend'].forEach((ev) => {
            accept_EL.addEventListener(ev, () => {
                accept_EL.parentElement.style.display = 'none';
                pageIntro_OBJ.active_AEL();
            }, false);
        });
    },
    about() {
        const about_EL: HTMLDivElement = document.querySelector('div.cookie-about');
        ['click', 'touchend'].forEach((ev) => {
            about_EL.addEventListener(ev, () => {
                window.location.href = 'https://cookieinformation.com/what-is-a-cookie/';
            }, false);
        });
    }
};
cookie_OBJ.accept();
cookie_OBJ.about();

const navMob_dropdownButton_OBJ: {
    action: Function,
    isEnable: boolean
} = {
    isEnable: false,
    action(): void {
        const button: HTMLDivElement = document.querySelector('div.nav-mob-dropdown-button');
        const target: HTMLDivElement = document.querySelector('div.nav-mob-dropdown-target');
        const strip_AR: any[] = [];
        for (let i: number = 0; i < 3; i++) {
            strip_AR[i] = document.querySelectorAll('div.nav-mob-dropdown-strip')[i];
        };
        const iconTitle_AR: any[] = [];
        const iconTitles_Length: number = document.querySelectorAll('div.nav-mov-dropdown-item-title').length;
        for (let i: number = 0; i < iconTitles_Length; i++) {
            iconTitle_AR[i] = document.querySelectorAll('div.nav-mov-dropdown-item-title')[i];
        };
        ['click', 'touchend'].forEach((ev) => {
            button.addEventListener(ev, () => {
                if (this.isEnable === false) {   // Show target:
                    // Switch:
                    setTimeout(() => this.isEnable = true, 800);
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom left, hsl(215, 90%, 35%), hsl(215, 100%, 49%), hsl(215, 90%, 67%))";
                    button.style.transitionDuration = 0.3 + "s";
                    target.style.height = 265 + "px";
                    target.style.transitionDuration = 0.3 + "s";
                    setTimeout(() => {
                        target.style.width = 250 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                        for (let i: number = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 190 + "px";
                            iconTitle_AR[i].style.opacity = 1.0;
                            iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        };
                    }, 300);
                    // Strips:
                    strip_AR[1].style.width = 0 + "px";
                    strip_AR[1].style.transitionDuration = 0.15 + "s";
                    strip_AR[0].style.transform = "rotate(45deg)";
                    strip_AR[0].style.transitionDuration = 0.3 + "s";
                    strip_AR[2].style.transform = "rotate(-45deg)";
                    strip_AR[2].style.transitionDuration = 0.3 + "s";
                    for (let i: number = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = 'white';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    };
                } else if (this.isEnable === true) {  // Hide target:
                    // Switch:
                    setTimeout(() => this.isEnable = false, 800);
                    // Target:
                        button.style.backgroundImage = "linear-gradient(to bottom right, rgb(50,50,50), rgb(50,50,50))";
                        button.style.transitionDuration = 0.3 + "s";
                        target.style.width = 60 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                        for (let i: number = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 0 + "px";
                            iconTitle_AR[i].style.opacity = 0.0;
                            iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        };
                    setTimeout(() => {
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
                    for (let i: number = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = '#BBB';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    };
                }
            }, false);
        });
    },
};
navMob_dropdownButton_OBJ.action();

const navDesk_dropdownButton_OBJ: {
    action: Function
} = {
    action () {
        const dropdownButton_AR: any[] = [];
        const dropdownTitle_AR: any[] = [];
        const ballTop_AR: number[] = [];
        const topMenuIcon_AR: any[] = [];
        let toBallTopARvalInc: number = 10.5;   /*15 - (9 / 2)*/
        const dropdownButtons_Length: number = document.querySelectorAll('div.nav-dsk-dropdown-item').length;
        const dropdownButtonsGroup_EL: any = document.querySelector('div.top-nav-buttons-group');
        const ball_EL: any = document.querySelector('div.nav-dsk-choose-ball');
        for (let i: number = 0; i < dropdownButtons_Length; i++) {
            //const topMenuItem: any = document.querySelectorAll('div.nav-dsk-dropdown-item')[0];
            //const topMenuItem_Height: number = topMenuItem.getBoundingClientRect().height;
            ballTop_AR[i] = toBallTopARvalInc;
            toBallTopARvalInc += 45;
            //alert(topMenuItem_Height);
        };
        for (let i: number = 0; i < dropdownButtons_Length; i++) {
            dropdownButton_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item')[i];
            dropdownTitle_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-title-item')[i];
            topMenuIcon_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item-icon')[i];
            dropdownButton_AR[i].addEventListener('mouseover', (e) => {
                const element: HTMLDivElement = e.currentTarget;
                const element_ID: number = Number(element.id);
                for (let i: number = 0; i < dropdownButtons_Length; i++) {
                    if (element_ID === i) {   // Slide ON:
                        dropdownTitle_AR[i].style.width = "auto";   /*130px*/
                        dropdownTitle_AR[i].style.padding = "0px 17px";
                        dropdownTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        ball_EL.style.top = ballTop_AR[i] + "px";
                        ball_EL.style.left = 40 + "%";
                        ball_EL.style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i].style.left = 20 + "px";
                        topMenuIcon_AR[i].style.transitionDuration = 0.3 + "s";
                    } else if (element_ID !== i) {   // Slide OFF:
                        dropdownTitle_AR[i].style.width = 0 + "%";
                        dropdownTitle_AR[i].style.padding = "0px";
                        dropdownTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i].style.left = 0 + "px";
                        topMenuIcon_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                };
            }, false);
            dropdownButtonsGroup_EL.addEventListener('mouseout', (e) => {
                const element: HTMLDivElement = e.currentTarget;
                const element_ID: number = Number(element.id);
                for (let i: number = 0; i < dropdownButtons_Length; i++) {
                    dropdownTitle_AR[i].style.width = 0 + "%";
                    dropdownTitle_AR[i].style.padding = "0px";
                    dropdownTitle_AR[i].style.transitionDuration = 0.3 + "s";
                    ball_EL.style.left = 0 + "%";
                    ball_EL.style.transitionDuration = 0.3 + "s";
                    topMenuIcon_AR[i].style.left = 0 + "px";
                    topMenuIcon_AR[i].style.transitionDuration = 0.3 + "s";
                };
            }, false);
        };
    }
};
navDesk_dropdownButton_OBJ.action();

const pageTransforms_OBJ: {
    transform_AEL: Function,
    getElements: Function,
    pageWidth: number,
    isMobile: boolean,
    isDesktop: boolean
} = {
    isMobile: false,
    isDesktop: false,
    pageWidth: 0,
    getElements(): (HTMLDivElement | HTMLVideoElement)[] {
        const video_EL: HTMLVideoElement = document.querySelector('video.pm-video-background');
        return [video_EL];
    },
    transform_AEL() {
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, () => {
                this.pageWidth = window.innerWidth;
                if (this.pageWidth < 1000 && this.isMobile === false) {   /// Boolean'y są tutaj zabezpieczeniem przed niechcianym powtarzaniem się wywoływania funkcji:
                    // MOBILE
                    this.isMobile = true;
                    this.isDesktop = false;
                    const elements: HTMLVideoElement = this.getElements();
                    const video_EL = elements[0];
                    video_EL.style.display = 'none';
                    video_EL.pause();
                } else if (this.pageWidth >= 1000 && this.isDesktop === false) {
                    // DESKTOP
                    this.isDesktop = true;
                    this.isMobile = false;
                    const elements: HTMLVideoElement = this.getElements();
                    const video_EL = elements[0];
                    video_EL.style.display = 'flex';
                    video_EL.currentTime = 0;
                    video_EL.play();
                }
            }, false);
        });
    }
};
pageTransforms_OBJ.transform_AEL();
