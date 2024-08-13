let h1 = document.querySelector(" #nav > h1");
let sidebar = document.querySelector(".nav-part2-sidebar")
let close = document.querySelector(".nav-part2-sidebar > i")

h1.addEventListener("click",() =>{
    sidebar.classList.add("sidebar")
})

close.addEventListener("click",() =>{
    sidebar.classList.remove("sidebar")
})