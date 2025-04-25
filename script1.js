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