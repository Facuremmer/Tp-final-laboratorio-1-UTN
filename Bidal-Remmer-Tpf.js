// MENU RESPONSIVE
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Cuando sucede el evento "click" en el nav toggle (Simbolo del menu) se despliega el menu gracias al estilo "nav-menu_visible"
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

 /*  Bucle para la opción que tiene el navegador para gente no vidente. 
  Si la clase "navMenu" contiene a "nav-menu_visible" esta extencion dirá cerrar menu y si no la tiene dirá abrir menu. */

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// Cuando hacemos click en cualquier categoria del SUB menu, hacemos que se cierre el menu entero borrando el "nav-menu_viisble".
const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function(){
      navMenu.classList.remove("nav-menu_visible");
    })

  });

// API
const cargarImagenes=async()=>{
  // RECOGEMOS LO QUE INGRESO EL USUARIO
  let input=document.querySelector("#busqueda").value;
  
  
  // la key se me genero cuando genere el usuario 
    const key="22661756-980cc7fe3666f033db399feae";
  // la url esta en la documentacion de la API, en la página estaba distinto, se concatena el input y mi key y puse para que lea el input
  //la url original es "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
  const url=`https://pixabay.com/api/?key=${key}&q=${input}`;

  //imprimo la url por consola para saber que me tira
  // console.log(url);

  //por lo tanto, ahora podemos acceder a la busqueda
  const respuesta=await fetch(url);
  const resultado=await respuesta.json();

  //obtengo la respuesta o hits 
  let imagenes=resultado.hits;
  //imprimo para ver que onda y me aparece un array con 20 imgs
  //console.log(imagenes);

  //genero las cards
  let imagenesHTML = ``;
  //recorro con map????
  imagenes.map(imagen=>{
  //voy a extraer los datos que tiene cada imagen, esto lo obtengo inspeccionando la pag, lo obtengo de imagen
    const{largeImageURL,likes,previewURL,tags,views} = imagen;

  //genero un string donde tengo todas las imagenes
  imagenesHTML +=`
  <div class = "col-12 col-sm-6 col-md-4 col-lg-3 mn-4">
    <div class="cardImages">
      <img src="${previewURL}" alt = "${tags}" class="card-img-top">
      <div class = "card-body">
        <p class="card-text">${likes} Likes </p>
        <p class="card-text">${views} Views </p>
      </div>

      <div class="card-footer">
        <a
        href="${largeImageURL}"
        target="_blank"
        rel = "noopener noreferrer"
        class="btn btn-primary btn-block">
        Ver Imagen </a>    
      </div>
    </div>
  </div>   
  `;
// muestro las imagenes
divListadoImagenes=document.querySelector("#listadoImagenes");

setTimeout(()=>{
  divListadoImagenes.innerHTML=imagenesHTML;
}
,3000)




  });



}



