
alert("Bienvenidos a CrispyCool Heladeria \nSeleccione los articulos que desea comprar")
var carrito = 0;
var b = 0; //Bandera para determinar si finalizo la selleccion de productos
do {
    var op;
    op =  parseInt(prompt("-------------------------- \n1-Palito bombón - $200 \n2-1/2kg frutilla, vainilla, chocolate - $600 \n3-Mini torta helada - $500 \n4-Palito de agua - $150 \n5-Cucurucho doble - $700 \nPresione 0 para finalizar la compra \n--------------------------- \nINGRESE SU OPCION: "));
    switch (op) {
        case 0:
            b = 1; 
            if(carrito > 0){
                metodoPago()
            }
        break;
        case 1:
            AgregarCarrito(200)
            MostrarCarrito()
        break;
        case 2:
            AgregarCarrito(600)
            MostrarCarrito()
            break;
        case 3:
            AgregarCarrito(500)
            MostrarCarrito()
            break;
        case 4:
            AgregarCarrito(150)
            MostrarCarrito()
            break;
        case 5:
            AgregarCarrito(700)
            MostrarCarrito()
            break;
    }
}while(op!=0 && b == 0)


function metodoPago(){
    alert("Su el costo total de su carrito es de: $" + carrito)
    do{
        op =  parseInt(prompt("-------------------------- \nSeleccione un metodo de pago \n1-Efectivo \n2-Tarjeta \nPresione 0 para cancelar la compra \n--------------------------- \nINGRESE SU OPCION: "));
        switch (op) {
            case 1:
                op = 0
                CompraEfectivo()
            break;
            case 2:
                    op = 0
                    do{
                        op2 =  parseInt(prompt("-------------------------- \nElija el tipo de tarjeta: \n1-Credito(Cuenta con un recargo extra del 10%) \n2-Débito(Compras menores a $500 cuentan con un recargo del 5%) \nPresione 0 para cancelar la compra \n--------------------------- \nINGRESE SU OPCION: "));
                        switch (op2) {
                            case 0:
                                alert("Compra cancelada")
                                break;
                            case 1:
                                CompraCredito()
                                break;
                            case 2:
                                CompraDebito()
                                break;
                        }
                    }while(op2 != 1 && op2 != 2 && op2 != 0)
            break;            
        }
    }while(op!=0)
}
function AgregarCarrito(pedido){
    carrito = carrito + pedido
}
function MostrarCarrito(){
    console.log("Se ha añadido un elemento al carrito.\nCarrito: " + carrito)
}
function CompraEfectivo(){
    domicilio = prompt("Ingrese su domicilio")
    alert("El repartidor le cobrará en su domicilio en " + domicilio)
}
function CompraCredito(){
        carrito = carrito + carrito * 0.1
        alert("Su el costo total de su compra es de: $" + carrito)
}
function CompraDebito(){
    if (carrito < 500){
        carrito = carrito + carrito * 0.05
        alert("Su el costo total de su compra es de: $" + carrito)
    }
    else {alert("Su el costo total de su compra es de: $" + carrito)}
}
alert("Gracias por visitar CrispyCool Heladeria")