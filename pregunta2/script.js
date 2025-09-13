function calcular() {
    const temp = document.getElementById('temp').value;
    const resultado = (parseInt(temp) - 32)*5/9;

    document.getElementById('resultado').innerHTML = resultado;

    alert("La temperatura calculada es " + resultado + "*C");
}
