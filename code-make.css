console.log('e');

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
        const strips_AR: any[] = [];
        for (let i = 0; i < 3; i++ ) {
            strips_AR[i] = document.querySelectorAll('div.nav-mob-dropdown-strip')[i];
        };
        console.log(strips_AR);
        ['click', 'touchend'].forEach((ev) => {
            button.addEventListener(ev, () => {
                if (this.isEnable === false) {   // Show target:
                    // Switch:
                    this.isEnable = true;
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
                } else if (this.isEnable === true) {  // Hide target:
                    // Switch:
                    this.isEnable = false;
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
