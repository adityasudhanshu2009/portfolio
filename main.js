let text=document.getElementById('text');
let leaf=document.getElementById('leaf');
let hill1=document.getElementById('hill1');
let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');
let foot = document.querySelector('.footer');


// function getFooterScrollValue() {
//     const footer = foot;
//     const footerTop = footer.offsetTop;
//     const scrollTop =  document.documentElement.scrollTop;
//     return scrollTop;
//   }

window.addEventListener('scroll',()=>{
    // let cond = getFooterScrollValue();
    // console.log(cond);

    let value=window.scrollY;
    console.log(value);
    leaf.style.top=value*-1.5+'px';
    leaf.style.left=value*1.5+'px';
    hill4.style.left=value*-1.5+'px';
    hill5.style.left=value*1.5+'px';
    // console.log(typeof(hill1.style.top));
    let cond = Number(hill1.style.top);
    // console.log(typeof(cond) + " " + hill1.style.top);
    if(value>800){
        console.log(hill1.style.top);
        hill1.style.top=800+'px';
        text.style.marginTop = 800 + 'px';
    }else{
        hill1.style.top=value*1+'px';
        text.style.marginTop = value * 1.5 + 'px';
        

    }
});

