function saludar(){
    alert("Bienvenido a JS desde un archivo externo :) ")

}

function calcularPromedio(){
    let cal1= parseInt(prompt("Calificacion de Programacion web: ", 85));
    var cal2= parseInt(prompt("Calificacion de LyA II: "));
    let cal3= parseInt(prompt("Calificacion de Ing. Software: "));

    const PI= 3.14;
    const IVA= 16;
    const GRAVEDAD= 9.8;

    //PI= 3.15;
    console.log(`Valor de PI es ${PI}`);
    var cal2=70;

    if(true){
        let cal1 = 0
        alert("Calificacion 1 en el scope del if es: " +  cal1)
    }
    //imprimiendon uilizando templete string
    let promedio =(cal1 + cal2 + cal3)/3;

    alert (`tu promedio es: ${(cal1 + cal2 + cal3)/3} continuar con la con ${cal1},  ${cal2},  ${cal3}`);
}

const Confirmar = () => {
 let respuesta = confirm("¿Vas a recursar programacion web?")
 if(respuesta){
    alert("Animo que existe el verano :) ");
 } else {
    alert("Felicidades pero aun no terminas el semestre...");
 }
}
const objetos = () =>{
    const laptop = {
        marca: "Dell",
        procesador: "Intel Core i9", 
        ram: "16 GB", 
        almacenamiento: "1TB", 
        usos: ["jugar", "escuchar musica", "trabajar" ], 
        tipo_de_disco: "M2"
    }
    console.log(laptop);
    console.log(`Marca: ${laptop.marca} /n
    Procesador: ${laptop.procesador}
    RAM: ${laptop.ram}
    Almacenamiento: ${laptop.almacenamiento}
    Tipo de Disco: ${laptop.tipo_de_disco}
    Usos: ${laptop.usos} `);
//nuevas caracteristicas 
    laptop. tam_pantalla= "15.2 pulgadas";

    console.log(laptop);
}

const tiempo = () =>{
    let minA1 = parseInt(prompt("Tiempo del atleta 1 en MINutos"));
    let segA1 = parseInt(prompt("Tiempo del atleta 1 en SEGundos"));
    let minA2 = parseInt(prompt("Tiempo del atleta 2 en MINutos"));
    let segA2 = parseInt(prompt("Tiempo del atleta 2 en SEGundos"));
    

    if (isNaN(minA1) || segA1 <= 60 && (minA1 && segA1) <= 0) {
        alert('Acción invalida. Por favor, ingrese una cantidades validas.');
        return;
      }

    if (isNaN(minA2) || segA2 <= 60 && (minA2 && segA2) <= 0) {
        alert('Acción invalida. Por favor, ingrese una cantidades validas.');
        return;
      }


    //math.floor es para redondear pero al ser horas a eces no se necesita
    //Validacion: si exceden los 60s se toma el % para sumarlo a mins
    if (segA1 >= 60) {
        minA1 += Math.floor(segA1 / 60);
        segA1 %= 60;
    }
    
    if (segA2 >= 60) {
        minA2 += Math.floor(segA2 / 60);
        segA2 %= 60;
    }
    
    //se suman min y seg de ambos atletas
    let minTotal = minA1 + minA2;
    let segTotal = segA1 + segA2;

    if (segTotal >= 60) {
        minTotal += Math.floor(segTotal / 60);
        segTotal %= 60;
    }

    //% es mod 
    let horas = 0;
    if (minTotal >= 60) {
        horas += Math.floor(minTotal / 60);
        minTotal %= 60;
    }

    alert("Tiempo acumulado: \n" + horas + " horas, " + minTotal + " minutos y " + segTotal + " segundos");
}

const destructurarObjeto = () => {
    const tiendaCosmenticos= {
        nombreTienda: "Cosmeticos AlmaGaby S.A de C.V", 
        redesSociales:{
            facebook: "https://cosmeticos.almagaby.facebook.com",
            instagram:"https://cosmeticos.almagaby.instagram.com", 
            x: "@almagaby"
        },
        contacto:{
            WhatsApp: "5512364789",
            email:["cosmeticos.almagaby@gmail.com","almagaby.cosmeticos@outlook" ]
        },

        perfumes: {
        mujeres: {
            perfume1:{
                nombre: "Diablito",
                precio: "800",
                tamanio: "100ml"
            }, 

            perfume2:{
                nombre: "Chanel No.5",
                precio: "2500",
                tamanio: "250ml"
            }           
        }, 

        hombres: {
            perfume1:{
                nombre: "7 machos",
                precio: "1200",
                tamanio: "100ml"
            }, 

            perfume2:{
                nombre: "212 Carolina Herrera",
                precio: "1400",
                tamanio: "100ml"
            }           
        }
    }
  }
  /*let mujerNombrePerfume1= tiendaCosmenticos.perfumes.mujeres.perfume1.nombre;
  let mujerPrecioPerfume1= tiendaCosmenticos.perfumes.mujeres.perfume1.precio;
  let mujerTamanioPerfume1= tiendaCosmenticos.perfumes.mujeres.perfume1.tamanio;

  console.log(`Nombre de tienda:${tiendaCosmenticos.nombreTienda}
  Perfume 1: ${mujerNombrePerfume1}
  Precio: ${mujerPrecioPerfume1}
  Tamaño: ${mujerTamanioPerfume1}
  `);
  const{nombre, precio, tamanio}=tiendaCosmenticos.perfumes.hombres.perfume2;
  console.log(`Perfume hombre No.2
  Nombre: ${nombre}
  Precio: ${precio}
  Tamaño: ${tamanio}
  `);*/

  const{nombreTienda}=tiendaCosmenticos;
  const{facebook, instagram, x}=tiendaCosmenticos.redesSociales;
  const{WhatsApp, email}=tiendaCosmenticos.contacto;
  const{nombre, precio, tamanio}=tiendaCosmenticos.perfumes.mujeres.perfume2;
  console.log(`
  Nombre: ${nombreTienda}
  Redes Sociales: 
  facebook: ${facebook}
  instagram: ${instagram}
  x: ${x}
  Contacto:
  WhatsApp: ${WhatsApp}
  email: 
  email 1: ${email[0]}
  email 2:${email[1]}
  Perfume mujer No.2
  Nombre: ${nombre}
  Precio: ${precio}
  Tamaño: ${tamanio} 
  `);
}

//Nombre de la tienda, redes sociales, contacto Whats, Correos, perfume 2 de mujer
