function initalizer () {
    selector();
    sizeSelector();
    caseSelector();
    bandSelector();
    sizer();
    texter();
}

const selector = () => {
    const selectors = document.getElementsByClassName('selector');
    const selector_wraps = document.getElementsByClassName('selector_wrap');
    const selector_titles = document.getElementsByClassName('selector_title');
    let prewidth;
    let postwidth;
    for (let i = 0; i < selectors.length; i++ ){
        selectors[i].addEventListener('click', () => {
            if(selections.current !== i){
                WatchFront(i);
            }
            selections.current = i;
            if(i === 0){
                postwidth = 157.172
            } else if (i === 1){
                postwidth = 330.078
            } else if (i === 2){
                postwidth = 685.875
            }
            selector_wraps[i].classList.remove("wrap_diselected");
            selector_wraps[i].classList.add("wrap_selected");
            selector_titles[i].style = `opacity: 0;`
            selectors[i].style= `width: ${postwidth}px`;
            for(let j = 0; j < selectors.length; j ++) {
                if (j !== i){
                    if(j === 0){
                        prewidth = 64.156
                    } else if (j === 1){
                        prewidth = 70.672
                    } else if (j === 2){
                        prewidth = 71.422
                    }
                    selector_wraps[j].classList.remove("wrap_selected");
                    selector_wraps[j].classList.add("wrap_diselected");
                    selector_titles[j].style = `opacity: 1;`
                    selectors[j].style= `width: ${prewidth}px`;
                }
            }
        })
    }
}

const sizeSelector = () => {
    const sizes = document.getElementsByClassName('size');
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('click', () => {
            scroller();
            selections.size = i
            if(i == 0){
                images.scroll({
                    left: 0 * 315,
                    behavior: 'smooth',
                })
            } else if (i == 1){
                images.scroll({
                    left: 1 * 315,
                    behavior: 'smooth',
                })
            }
            sizes[i].style="font-weight: 600;"
            for (let j = 0; j < sizes.length; j ++) {
                if(j !== i) {
                    sizes[j].style="font-weight: 400;"
                }
            }
        })
    }
};

const caseSelector = () => {
    const cases = document.getElementsByClassName('case');
    for (let i = 0; i < cases.length; i++) {
        cases[i].addEventListener('click', () => {
            scroller();
            selections.case = i
            if(i == 0){
                selections.band.absoluteIndex = 0
                images.scroll({
                    left: 0 * 315,
                    behavior: 'smooth',
                })
            } else if (i == 1){
                selections.band.absoluteIndex = 5
                images.scroll({
                    left: 5 * 315,
                    behavior: 'smooth',
                })
            } else if(i == 2){
                selections.band.absoluteIndex = 8
                images.scroll({
                    left: 8 * 315,
                    behavior: 'smooth',
                })
            }
            cases[i].style="font-weight: 600;"
            for (let j = 0; j < cases.length; j ++) {
                if(j !== i) {
                    cases[j].style="font-weight: 400;"
                }
            }
        })
    }
};

const bandSelector = () => {
    const bands = document.getElementsByClassName('band');
    for (let i = 0; i < bands.length; i++) {
        bands[i].addEventListener('click', () => {
            selections.band = i
            if(i == 0){
                selections.band.absoluteIndex = 0
                images.scroll({
                    left: 0 * 315,
                    behavior: 'smooth',
                })
            } else if (i == 1){
                selections.band.absoluteIndex = 10
                images.scroll({
                    left: 10 * 315,
                    behavior: 'smooth',
                })
            } else if(i == 2){
                selections.band.absoluteIndex = 18
                images.scroll({
                    left: 18 * 315,
                    behavior: 'smooth',
                })
            } else if (i == 3){
                selections.band.absoluteIndex = 29
                images.scroll({
                    left: 29 * 315,
                    behavior: 'smooth',
                })
            } else if(i == 4){
                selections.band.absoluteIndex = 39
                images.scroll({
                    left: 39 * 315,
                    behavior: 'smooth',
                })
            } else if(i == 5){
                selections[current].absoluteIndex = 48
                images.scroll({
                    left: 48 * 315,
                    behavior: 'smooth',
                })
            }
            bands[i].style="font-weight: 600;"
            for (let j = 0; j < bands.length; j ++) {
                if(j !== i) {
                    bands[j].style="font-weight: 400;"
                }
            }
        })
    }
}

const scroller = () => {
    const scrolloffset = images.scrollLeft
    let id = Math.floor(scrolloffset / 315) + 1;
    let category = 0;
    let current
    if(selections.current == 0) {
        current = 'size'
    } else if (selections.current == 1){
        current = 'case'
        if (id > 6) {
            category = 1
            id = id - 5;
            if(id > 4) {
                category = 2;
                id = id - 3;
            }
        }
    } else if (selections.current == 2){
        current = 'band'
        if(id > 11){
            category = 1
            id = id - 10;
            if(id > 9){
                category = 2;
                id = id - 8;
                if(id > 12){
                    category = 3;
                    id = id - 11;
                    if (id > 11) {
                        category = 4;
                        id = id -10;
                        if (id > 10) {
                            category = 5;
                            id = id - 9;
                        }
                    }
                }
            }
        }
    }
    selections[current].category = category;
    selections[current].index = id;
    selections[current].init = false;
    selections[current].absoluteIndex = Math.floor(scrolloffset / 315);
    return texter();
}

images.addEventListener('scroll', function () {
    scroller()
});

window.addEventListener('load', () => {
    initalizer();
})