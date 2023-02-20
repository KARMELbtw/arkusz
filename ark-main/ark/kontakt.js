let isOK = document.getElementById("isOK");
let result = document.getElementById("result")

function getData() {
    console.log = "zaczeto";
    if (isOK.checked == true) {
        console.log = "tak";

        let imie = document.getElementById("name").value;
        let nazwisko = document.getElementById("surname").value;
        let service = document.getElementById("opis").value;

        result.style.color = "black"
        result.innerHTML = imie.toUpperCase() + " " + nazwisko.toUpperCase() + "<br></br>" + "Treść Twojej sprawy: " + service + "<br></br>" + "Na podany e-mail zostanie wysłana oferta.";
    }
    else {
        console.log = "nie";

        result.style.color = "red"
        result.innerHTML = "Musisz zapoznać się z regulaminem"
    }
}