
let welcome = prompt("Bienvenido! Dinos tu nombre: ")
console.log(welcome);
if(welcome ===""){
    welcome = "Anónimo"
}
console.log(welcome);
let comp = true;
while(comp ===true){
    let plataforma = prompt(welcome+", dinos para que plataforma quieres calcular el precio: ")
    let precio
    let play
    let dolar = 335.81
    let iva = 21/100
    let pais = 8/100
    let ganancias = 45/100
    let intentar

    switch (plataforma.toLowerCase()) {
        case "play 1":
        case "playstation 1":
            alert("Playstation 1 no tiene plataforma digital.")
            intentar = prompt("Quieres intentarlo de nuevo "+welcome+"?")
            break;
        case "play 2":
        case "playstation 2":
            alert("Playstation 2 no tiene plataforma digital.")
            intentar = prompt("Quieres intentarlo de nuevo "+welcome+"?")
            break;
        case "play 3":
        case "playstation 3":
            alert("Playstation 3 no tiene plataforma digital.")
            intentar = prompt("Quieres intentarlo de nuevo "+welcome+"?")
            break;
        case "play":
        case "playstation":
        case "playstation 4":
        case "playstation 5":
        case "play 4":
        case "play 5":
            precio=prompt("Cuanto cuesta en dolares el juego de Paystation?")
            break;
        case "xbox":
        case "x box":
        case "x-box":
        case "xbox one":
        case "x box one":
        case "x-box one":
        case "xbox s":
        case "x box s":
        case "x-box s":
        case "xbox one s":
        case "x box one s":
        case "x-box one s":
        case "xbox x":
        case "x box x":
        case "x-box x":
        case "xbox one x":
        case "x box one x":
        case "x-box one x":
            precio= prompt("Cuanto cuesta en dolares el juego de X Box")
            break;
        case "pc":
        case "steam":
        case "computadora":
        case "ordenador":
        case "origin":
            precio= prompt("Cuanto cuesta en dolares el juego de PC?")
            break;
        case "nintendo":
        case "switch":
        case "nintendo switch":
            precio = prompt("Cuanto cuesta el juego en dolares para Nintendo ?")
            break;
        default:
            alert("No reconozco esa plataforma.")
            intentar = prompt("Quieres intentar de nuevo? (Responde Si o No)")
            if(intentar.toLowerCase()!=="si"){
                comp=false;
            }
            break;
    }

    function total(calculo){
        calculo= (parseFloat(precio)*iva)+ (parseFloat(precio * pais)+(parseFloat(precio * ganancias)+ parseFloat(precio)))*dolar
        alert("el precio a pagar es $"+calculo.toFixed(2)+"!")
    }

    if(precio > 0){
        total(precio)
        intentar = prompt("Quieres consultar otro precio? (Responde Si o No)")
        if(intentar.toLowerCase()==="no"){
            comp =false
            alert("Gracias por usar nuestro servicio!!")
        }
    }else if(precio !==undefined){
        alert("El precio es invalido. Recarga la pagina e intenta de nuevo, "+welcome)
    }
}