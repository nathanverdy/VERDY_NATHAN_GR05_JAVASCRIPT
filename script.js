const image = document.getElementById("image");
const imageplane = document.getElementById("imageplane");
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const reinitialisation = document.getElementById("reinitia");
const niveau = document.getElementById("niveaux");
const data = document.getElementById("properties");

button0.addEventListener("click", (event) =>{
 image.src = "cube0.png";
 imageplane.src = "plane0.png";
 document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 0";
});

button1.addEventListener("click", (event) =>{
    image.src = "cube1.png";
    imageplane.src = "plane1.png";
    document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 1";
});

button2.addEventListener("click", (event) =>{
 image.src = "cube2.png";
 imageplane.src = "plane2.png";
 document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 2";
});


button3.addEventListener("click", (event) =>{
     image.src = "cube3.png";
     imageplane.src = "plane3.png";
     document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 3";

});
button4.addEventListener("click", (event) =>{
    image.src = "cube4.png";
    imageplane.src = "plane4.png";
    document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 4";

});

button5.addEventListener("click", (event) =>{
    image.src = "cube5.png";
    imageplane.src = "plane5.png";
    document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 5";

});


reinitialisation.addEventListener("click", (event) => {
    image.src = "cube0.png";
    imageplane.src = "plane0.png";
    document.getElementById("niveaux").innerHTML = "niveaux de subdivision = 0";

});