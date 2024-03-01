// selectors
const nav = document.querySelector(".nav");
const images = document.querySelectorAll("img");

// on mount

images.forEach((image)=>{
    image.classList.add('backgroundAnimation')
})

images.forEach((image)=>{
    image.addEventListener('load', ()=>{
        image.classList.remove("backgroundAnimation");
    })
})

// handlers
const handleFixNavbar = ()=>{
    const scrolled = window.scrollY;
    nav.style.top = -10+"%"

    if(scrolled > 150){
        nav.classList.add("fixed");
        nav.style.top = 0+"%"

    }
    else{
        nav.classList.remove("fixed");
    }
}

const updateProgressBar = ()=>{
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
    nav.style.setProperty('--progress', scrollPercent)
}


// events
window.addEventListener('scroll', handleFixNavbar);

document.addEventListener('scroll', updateProgressBar);