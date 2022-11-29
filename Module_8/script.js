const button = document.querySelector("#generate");

button.addEventListener("click", readData);

function readData() {
    var random = Math.floor(Math.random() * 40);
    const setRandomNum = Number(random);
    fetch('https://swapi.dev/api/people/' + setRandomNum + '/').then((data) => {
        return data.json();
    }).then((completedata) => {
        // console.log(completedata[2].title);
        document.getElementById("Name").innerHTML = completedata.name;
        document.getElementById("Height").innerHTML = completedata.height;
        document.getElementById("Mass").innerHTML = completedata.mass;
        document.getElementById("Gender").innerHTML = completedata.gender;
        document.getElementById("Hair_color").innerHTML = completedata.hair_color;
        document.getElementById("Eye_color").innerHTML = completedata.eye_color;
        document.getElementById("Birth-year").innerHTML = completedata.birth_year;
    }).catch((err) => {
        console.log(err);
    });
}