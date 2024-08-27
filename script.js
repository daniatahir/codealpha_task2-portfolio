
/*about*/
let tabLinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");
function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
/*projects*/
let moreBtn=document.querySelector("#projects .container .btn");
let lessBtn=document.querySelector(".btn2");
moreBtn.addEventListener("click",()=>{
    document.querySelector(".hidden").style.display="flex";
    moreBtn.style.display="none";
    lessBtn.style.display="block";
})
lessBtn.addEventListener("click",()=>{
    document.querySelector(".hidden").style.display="none";
    moreBtn.style.display="block";
    lessBtn.style.display="none";
})

ScrollReveal().reveal('.image-side');
ScrollReveal().reveal('.text-side',{delay:500});

/*responsive*/

let sideMenu=document.querySelector("#sideMenu");

function openmenu(){
    sideMenu.style.right="0";
}
function closemenu(){
    sideMenu.style.right="-200px";
}



