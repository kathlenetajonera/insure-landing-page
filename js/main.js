const mobileToggle = document.querySelector(".toggle-btn");
const mobileMenu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const scrollTopBtn = document.querySelector("#scroll_top")

mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile_nav");
    
    if (mobileMenu.classList.contains("mobile_nav")) {
        mobileToggle.classList.add("close_icon");
        document.body.style.overflowY = "hidden";
    } else {
        mobileToggle.classList.remove("close_icon");
        document.body.style.overflowY = "scroll";
    }
})

//removes mobile_nav class when screen reached tablet size
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove("mobile_nav");
        mobileToggle.classList.remove("close_icon");
        document.body.style.overflowY = "scroll";
    }
})

//shows the scroll top button onscroll
window.addEventListener("scroll", () => {
    if (pageYOffset > 600) {
        scrollTopBtn.classList.add("show");

        scrollTopBtn.addEventListener("click", scrollTop);
    } else {
        scrollTopBtn.classList.remove("show");
    }
})

const scrollTop = () => {
    document.documentElement.scrollTop = 0;
}
