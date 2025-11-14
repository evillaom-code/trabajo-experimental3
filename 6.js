function invertirNumero() {
    let numero = parseInt(prompt("Ingrese un número para invertirlo:"));
    let invertido = 0;

    // El for se ejecuta mientras numero > 0
    // pero no necesitamos un contador, así que se deja vacío
    for (; numero > 0; numero = (numero / 10)) {
        let digito = numero % 10;
        invertido = invertido * 10 + digito;
    }

    console.log("Número invertido:", invertido);
}invertirNumero();
