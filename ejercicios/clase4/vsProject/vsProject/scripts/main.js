var botones = document.getElementsByClassName("resButton");
function p(i) {
    botones[i].addEventListener("click", function () {
        //console.log(this.parentElement.getAttribute('id'));
        var operation = this.parentElement.getAttribute('id');
        var parent = this.parentElement;
        var res = 0;
        switch (operation) {
            case "cuadrado":
                res = parseInt(parent.querySelector("#cuadroA").value) * parseInt(parent.querySelector("#cuadroA").value);
                break;
            case "rectangulo":
                res = parseInt(parent.querySelector("#rectanguloA").value) * parseInt(parent.querySelector("#rectanguloB").value);
                break;
            case "triangulo":
                res = parseInt(parent.querySelector("#trianguloA").value) * parseInt(parent.querySelector("#trianguloB").value) / 2;
                break;
            case "rombo":
                res = parseInt(parent.querySelector("#romboD").value) * parseInt(parent.querySelector("#romboC").value) / 2;
                break;
            case "parelelogramo":
                res = parseInt(parent.querySelector("#parelelogramoA").value) * parseInt(parent.querySelector("#parelelogramoH").value);
                break;
            case "trapecio":
                res = (parseInt(parent.querySelector("#trapecioA").value) + parseInt(parent.querySelector("#trapecioB").value) / 2) * parseInt(parent.querySelector("#trapecioH").value);
                break;
            case "circulo":
                res = Math.PI * parseInt(parent.querySelector("#circuloPi").value) * parseInt(parent.querySelector("#circuloPi").value);
                break;
        }
        parent.querySelector(".result").innerText = res;
    });
};
for (var index = 0; index < botones.length; index++) {
    //console.log(botones[index]);
    //console.log(index);
    p(index);
}

///