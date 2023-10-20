console.log('e');

const page_Obj: {
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
page_Obj.setPage();