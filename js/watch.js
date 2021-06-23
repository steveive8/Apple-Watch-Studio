let selections = {
    current: 0,
    case: {
        init: true,
        category: 2,
        index: 3,
        absoluteIndex: 0,
    },
    band: {
        init: true,
        category: 1,
        index: 5,
        absoluteIndex: 0,
    },
    size: {
        init: true,
        category: 0,
        index: 0,
        absoluteIndex: 0,
    },
}

const imgs = document.getElementsByClassName('image_wrapper');
const images = document.getElementById('images');

const changer = () => {
    images.style.opacity = 0;
    setTimeout(() => {
        images.style.opacity = 1;
    }, 1000)
}

const scaler = () => {
    const fixedimg = document.getElementsByClassName('image_wrapper_fixed')[0];
    const firstimgs = document.getElementsByClassName('first_img');
    const lastimgs = document.getElementsByClassName('last_image');
    if(selections.size.index === 1){
        fixedimg.classList.add('_44_scale');
        for (let i = 0; i < imgs.length; i++){
            imgs[i].classList.add('_44_scale');
        }
        for (let i = 0; i < firstimgs.length; i++){
            firstimgs[i].style = "margin-right: 38px;"
            lastimgs[i].style = "margin-left: 38px;"
        }
    } else {
        fixedimg.classList.remove('_44_scale');
        for (let i = 0; i < imgs.length; i++){
            imgs[i].classList.remove('_44_scale');
        }
        for (let i = 0; i < firstimgs.length; i++){
            firstimgs[i].style="margin-right: 0px;"
            lastimgs[i].style = "margin-left: 0px;"
        }
    }
}

const texter = () => {
    const text = document.getElementById('text');
    let size = selections.size.index === 0 ? '40mm' : '44mm';
    let case_index = selections.case.absoluteIndex;
    let band_index = selections.band.absoluteIndex;
    text.innerHTML = `<div id="texts">
        ${size} ${description.case[case_index]} with ${description.band[band_index]}
    </div>`;
}

const sourcer = () =>  {
    if(selections.current == 0){
        return {
            band: `public/imgs/applewatch/bands/${selections.band.category}/${selections.band.index}.jpeg`,
            case: `public/imgs/applewatch/cases/${selections.case.category}/${selections.case.index}.png`
        }
    } else if(selections.current == 1){
        return `public/imgs/applewatch/bands/${selections.band.category}/${selections.band.index}.jpeg`;
    } else if(selections.current == 2){
        return `public/imgs/applewatch/cases/${selections.case.category}/${selections.case.index}.png`;
    }
}

const WatchFront = (i) => {
    changer();
    setTimeout(() => {
        if(i == 0){
        sizer();
        } else if (i == 1){
            caser();
        } else if (i == 2){
            bander();
        }
    },750)
}

// 0 : Aluminum Case
// 1 : Stainless Steel
// 2 : Titanium 
const caser = () => {
    images.innerHTML = `
    <div class="image_wrapper_fixed">
        <div class="image_wrapper_wrap">
            <img src=${sourcer()} />
        </div>
    </div>
    <div class="image_wrapper" style="padding-left: calc(50vw - 156px)">
        <div class="image_wrapper_wrap">
            <img class="first_img" src="public/imgs/applewatch/cases/0/1.png" />
            <input type="hidden" value="category:0, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/0/2.png" />
            <input type="hidden" value="category:0, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/0/3.png" />
            <input type="hidden" value="category:0, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/0/4.png" />
            <input type="hidden" value="category:0, index: 4" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/0/5.png" />
            <input type="hidden" value="category:0, index: 5" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/1/1.png" />
            <input type="hidden" value="category:1, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/1/2.png" />
            <input type="hidden" value="category:1, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/1/3.png" />
            <input type="hidden" value="category:1, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/cases/2/1.png" />
            <input type="hidden" value="category:2, index: 1" />
        </div>
    </div>
    <div class="image_wrapper" style="padding-right: calc(50vw - 156px)">
        <div class="image_wrapper_wrap">
            <img class="last_image" src="public/imgs/applewatch/cases/2/2.png" />
            <input type="hidden" value="category:2, index: 2" />
        </div>
    </div>
`;  
    scaler();
    images.scroll({
        left: selections.case.absoluteIndex * 315,
        behavior: 'smooth'
    });
    selections.case.init && setTimeout(() => {
        images.scroll({
            left: 315,
            behavior: 'smooth'
        });
    }, 300)
    selections.case.init = false;
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', (e) => {
            selections.case.absoluteIndex = i;
            values = e.currentTarget.children[0].children[1].value
            let category = values.slice(9,10);
            let index = values.slice(19,20);
            selections.case.category = Number(category);
            selections.case.index = Number(index);
            images.scroll({
                left: i * 315,
                behavior: 'smooth'
            })
            texter();
        });
    }
}

