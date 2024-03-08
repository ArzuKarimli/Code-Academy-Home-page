let nums = document.querySelectorAll(".stu");
let section = document.querySelector("#careers");

function startNums(e) {
    let dataNum = parseInt(e.dataset.num); 
    let count = setInterval(() => {
        let currentNum = parseInt(e.querySelector('h1').textContent); 
        if (currentNum < dataNum) {
            e.querySelector('h1').textContent = currentNum + 1;
        } else {
            clearInterval(count);
            
        }
    }, 1);
}

nums.forEach((num)=>startNums(num));


let searchIcon=document.querySelector(".search");
let searchPage=document.querySelector(".none-page");
let xbtn=document.querySelector(".fa-x")
searchIcon.addEventListener("click",function(){
    searchPage.classList.remove("d-none");

})
xbtn.addEventListener("click",function(){
    searchPage.classList.add("d-none");
})



