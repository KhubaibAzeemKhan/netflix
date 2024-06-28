console.log("script.js initializing.")


// if(document.querySelector("#faq1>img").src.includes("plus.svg") || document.querySelector("#faq2>img").src.includes("plus.svg") || document.querySelector("#faq3>img").src.includes("plus.svg") || document.querySelector("#faq4>img").src.includes("plus.svg") || document.querySelector("#faq5>img").src.includes("plus.svg") || document.querySelector("#faq6>img").src.includes("plus.svg")){
    
    // }
    // let faqFunction = document.querySelectorAll(".faqFunction")
    // let faqimg = document.querySelectorAll(".faqimg")
    // let none = document.querySelectorAll(".none");
    // console.log(none)
    
    
    // none.forEach(e => {
    //     faqFunction.forEach(element => {
    //         element.addEventListener("click",()=>{
    //             e.style.display = "none"
    //             faqimg.forEach(img => {
                    
    //                 img.src = "assets/images/plus.svg"
    //             });
    //         })
            
    //     });
    // });
// 1 
const ansBox1 = document.querySelector(".ansBox1");
document.querySelector("#faq1").addEventListener("click", () => {
    // if(document.querySelector("#faq2>img").src.includes("close.svg")){
    //     ansBox2.style.display = "none";
    //         document.querySelector("#faq2>img").src = "assets/images/plus.svg"
    if (document.querySelector("#faq1>img").src.includes("plus.svg")) {
        ansBox1.style.display = "block"; // Modify the style of the element
        document.querySelector("#faq1>img").src = "assets/images/close.svg"
    }
    else {
        ansBox1.style.display = "none";
        document.querySelector("#faq1>img").src = "assets/images/plus.svg"

    }
    // }
});


// 2 
const ansBox2 = document.querySelector(".ansBox2");
document.querySelector("#faq2").addEventListener("click", () => {

    if (document.querySelector("#faq2>img").src.includes("plus.svg")) {
        ansBox2.style.display = "block"; // Modify the style of the element
        document.querySelector("#faq2>img").src = "assets/images/close.svg"
    }
    else {
        ansBox2.style.display = "none";
        document.querySelector("#faq2>img").src = "assets/images/plus.svg"

    }
});


// 3
document.querySelector("#faq3").addEventListener("click", () => {
    const ansBox3 = document.querySelector(".ansBox3");

    if (document.querySelector("#faq3>img").src.includes("plus.svg")) {
        ansBox3.style.display = "block"; // Modify the style of the element
        document.querySelector("#faq3>img").src = "assets/images/close.svg"
    }
    else {
        ansBox3.style.display = "none";
        document.querySelector("#faq3>img").src = "assets/images/plus.svg"

    }
});


// 4 
document.querySelector("#faq4").addEventListener("click", () => {
    const ansBox4 = document.querySelector(".ansBox4");

    if (document.querySelector("#faq4>img").src.includes("plus.svg")) {
        ansBox4.style.display = "block"; // Modify the style of the element
        document.querySelector("#faq4>img").src = "assets/images/close.svg"
    }
    else {
        ansBox4.style.display = "none";
        document.querySelector("#faq4>img").src = "assets/images/plus.svg"

    }
});


// 5 
document.querySelector("#faq5").addEventListener("click", () => {
    const ansBox5 = document.querySelector(".ansBox5");

    if (document.querySelector("#faq5>img").src.includes("plus.svg")) {
        ansBox5.style.display = "block"; // Modify the style of the element
        document.querySelector("#faq5>img").src = "assets/images/close.svg"
    }
    else {
        ansBox5.style.display = "none";
        document.querySelector("#faq5>img").src = "assets/images/plus.svg"

    }
});


// 6 
document.querySelector("#faq6").addEventListener("click", () => {
    const ansBox6 = document.querySelector(".ansBox6");

    if (document.querySelector("#faq6>img").src.includes("plus.svg")) {
        ansBox6.style.display = "block"; // Modify the style of the element
        document.querySelector("#faq6>img").src = "assets/images/close.svg"
    }
    else {
        ansBox6.style.display = "none";
        document.querySelector("#faq6>img").src = "assets/images/plus.svg"

    }
});

