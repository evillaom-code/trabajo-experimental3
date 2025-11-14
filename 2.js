function divisores() {
    let n=0, i=1;
    n = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
    console.log("Los divisores de", n, "son:");
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}divisores();