
const top_btn=document.querySelector(".top_btn");

function handleScroll(){
    const positionY=window.scrollY;
    const windowY=window.innerHeight;

    top_btn.style.opacity=`${positionY/(document.body.clientHeight - 
        windowY)}`;
}

window.addEventListener("scroll",handleScroll);

const subText=document.querySelector(".subText");
const show_more_btn=document.querySelector(".show_more_btn")

function checkSubtextHeight() {
    let subTextElements = document.querySelectorAll('.subText');
    subTextElements.forEach(function(subTextElement) {
        if (subTextElement.clientHeight > 30) { 
            console.log(subTextElement.offsetHeight )
            subTextElement.nextElementSibling.style.display = 'block'; 
        }
    });
}

checkSubtextHeight();