const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', ()=>{
        if(slide.classList.contains('active')){
            clearActiveClasses();
        }
        else{
            clearActiveClasses();
            slide.classList.add('active');
        }
    })
}

function clearActiveClasses(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}