const sizer = () => {
    images.innerHTML = `
        <div class="image_wrapper" style="padding-left: calc(50vw - 156px)">
            <div class="image_wrapper_wrap">
                <img class="sizer" src=${sourcer().band} />
                <input type="hidden" value="category:0, index: 0" />
                <img class="sizer" src=${sourcer().case} />
            </div>
        </div>
        <div class="image_wrapper comming_size _44" style="padding-right: calc(50vw - 210px)">
            <div class="image_wrapper_wrap">
         <img class="sizer" src=${sourcer().band} />
                <input type="hidden" value="category:0, index: 1" />
                <img class="sizer" src=${sourcer().case} />
            </div>
        </div>
    `;
    images.scroll({
        left:  (selections.size.absoluteIndex+ 1) * 315,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const comming_size = document.getElementsByClassName('comming_size')[0];
        comming_size.style.paddingLeft = "0vw";
    }, 300)
    selections.size.init && setTimeout(() => {
        images.scroll({
            left:  315 ,
            behavior: 'smooth'
        });
    }, 300)
    
    selections.size.init = false;
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', (e) => {
            selections.size.absoluteIndex = i;
            values = e.currentTarget.children[0].children[1].value
            let category = values.slice(9,10);
            let index = values.slice(19,20);
            selections.size.category = Number(category);
            selections.size.index = Number(index);
            images.scroll({
                left: i * 315,
                behavior: 'smooth'
            })
            texter();
        })
    }
}

//0 : Braided
//1 : Leather
//2 : Solo Loop
//3 : Sports Band
//4 : Sports Loop
//5 : Stainless

