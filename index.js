document.querySelector(".menu_bar_box").addEventListener('click',navAgain);

function navAgain(){
    document.querySelector(".navigation").classList.toggle("bring_nav");
    document.querySelector(".menu").classList.toggle("change");
}
// window.alert("There is no service provided through the website. It's only for practice.")