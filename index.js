document.alert("Hello Dear This website is under Construction"+"<Br>"+"That's why you are loking only front page");
document.querySelector(".menu_bar_box").addEventListener('click',navAgain);

function navAgain(){
    document.querySelector(".navigation").classList.toggle("bring_nav");
    document.querySelector(".menu").classList.toggle("change");
}

