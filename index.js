const image = document.querySelector("#myPicture"); 
const text = document.querySelector("h2"); 

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two"); 

buttonOne.addEventListener("click", mrBig); 

function mrBig() {
    image.setAttribute("src", "https://stylecaster.com/wp-content/uploads/2014/10/mr-big-carrie.jpg?w=500&h=339&crop=1"); 
    text.textContent = "WILL THEY GET MARRIED?";
    buttonOne.textContent = "YES, BUT LATER"; 
    buttonTwo.textContent = "NEVER"; 

    buttonOne.addEventListener("click", married);
}

function married() {
    image.setAttribute("src", "https://www.usatoday.com/gcdn/-mm-/1062cece51fd908e0c01f74b75c6b7b4229c4b22/c=0-195-3744-2301/local/-/media/2015/12/14/USATODAY/usatsports/xxx_sex_city_2_mov__6746_35507631.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp"); 
    text.textContent = "THEY WILL GET MARRIED, BUT WITHOUT KIDS";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
