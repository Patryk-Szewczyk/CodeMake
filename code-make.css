const page_OBJ: {
    setPage: Function
} = {
    setPage(): void {
        let hdr: HTMLDivElement = document.querySelector('div.header');
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, () => {
                let hgt: string = String(window.innerHeight);
                hdr.style.height = hgt + 'px';
            }, false);
        });
    }
};
page_OBJ.setPage();

const navMob_dropdownButton_OBJ: {
    action: Function,
    isEnable: boolean
} = {
    isEnable: false,
    action() {
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
                    this.isEnable = true;
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom left, hsl(37, 90%, 40%), hsl(37, 100%, 49%), hsl(37, 90%, 62%))";
                    button.style.transitionDuration = 0.35 + "s";
                    for (let i: number = 0; i < 3; i++) {
                        strip_AR[i].style.backgroundColor = "rgb(50,50,50)";
                        strip_AR[i].style.transitionDuration = 0.0 + "s";
                    };
                    target.style.height = 265 + "px";
                    target.style.transitionDuration = 0.35 + "s";
                    setTimeout(() => {
                        target.style.width = 250 + "px";
                        target.style.transitionDuration = 0.35 + "s";
                        for (let i: number = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 190 + "px";
                            iconTitle_AR[i].style.opacity = 1.0;
                            iconTitle_AR[i].style.transitionDuration = 0.35 + "s";
                        };
                    }, 350);
                    // Strips:
                    strip_AR[1].style.width = 0 + "px";
                    strip_AR[1].style.transitionDuration = 0.175 + "s";
                    strip_AR[0].style.transform = "rotate(45deg)";
                    strip_AR[0].style.transitionDuration = 0.35 + "s";
                    strip_AR[2].style.transform = "rotate(-45deg)";
                    strip_AR[2].style.transitionDuration = 0.35 + "s";
                } else if (this.isEnable === true) {  // Hide target:
                    // Switch:
                    this.isEnable = false;
                    // Target:
                        button.style.backgroundImage = "linear-gradient(to bottom right, rgb(70,70,70), rgb(70,70,70))";
                        button.style.transitionDuration = 0.35 + "s";
                        for (let i: number = 0; i < 3; i++) {
                            strip_AR[i].style.backgroundColor = "#BBB";
                            strip_AR[i].style.transitionDuration = 0.0 + "s";
                        };
                        target.style.width = 60 + "px";
                        target.style.transitionDuration = 0.35 + "s";
                        for (let i: number = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 0 + "px";
                            iconTitle_AR[i].style.opacity = 0.0;
                            iconTitle_AR[i].style.transitionDuration = 0.35 + "s";
                        };
                    setTimeout(() => {
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
