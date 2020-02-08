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


const cards = document.querySelector(".sectorTarjetas");
cards.innerHTML = '';

tarjetasDinamicas = '';



const todoCalzadoImpreso = calzado.forEach(zapato => {

  tarjetasDinamicas += `
     <div class="card">
       <div class="imagen"> <img src="${zapato.img}"> </div>
       <div class="title"> 
       <h4>${zapato.nombre}</h4>
       </div>
     </div>`;
});

cards.innerHTML = tarjetasDinamicas;


let elegido = document.querySelector("input[type='text']");


const modal = document.querySelector(".modal");
modal.classList.remove("modal");
modal.classList.remove("noExiste");




//------------------------------------------------------función para abrir/cerrar modal
const abrirYCerrarModal = elegido => {
if (!elegido.value) {
      modal.classList.add("modal");
      modal.innerHTML = `<p>No seleccionaste ningún tipo o color de calzado para filtrar.</p>
      <button class="cerrar"><i class="fa fa-times fa-2x"></i></button>`;
    
    
    const cerrarModal = document.querySelector(".cerrar");
    cerrarModal.onclick = e => {
      modal.classList.remove("modal");
      modal.innerHTML ="";
    };

      modal.onmouseleave = e => {
      modal.classList.remove("modal");
      modal.innerHTML ="";
    };
  };
};

//------------------------------------------------------función para saber si existe el producto

const preguntaSiExiste = (calzado, elegido) => {
        const arrayExiste = calzado.reduce( (acc, curr) => {
        if ((curr.tipo !== elegido.value && curr.color !== elegido.value)) {
        acc += 1;
      };
      
      return acc;
      
    }, 0);

  
 
  if (arrayExiste >= calzado.length) {
    
      modal.classList.add("noExiste");
        modal.innerHTML = `<p>No tenemos productos con el color o el tipo que elegiste.
        Seleccioná otro.</p>
        <button class="cerrar"><i class="fa fa-times fa-2x"></i></button>`;
      
      
      const cerrarModal = document.querySelector(".cerrar");
      cerrarModal.onclick = e => {
        modal.classList.remove("noExiste");
        modal.innerHTML ="";
      };

        modal.onmouseleave = e => {
        modal.classList.remove("noExiste");
        modal.innerHTML ="";
      };

    };


};


//------------------------------------------------------función para imprimir calzado seleccionado

const imprimirCalzadoSeleccionado = (calzado, elegido) => {
  
  const calzadoSeleccionado = calzado.filter(zapato => (zapato.tipo === elegido.value || zapato.color === elegido.value));
  
  cards.innerHTML = '';

  tarjetasDinamicas = '';


  const calzadoImpreso = calzadoSeleccionado.forEach(zapato => {

    tarjetasDinamicas += `
     <div class="card">
       <div class="imagen"> <img src="${zapato.img}"> </div>
       <div class="title"> 
       <h4>${zapato.nombre}</h4>
       
       </div>
     
    </div>`;
  });

  cards.innerHTML = tarjetasDinamicas;

};

//---------------------------------------------------------con botón Filtrar
const form = document.querySelector("form");
  form.onsubmit = e => {
    e.preventDefault();

  abrirYCerrarModal(elegido);

  imprimirCalzadoSeleccionado(calzado, elegido);
  preguntaSiExiste(calzado, elegido);
 
  
};



//-----------------------------------------------------------------con tecla Enter

window.onkeypress = e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    abrirYCerrarModal(elegido);
    preguntaSiExiste(calzado, elegido);
    
    
  };

 
imprimirCalzadoSeleccionado(calzado, elegido);
};

