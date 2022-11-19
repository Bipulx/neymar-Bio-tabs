const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const article = document.querySelectorAll(".content");

const image = document.getElementById("image");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active buttons//
        btns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        // hide other article 
        article.forEach(function(art){
            art.classList.remove("active")
           
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }

})

// show diffrent images//
const btn2 = document.getElementById("debut")
const btn3 = document.getElementById("sucess")
btn2.addEventListener("click",function(){
image.src = "ney3.jpg"
})

btn3.addEventListener("click",function(){
    image.src = "ney2.jpg"
})