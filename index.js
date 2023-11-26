const image = document.querySelector("#myPicture"); 
const text = document.querySelector("h2"); 

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two"); 

buttonOne.addEventListener("click", mrBig);
buttonTwo.addEventListener("click", aidan);

function mrBig() {
    image.setAttribute("src", "https://stylecaster.com/wp-content/uploads/2014/10/mr-big-carrie.jpg?w=500&h=339&crop=1"); 
    text.textContent = "WILL THEY GET MARRIED?";
    buttonOne.textContent = "YES, BUT LATER"; 
    buttonTwo.textContent = "NEVER"; 

    buttonOne.addEventListener("click", married);
    buttonTwo.addEventListener("click", neverMarried);
}

function married() {
    image.setAttribute("src", "https://www.usatoday.com/gcdn/-mm-/1062cece51fd908e0c01f74b75c6b7b4229c4b22/c=0-195-3744-2301/local/-/media/2015/12/14/USATODAY/usatsports/xxx_sex_city_2_mov__6746_35507631.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp"); 
    text.textContent = "THEY WILL GET MARRIED, BUT WITHOUT KIDS";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function neverMarried() {
    image.setAttribute("src", "https://breezyevenings.files.wordpress.com/2019/12/1101874-carrie-bradshaw-et-mr-big-624x0-12.jpg"); 
    text.textContent = "HE WILL BREAK UP WITH HER BEFORE MARRIAGE";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function aidan() {
    image.setAttribute("src", "https://i.insider.com/620cd6b0b20df700180a1408?width=700"); 
    text.textContent = "ARE THEY GOING TO BE HAPPY?";
    buttonOne.textContent = "YES"; 
    buttonTwo.textContent = "NO"; 
    
    buttonOne.addEventListener("click", happy);
    buttonTwo.addEventListener("click", unhappy); 
}

function happy() {
    image.setAttribute("src", "https://image-ie.s3.eu-west-1.amazonaws.com/uploads/2021/04/16111841/satc-aidan-baby-1528237373.png"); 
    text.textContent = "YES AND THEY WILL HAVE A CHILD!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function unhappy() {
    image.setAttribute("src", "https://i.insider.com/64cd269f8df5080019d304e1?width=1000&format=jpeg&auto=webp"); 
    text.textContent = "CARRIE IS GOING TO BETRAY HIM AND THEY BREAK UP!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
