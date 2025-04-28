function additionalOptions() {
    const card = document.getElementById('additionalOptioncard');
    const ul = document.getElementById('additionalList');
    
    ul.style.display = 'block';
    card.style.display = 'flex';
    card.style.justifyContent = 'space-between';
    card.style.position = 'fixed';
    card.style.zIndex = '1000';

    // Фіксоване положення меню, наприклад, справа зверху
    card.style.left = 'calc( 220px -10% )'; /* 220px — ширина меню */
    card.style.top = '100px'; /* відступ від верху */
}


function closeAdditionalOption(){
    const card=document.getElementById('additionalOptioncard')
    card.style.display='none'
}

const Carousel=document.getElementById('carousel')
const nextbutton=document.getElementById('nextButton')
const previousbutton=document.getElementById('previousButton')

const cardsMove=setInterval(()=>{
    Carousel.scrollBy({
        left:260
    })
},9500)


nextbutton.addEventListener('click',()=>{
    Carousel.scrollBy({
        left:130
    })
    clearInterval(cardsMove)
})

previousbutton.addEventListener('click',()=>{
    Carousel.scrollBy({
        left:-130
    })
    clearInterval(cardsMove)
})


