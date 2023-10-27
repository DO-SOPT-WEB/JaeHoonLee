
const top_btn=document.querySelector(".top_btn");

function handleScroll(){
    const positionY=window.scrollY;
    const windowY=window.innerHeight;

    top_btn.style.opacity=`${positionY/(document.body.clientHeight - 
        windowY)}`;
}

window.addEventListener("scroll",handleScroll);



function checkSubtextHeight() {
    let subTextElements = document.querySelectorAll('.subText');
    subTextElements.forEach(function(subTextElement) {

        if (subTextElement.innerHTML.length > 40) { 
            subTextElement.nextElementSibling.style.display = 'block'; 
        }
    });
}

checkSubtextHeight();