const bander = () => {
    images.innerHTML = `
    <div class="image_wrapper_fixed">
        <div class="image_wrapper_wrap">
            <img src=${sourcer()} />
        </div>
    </div>
    <div class="image_wrapper" style="padding-left: calc(50vw - 156px)">
        <div class="image_wrapper_wrap">
            <img class="first_img" src="public/imgs/applewatch/bands/0/1.jpeg" />
            <input type="hidden" value="category:0, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/2.jpeg" />
            <input type="hidden" value="category:0, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/3.jpeg" />
            <input type="hidden" value="category:0, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/4.jpeg" />
            <input type="hidden" value="category:0, index: 4" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/5.jpeg" />
            <input type="hidden" value="category:0, index: 5" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/6.jpeg" />
            <input type="hidden" value="category:0, index: 6" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/7.jpeg" />
            <input type="hidden" value="category:0, index: 7" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/8.jpeg" />
            <input type="hidden" value="category:0, index: 8" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/9.jpeg" />
            <input type="hidden" value="category:0, index: 9" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/0/10.jpeg" />
            <input type="hidden" value="category:0, index: 10" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/1.jpeg" />
            <input type="hidden" value="category:1, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/2.jpeg" />
            <input type="hidden" value="category:1, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/3.jpeg" />
            <input type="hidden" value="category:1, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/4.jpeg" />
            <input type="hidden" value="category:1, index: 4" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/5.jpeg" />
            <input type="hidden" value="category:1, index: 5" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/6.jpeg" />
            <input type="hidden" value="category:1, index: 6" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/7.jpeg" />
            <input type="hidden" value="category:1, index: 7" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/1/8.jpeg" />
            <input type="hidden" value="category:1, index: 8" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/1.jpeg" />
            <input type="hidden" value="category:2, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/2.jpeg" />
            <input type="hidden" value="category:2, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/3.jpeg" />
            <input type="hidden" value="category:2, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/4.jpeg" />
            <input type="hidden" value="category:2, index: 4" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/5.jpeg" />
            <input type="hidden" value="category:2, index: 5" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/6.jpeg" />
            <input type="hidden" value="category:2, index: 6" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/7.jpeg" />
            <input type="hidden" value="category:2, index: 7" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/8.jpeg" />
            <input type="hidden" value="category:2, index: 8" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/9.jpeg" />
            <input type="hidden" value="category:2, index: 9" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/10.jpeg" />
            <input type="hidden" value="category:2, index: 10" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/2/11.jpeg" />
            <input type="hidden" value="category:2, index: 11" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/1.jpeg" />
            <input type="hidden" value="category:3, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/2.jpeg" />
            <input type="hidden" value="category:3, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/3.jpeg" />
            <input type="hidden" value="category:3, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/4.jpeg" />
            <input type="hidden" value="category:3, index: 4" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/5.jpeg" />
            <input type="hidden" value="category:3, index: 5" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/6.jpeg" />
            <input type="hidden" value="category:3, index: 6" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/7.jpeg" />
            <input type="hidden" value="category:3, index: 7" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/8.jpeg" />
            <input type="hidden" value="category:3, index: 8" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/9.jpeg" />
            <input type="hidden" value="category:3, index: 9" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/3/10.jpeg" />
            <input type="hidden" value="category:3, index: 10" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/1.jpeg" />
            <input type="hidden" value="category:4, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/2.jpeg" />
            <input type="hidden" value="category:4, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/3.jpeg" />
            <input type="hidden" value="category:4, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/4.jpeg" />
            <input type="hidden" value="category:4, index: 4" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/5.jpeg" />
            <input type="hidden" value="category:4, index: 5" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/6.jpeg" />
            <input type="hidden" value="category:4, index: 6" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/7.jpeg" />
            <input type="hidden" value="category:4, index: 7" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/8.jpeg" />
            <input type="hidden" value="category:4, index: 8" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/4/9.jpeg" />
            <input type="hidden" value="category:4, index: 9" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/5/1.jpeg" />
            <input type="hidden" value="category:5, index: 1" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/5/2.jpeg" />
            <input type="hidden" value="category:5, index: 2" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/5/3.jpeg" />
            <input type="hidden" value="category:5, index: 3" />
        </div>
    </div>
    <div class="image_wrapper">
        <div class="image_wrapper_wrap">
            <img src="public/imgs/applewatch/bands/5/4.jpeg" />
            <input type="hidden" value="category:5, index: 4" />
        </div>
    </div>
    <div class="image_wrapper" style="padding-right: calc(50vw - 156px)">
        <div class="image_wrapper_wrap">
            <img class="last_image" src="public/imgs/applewatch/bands/5/5.jpeg" />
            <input type="hidden" value="category:5, index: 5" />
        </div>
    </div>
`;
    scaler();
    
    images.scroll({
        left: selections.band.absoluteIndex * 315,
        behavior: 'smooth'
    });
    selections.band.init && setTimeout(() => {
        images.scroll({
            left: 315,
            behavior: 'smooth'
        });
    }, 300)
    const fixedimg = document.getElementsByClassName('image_wrapper_fixed')[0];
    fixedimg.style.zIndex = 10;
    selections.band.init = false;
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', (e) => {
            selections.band.absoluteIndex = i;
            values = e.currentTarget.children[0].children[1].value
            let category = values.slice(9,10);
            let index = values.slice(19,21);
            if (index.slice(1,2) == '"') {
                index = index.slice(0,1)
            }
            selections.band.category = Number(category);
            selections.band.index = Number(index);
            images.scroll({
                left: i * 315,
                behavior: 'smooth'
            });
            texter();
        })
    }
}