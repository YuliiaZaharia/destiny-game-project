const image = document.querySelector("#myPicture"); 
const text = document.querySelector("h2"); 

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two"); 

buttonOne.addEventListener("click", mrBig); 

function mrBig() {
    image.setAttribute("src", "https://stylecaster.com/wp-content/uploads/2014/10/mr-big-carrie.jpg?w=500&h=339&crop=1"); 
}
