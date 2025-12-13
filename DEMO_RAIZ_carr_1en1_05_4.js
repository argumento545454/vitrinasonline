// DEMO_RAIZ_carr_1en1_05_4.js - Adaptado para RAÍZ

(function(){
  // --- Usar contenedor de la RAÍZ ---
  const container = document.getElementById('appContainer');
  container.innerHTML = ''; // limpiar solo este contenedor
  container.style.display = 'flex';
  container.style.height = '100%';
  container.style.overflow = 'hidden';
  container.style.fontFamily = 'Arial, sans-serif';

  // --- Menú ---
  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.style.width = '250px';
  menu.style.background = '#f0f0f0';
  menu.style.padding = '10px';
  menu.style.boxSizing = 'border-box';
  menu.style.overflowY = 'auto';

  const h2 = document.createElement('h2');
  h2.textContent = 'Categorías';
  h2.style.textAlign = 'center';
  h2.style.marginBottom = '20px';
  menu.appendChild(h2);

  const botones = [
    {id:'btnBlusas', text:'Blusas'},
    {id:'btnZapatos', text:'Zapatos'},
    {id:'btnVestidos', text:'Vestidos'},
    {id:'btnElectro', text:'Electro'}
  ];

  botones.forEach(b=>{
    const btn = document.createElement('button');
    btn.id = b.id;
    btn.textContent = b.text;
    btn.style.width = '100%';
    btn.style.marginBottom = '10px';
    btn.style.padding = '10px';
    btn.style.cursor = 'pointer';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.background = '#0066ff';
    btn.style.color = '#fff';
    btn.style.transition = '0.2s';
    menu.appendChild(btn);
  });

  container.appendChild(menu);

  // --- Contenido ---
  const contenido = document.createElement('div');
  contenido.id = 'contenido';
  contenido.style.flex = '1';
  contenido.style.position = 'relative';
  contenido.style.display = 'flex';
  contenido.style.flexDirection = 'column';
  contenido.style.justifyContent = 'center';
  contenido.style.alignItems = 'center';
  contenido.style.background = '#e5e5e5';

  // --- Carrusel ---
  const carrusel = document.createElement('div');
  carrusel.id = 'carrusel';
  carrusel.style.position = 'relative';
  carrusel.style.width = '80%';
  carrusel.style.height = '60%';
  carrusel.style.marginTop = '20px';
  carrusel.style.overflow = 'hidden';
  carrusel.style.display = 'flex';
  carrusel.style.justifyContent = 'center';
  carrusel.style.alignItems = 'center';
  contenido.appendChild(carrusel);

  // --- Franja ---
  const franja = document.createElement('div');
  franja.id = 'franja';
  franja.style.display = 'flex';
  franja.style.justifyContent = 'center';
  franja.style.marginTop = '10px';
  franja.style.flexWrap = 'wrap';
  franja.style.overflowX = 'auto';
  franja.style.width = '90%';
  contenido.appendChild(franja);

  container.appendChild(contenido);

  // --- Carrusel JS ---
  let images = [], rotation = 0, speed = 0.01, isPaused = false, nextId = 1;

  const urlsBlusas = [
    "https://icon2.cleanpng.com/ci2/kyi/yld/abf0atjcr.webp",
    "https://koaj.ec/284138-thickbox_default/blusa-camisera-oversize-manga-larga.jpg"
  ];
  const urlsZapatos = [
    "https://paylessec.vtexassets.com/arquivos/ids/313859-450-450?v=637780423610070000&width=450&height=450&aspect=true",
    "https://ivannyboutique.com/40592-large_default/zapato-de-taco-irina-rojo-vino.jpg"
  ];
  const urlsVestidos = [
    "https://i.pinimg.com/236x/9c/74/62/9c7462abacefdacb1175177cbca8c92c.jpg"
  ];
  const urlsElectro = [
    "https://www.kissu.com.ec/imagenes//subcategorias/1659549117.jpg"
  ];

  function agregarImagen(src){
    const img = document.createElement('img'); 
    img.src = src; 
    img.dataset.id = nextId++;
    img.style.position = 'absolute';
    img.style.maxWidth = '200px';
    img.style.maxHeight = '200px';
    img.style.borderRadius = '10px';
    img.style.transition = '0.5s';
    img.addEventListener('mouseenter',()=>isPaused=true);
    img.addEventListener('mouseleave',()=>isPaused=false);
    carrusel.appendChild(img);
    images.push(img);

    // Miniatura
    const thumbContainer = document.createElement('div'); 
    thumbContainer.className = 'thumb-container';
    thumbContainer.style.position='relative';
    thumbContainer.style.margin='5px';
    const thumb = document.createElement('img'); 
    thumb.src = src;
    thumb.style.width='60px';
    thumb.style.height='60px';
    thumb.style.objectFit='cover';
    thumb.style.borderRadius='5px';
    thumb.style.cursor='pointer';
    const btnEliminar = document.createElement('button'); 
    btnEliminar.className = 'btnEliminar'; 
    btnEliminar.textContent = '×';
    btnEliminar.style.position='absolute';
    btnEliminar.style.top='-5px';
    btnEliminar.style.right='-5px';
    btnEliminar.style.background='red';
    btnEliminar.style.color='#fff';
    btnEliminar.style.border='none';
    btnEliminar.style.borderRadius='50%';
    btnEliminar.style.width='18px';
    btnEliminar.style.height='18px';
    btnEliminar.style.cursor='pointer';
    btnEliminar.style.fontSize='12px';
    btnEliminar.style.lineHeight='18px';
    btnEliminar.style.padding='0';

    btnEliminar.onclick = e => {
      e.stopPropagation();
      carrusel.removeChild(img);
      franja.removeChild(thumbContainer);
      images = images.filter(i=>i!==img);
    };
    thumbContainer.appendChild(thumb); 
    thumbContainer.appendChild(btnEliminar); 
    franja.appendChild(thumbContainer);

    thumb.onclick = () => { img.src = thumb.src; };
  }

  function vaciarCarrusel(){ 
    carrusel.innerHTML=''; 
    franja.innerHTML=''; 
    images=[]; 
    rotation=0; 
  }

  function organizarCirculo(){
    const total = images.length; if(total===0) return;
    const radiusX = 200 + total*10; const radiusY = 50 + total*5;
    images.forEach((img,i)=>{
      const angle=(i/total)*2*Math.PI+rotation;
      const x=radiusX*Math.cos(angle)+carrusel.offsetWidth/2-img.offsetWidth/2;
      const y=radiusY*Math.sin(angle)+carrusel.offsetHeight/2-img.offsetHeight/2;
      img.style.left=`${x}px`; img.style.top=`${y}px`; img.style.zIndex=2000-i;
    });
  }

  function animar(){ 
    if(!isPaused){ rotation+=speed; } 
    organizarCirculo(); 
    requestAnimationFrame(animar);
  }
  animar();

  function cargarCategoria(urls){
    vaciarCarrusel();
    urls.forEach(src=>agregarImagen(src));
  }

  const botonesCategorias = {
    'btnBlusas': urlsBlusas,
    'btnZapatos': urlsZapatos,
    'btnVestidos': urlsVestidos,
    'btnElectro': urlsElectro
  };

  for(const id in botonesCategorias){
    document.getElementById(id).addEventListener('click', ()=>{
      cargarCategoria(botonesCategorias[id]);
      document.querySelectorAll('#menu button').forEach(b=>b.classList.remove('activo'));
      document.getElementById(id).classList.add('activo');
    });
  }

  // Primera categoría al cargar
  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnBlusas').click();
  });

})();