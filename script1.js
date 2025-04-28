function additionalOptions(event){
    const card=document.getElementById('additionalOptioncard')
    const ul=document.getElementById('additionalList')
    ul.style.display='block'
    card.style.display='flex'
    card.style.justifyContent='space-between'
    card.style.position='fixed'
    card.style.zIndex='1'
    var x = event.clientX;     // get the horizontal coordinate
    var y = event.clientY; 

    card.style.left = x + "px";
    card.style.top = y + "px";
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


