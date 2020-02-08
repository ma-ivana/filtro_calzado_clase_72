const calzado = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];


let elegido = document.querySelector("input[type='text']");


window.onkeypress = e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    console.log("key pressed");
  } else {
    const form = document.querySelector("form");
    form.onsubmit = e => {
      e.preventDefault();
      console.log("filter pressed");
    }
  };




  const calzadoSeleccionado = calzado.filter(zapato => (zapato.tipo === elegido.value || zapato.color === elegido.value));
  console.log("dentro de select");
  console.log(calzadoSeleccionado);



  const cards = document.querySelector(".sectorTarjetas");

  cards.innerHTML = '';

  tarjetasDinamicas = '';



const calzadoImpreso = calzadoSeleccionado.forEach (zapato => {

    tarjetasDinamicas += `
     <article class="card">
       <div class="imagen"> <img src="${zapato.img}"> </div>
       <div class="title"> 
       <h4>${zapato.nombre}</h4>
       
       </div>
     </article>`;
});

   cards.innerHTML = tarjetasDinamicas;

}


