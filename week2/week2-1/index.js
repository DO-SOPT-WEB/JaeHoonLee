const top_btn = document.querySelector(".top_btn");

function handleScroll() {
  const positionY = window.scrollY;
  const windowY = window.innerHeight;

  top_btn.style.opacity = `${
    positionY / (document.body.clientHeight - windowY)
  }`;
}

window.addEventListener("scroll", handleScroll);

function checkSubtextHeight() {
  const subTextElements = document.querySelectorAll(".subText");
  subTextElements.forEach(function (subTextElement) {
    if (subTextElement.innerHTML.length > 40) {
      subTextElement.nextElementSibling.style.display = "block";
    }
  });
}

const allItem = document.querySelector(".all-item__ul");
const scrollToLeftBtn = document.querySelector(".scroll-button.left");
const scrollToRightBtn = document.querySelector(".scroll-button.right");

function moveToLeft() {
  allItem.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // 부드러운 스크롤
  });
}

function moveToRight() {
  allItem.scrollTo({
    top: 0,
    left: allItem.scrollWidth,
    behavior: "smooth", // 부드러운 스크롤을 위해 추가합니다.
  });
}

scrollToLeftBtn.addEventListener("click", moveToLeft);
scrollToRightBtn.addEventListener("click", moveToRight);

checkSubtextHeight();
