const bgEl = document.getElementById("bg-image");
window.addEventListener("scroll", ()=>{
    updateImage();
}
)
function updateImage(){
    bgEl.style.opacity = 1 - window.pageYOffset / 800;

}