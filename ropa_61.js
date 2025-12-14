const ropa3HTML = `
<!DOCTYPE html>
<html lang="es">

 
<head>

<meta charset="UTF-8">
<title>ropa_61.js</title> 






<style>

main { position: relative; flex:1; display:flex; flex-direction:column; align-items:center; padding:20px; }


#franja { display:flex; overflow-x:auto; gap:10px; padding:90px; width:90%; border-top:2px solid #ccc; display:none; }


#btnToggleFranja { position:absolute; bottom:50px; left:100px; padding:10px 20px; background:khaki; color:black; border:none; border-radius:6px; font-size:16px; cursor:pointer; z-index:3000; box-shadow:0 2px 6px rgba(0,0,0,0.3);}


body { display:flex; min-height:100vh; background:khaki; font-family:Arial,sans-serif; margin:0; padding:0; }


#menuInicial { display:flex; flex-direction:column; gap:10px; padding:20px; width:240px; background:#fff; border-right:2px solid #ccc; height:100vh; box-sizing:border-box; overflow-y:auto; }


#menuInicial button { padding:10px 15px; border:none; border-radius:6px; background:white; font-size:20px; cursor:pointer; text-align:left; transition:0.2s; }


#menuInicial button:hover { background:lightblue; }


#menuInicial button.activo { background:lightblue; font-weight:bold; }


h2 { margin-bottom:20px; }


.circle-container { position: relative; width: 600px; height: 600px; border-radius: 50%; margin-top: 150px; display: block;
}
                                                                                                                                                                                                                         

.circle-container img { position:absolute; width:180px; height:180px; border-radius:10px; object-fit:cover; transition: transform 0.3s, z-index 0.3s; cursor:pointer; }


.circle-container img:hover { transform:scale(3.3); z-index:2000; }


.thumb-container { position:relative; display:inline-block; }


.thumb-container img { width:100px; height:100px; object-fit:cover; border-radius:8px; transition: transform 0.2s; cursor:pointer;}


.thumb-container img:hover { transform:scale(1.1); border:2px solid #333; }


.btnEliminar { position:absolute; top:80px; right:2px; background:gray; color:white; border:none; border-radius:50%; width:20px; height:20px; cursor:pointer; font-size:14px; line-height:18px; text-align:center; padding:0; }


.btnEliminar:hover { background:blue; }
</style>



<style>



#fotoClienteContainer {
  display: flex;
  flex-direction: column; 
  align-items: center;    
  margin-top: 20px;
  margin-bottom: 20px;
  perspective: 800px; 
  margin-left: 100px; 
}


#fotoCliente {
  position: absolute;
  left: 600px;
  top: 100px;
  width: 200px;
  height: 190px;
  object-fit: cover;
  border: none;
  border-radius: 10px;
  box-shadow: none);
  transition: transform 0.2s ease;
  z-index: 2000;
  margin-bottom: 20px;
}




@keyframes rotarFoto {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}



#fotoCliente:hover { transform:scale(2.3); z-index:2000; }  

 


#btnSubirfoto {
  position: absolute;   
  bottom: 900px;         
  left: 70%;            
  transform: translateX(-50%); 
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background: khaki;
  border: 1px solid #555;
  border-radius: 6px;
}



#camaraContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  perspective: 800px; 
}



#videoCamara {
  width: 160px;
  height: 120px;
  border: 2px solid #555;
  border-radius: 10px;
  display: none; 
  object-fit: cover;
  background: #000;
}



#btnCamara {
  margin-top: 8px;
  padding: 6px 12px;
  background: ;  
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}


#btnCamara:hover { background: #666; }



#btnTomarFoto {
  margin-top: 6px;
  padding: 6px 12px;
  background: ;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: none; 
  transition: 0.2s;
}


#btnTomarFoto:hover { background: #0056b3; }



#canvasCamara {
  display: none;
}



#fotoCamara {
  display: none;
  width: 160px;
  height: 120px;
  border-radius: 10px;
  margin-top: 8px;
  object-fit: cover;
  border: 2px solid #555;
}


  

video button,


#videoContainer button:not(#btnCamara),


#videoCamara + button {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}




#franja {
  transition: opacity 1.2s ease-in-out;
}


#franja.fade {
  opacity: 0;
}
</style>



  
<script>

function crearFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');


  
  ctx.fillStyle = 'khaki'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  
  ctx.fillStyle = 'blue';  
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('VV', canvas.width/2, canvas.height/2);


  
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = canvas.toDataURL('image/png');
  document.head.appendChild(link);
}



crearFavicon();
</script>

</head>







<body>


<div id="menuInicial">   


  <button id="btnRotacion">⏯ Pausar/Continuar rotación</button>

Categorias
  <button id="btnSombreros">Sombreros Mujer</button>
  <button id="btnBlusas">Blusas</button>
  <button id="btnPantaMujer">Pantalones Mujer</button>
  <button id="btnZapatos">Zapatos</button>
  <button id="btnVestidos">Vestidos</button>
  <button id="btnChompas">Chompas</button>
  <button id="btnFaldas">Faldas</button>
  <button id="btnCamisas">Camisas</button>
  <button id="btnRopa"></button>
  <button id="btnElectro">Electrodom&eacute;sticos</button>
  <button id="btnCarros">Carros</button>
  
  
  
  
  


Voz/Clic Comandos 
  <button id="">Encender Cámara</button>
  <button id="btnToggleFranjaMenu"></button>   
  <button id=""> 0/1 Col. izq. (Ocultar/Mostrar) </button>
  <button id="">F11 Pantalla </button>


 
  <button id="btnFranjaToggle">Franja</button>  
  <button id="btnCarruselToggle"></button>  

 
<button id="btnSubirImagen"></button>  

<input type="file" id="inputImagenes" accept="image/*" multiple style="display:none">

</div>



<main>

<h1 style="color: blue;">Vitrinas Online controladas por VOZ</h1>


<div class="form-container" id="login-container">

  



</div>




  
  <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">

    
    
    <div style="display:flex; flex-direction:column; align-items:center;">
      <video id="videoCamara" autoplay playsinline
             style="width:160px; height:120px; border:2px solid #555; border-radius:10px; display:none;"></video>


      
      <button id="btnCamara"
              style="margin-top: -60px; padding:6px 12px; background:khaki; color:black; border:none; border-radius:8px; cursor:pointer;">
        📷 Encender Cámara   
      </button>


      
      <button id="btnTomarFoto"
              style="margin-top:50px; padding:6px 12px; background:#007BFF; color:white; border:none; border-radius:8px; display:none; cursor:pointer;">
        Tomar Foto
      </button>

      <canvas id="canvasCamara" style="display:none;"></canvas>
      <img id="fotoCamara" alt="Foto Cámara"
           style="display:none; width:160px; height:120px; border-radius:10px; margin-top:8px;">
    </div>


    
    <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
	
      <img id="fotoCliente" 
src="imagenes/cliente_default.jpg" alt="Foto" width="200" height="200">
      <button id="btnSubirfoto">Foto pc</button>
      <input type="file" id="inputFoto" accept="image/*" style="display:none">
    </div>

  </div>


  
  <div class="circle-container" id="circle"></div>
  <div class="franja" id="franja"></div>
</main>




<script>
foto cliente rotar
</script>



<div id="camaraContainer" style="display:flex; flex-direction:column; align-items:center; margin-bottom:20px;">
  
  <video id="videoCamara" autoplay playsinline style="width:160px; height:120px; border:2px solid #555; border-radius:10px; display:none;"></video>


  


  <button id="btnTomarFoto" style="margin-top:6px; padding:6px 12px; background:#007BFF; color:white; border:none; border-radius:8px; display:none; cursor:pointer;">
    Tomar Foto
  </button>


  
  <canvas id="canvasCamara" style="display:none;"></canvas>
  <img id="fotoCamara" alt="Foto Cámara" style="display:none; width:160px; height:120px; border-radius:10px; margin-top:8px;">
</div>






<script>
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('videoCamara');
  const canvas = 
document.getElementById('canvasCamara');
  const btnCamara = document.getElementById('btnCamara');
  const btnTomarFoto = document.getElementById('btnTomarFoto');
  const fotoCamara = document.getElementById('fotoCamara');
  let streamActivo = null;
  
    btnCamara.addEventListener('click', async () => {
    if (!streamActivo) {
      try {
        streamActivo = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = streamActivo;
        video.style.display = 'block';
        btnTomarFoto.style.display = 'inline-block';
        btnCamara.textContent = '';   
        
        
      } catch (err) {
        alert('⚠️ No se pudo acceder a la cámara.\n' + err);  
      }
    } else {
      detenerCamaraPC();
    }
  });
  
  
btnTomarFoto.addEventListener('click', () => {
  if (!streamActivo) return;

  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  const dataURL = canvas.toDataURL('image/png');
  
  fotoCamara.src = dataURL;
  fotoCamara.style.display = 'block';
  
/*
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = `foto_${Date.now()}.png`; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
*/
  
  detenerCamaraPC();
})
  
  function detenerCamaraPC() {
    if (streamActivo) {
      streamActivo.getTracks().forEach(track => track.stop());
      streamActivo = null;
    }
    video.srcObject = null;
    video.style.display = 'none';
    btnTomarFoto.style.display = 'none';
    btnCamara.textContent = 'Encender Cámara';
    btnCamara.style.background = 'yellow';     
  }
});
</script>





<script>

  const btnSubirfoto = document.getElementById("btnSubirfoto");
  const inputFoto = 
document.getElementById("inputFoto");
  const fotoCliente = document.getElementById("fotoCliente");
  
  btnSubirfoto.addEventListener("click", () => inputFoto.click());
  
  inputFoto.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (evt) => fotoCliente.src = evt.target.result;
      reader.readAsDataURL(file);
    }
  });
</script>




<script>

const container = document.getElementById('circle');
const franja = document.getElementById('franja');
const menuInicial = document.getElementById('menuInicial');

let images = [], rotation = 0, speed = 0.01, isPaused = false, nextId = 1;

let imagenesLocalesBlusas = [];
let imagenesLocalesElectro = [];
let imagenesLocalesCarros = [];

let backupCarrusel = [];
let backupFranja = [];

function generarCarrusel(urls) {
  container.innerHTML = '';
  images = [];
  urls.forEach(src => agregarImagenCarrusel(src)); 
}
function generarFranja(urls) {
  const franja = document.getElementById('franja');
  if (!franja) return console.error("No se encontró el contenedor franja");

  
  franja.innerHTML = '';

  urls.forEach((src) => {
    
    const thumbContainer = document.createElement('div');
    thumbContainer.className = 'thumb-container';

    
    const thumb = document.createElement('img');
    thumb.src = src;
    thumbContainer.appendChild(thumb);

    
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btnEliminar';
    btnEliminar.textContent = '×';
    thumbContainer.appendChild(btnEliminar);

    
    franja.appendChild(thumbContainer);

    
    btnEliminar.addEventListener('click', (e) => {
      e.stopPropagation();

      
      thumbContainer.remove();

      
      if (document.getElementById('btnBlusas')?.classList.contains('activo')) {
        imagenesLocalesBlusas = imagenesLocalesBlusas.filter(item => item !== src);
        localStorage.setItem("blusasLocales", JSON.stringify(imagenesLocalesBlusas));
      }

      if (document.getElementById('btnElectro')?.classList.contains('activo')) {
        imagenesLocalesElectro = imagenesLocalesElectro.filter(item => item !== src);
        localStorage.setItem("electroLocales", JSON.stringify(imagenesLocalesElectro));
      }

      
      const index = urls.indexOf(src);
      if (index > -1) urls.splice(index, 1);
    });
  });
}

function agregarImagenCarrusel(src){
  const img = document.createElement('img');
  img.src = src;
  img.dataset.id = nextId++;
  img.loading = "lazy";
  img.addEventListener('mouseenter', ()=>isPaused=true);
  img.addEventListener('mouseleave', ()=>isPaused=false);
  container.appendChild(img);
  images.push(img);
  organizarCirculo();
}

document.getElementById('btnCarruselToggle').addEventListener('click', () => {

  if (images.length > 0) {
    
    if (backupCarrusel.length === 0) backupCarrusel = images.map(img => img.src);
    container.innerHTML = '';
    images = [];
  } else if (backupCarrusel.length > 0) {
    generarCarrusel(backupCarrusel);
  }
});

document.getElementById('btnFranjaToggle').addEventListener('click', () => {
  if (franja.children.length > 0) {
    
    if (backupFranja.length === 0) backupFranja = Array.from(franja.children).map(div => div.querySelector('img').src);
    franja.innerHTML = '';
  } else if (backupFranja.length > 0) {
    generarFranja(backupFranja);
  }
});

function cargarCategoria(urls){
  vaciarCarrusel(); 
  backupCarrusel = urls.slice();
  backupFranja = urls.slice();
  generarCarrusel(urls);
  generarFranja(urls);
}

const btnSubir = document.getElementById("btnSubirImagen");
const inputImagenes = document.getElementById("inputImagenes");

btnSubir.addEventListener("click", () => {
  inputImagenes.click();
});

inputImagenes.addEventListener("change", function(event) {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      const src = e.target.result;
      
      if(document.getElementById('btnBlusas').classList.contains('activo')) {
        agregarImagen(src); 
        imagenesLocalesBlusas.push(src); 
        localStorage.setItem("blusasLocales", JSON.stringify(imagenesLocalesBlusas));
      
      } else if(document.getElementById('btnElectro').classList.contains('activo')) {
        agregarImagen(src);
        imagenesLocalesElectro.push(src);
        localStorage.setItem("electroLocales", JSON.stringify(imagenesLocalesElectro));
      
      } else {
        agregarImagen(src);
      }
    };

    reader.readAsDataURL(file);
  }

  
  this.value = "";
});

function agregarImagen(src){
  const img = document.createElement('img'); 
  img.src = src; 
  img.dataset.id = nextId++;
  img.loading = "lazy"; 
  img.addEventListener('mouseenter', () => isPaused = true); 
  img.addEventListener('mouseleave', () => isPaused = false);

  container.appendChild(img); 
  images.push(img); 
  organizarCirculo();

  const thumbContainer = document.createElement('div'); 
  thumbContainer.className = 'thumb-container';
  const thumb = document.createElement('img'); 
  thumb.src = src;

  const btnEliminar = document.createElement('button'); 
  btnEliminar.className = 'btnEliminar'; 
  btnEliminar.textContent = '×';

  btnEliminar.onclick = (e) => { 
    e.stopPropagation(); 
    
    const idx = images.findIndex(i => i.dataset.id == img.dataset.id); 
    if(idx >= 0){ 
      const imgToRemove = images.splice(idx,1)[0]; 
      container.removeChild(imgToRemove);
    } 
    
    franja.removeChild(thumbContainer);
    
    if(document.getElementById('btnBlusas')?.classList.contains('activo')){
      let blusasGuardadas = JSON.parse(localStorage.getItem("blusasLocales") || "[]");
      blusasGuardadas = blusasGuardadas.filter(item => item !== img.src);
      localStorage.setItem("blusasLocales", JSON.stringify(blusasGuardadas));
      imagenesLocalesBlusas = blusasGuardadas; 
    }
    
    if(document.getElementById('btnElectro')?.classList.contains('activo')){
      let electroGuardadas = JSON.parse(localStorage.getItem("electroLocales") || "[]");
      electroGuardadas = electroGuardadas.filter(item => item !== img.src);
      localStorage.setItem("electroLocales", JSON.stringify(electroGuardadas));
      imagenesLocalesElectro = electroGuardadas; 
    }
  };
  thumbContainer.appendChild(thumb); 
  thumbContainer.appendChild(btnEliminar); 
  franja.appendChild(thumbContainer);

  thumb.onclick = () => { img.src = thumb.src; };
}
function organizarCirculo(){
  const total = images.length; if(total===0) return;
  const radiusX = 400 + total*10; const radiusY = 120 + total*5;
  images.forEach((img,i)=>{
    const angle=(i/total)*2*Math.PI + rotation;
    const x=radiusX*Math.cos(angle)+container.offsetWidth/2-img.offsetWidth/2;
    const y=radiusY*Math.sin(angle)+container.offsetHeight/2-img.offsetHeight/2;
    img.style.left=`${x}px`; img.style.top=`${y}px`; img.style.zIndex=2000-i;
  });
}
function animar(){ if(!isPaused){ rotation+=speed; } organizarCirculo(); requestAnimationFrame(animar);}
animar();
function vaciarCarrusel(){ container.innerHTML=''; franja.innerHTML=''; images=[]; rotation=0; speed=0.01; }
function mostrarMensajeVacio(){ vaciarCarrusel(); const mensaje=document.createElement('div'); mensaje.textContent="No images disponibles"; mensaje.style.fontSize="18px"; mensaje.style.color="#555"; mensaje.style.textAlign="center"; mensaje.style.marginTop="250px"; container.appendChild(mensaje); }

const urlsSombreros = [
"https://www.koaj.co/104386-large_default/sombrero.jpg","https://www.koaj.co/104372-large_default/sombrero.jpg","https://www.koaj.co/80357-large_default/sombrero.jpg","https://www.koaj.co/50310-large_default/sombrero.jpg","https://www.koaj.co/103516-large_default/sombrero.jpg"
];

const urlsBlusas = [
"https://icon2.cleanpng.com/ci2/kyi/yld/abf0atjcr.webp",  
"https://koaj.ec/284138-thickbox_default/blusa-camisera-oversize-manga-larga.jpg",   
"https://studiofpa.vtexassets.com/arquivos/ids/343385-2000-NaN?v=638929460513270000&width=2000&height=NaN&aspect=true",    
"https://studiofpa.vtexassets.com/arquivos/ids/343492-2000-NaN?v=638929461407230000&width=2000&height=NaN&aspect=true",    
"https://studiofpa.vtexassets.com/arquivos/ids/342366-2000-NaN?v=638923322215230000&width=2000&height=NaN&aspect=true",    
"https://studiofpa.vtexassets.com/arquivos/ids/317680-2000-NaN?v=638748081191300000&width=2000&height=NaN&aspect=true",    
"https://leonisa.ec/cdn/shop/files/F7028_001_1200X1500_1_380x.jpg?v=1754061341",   
"https://studiofpa.vtexassets.com/arquivos/ids/342969-2000-NaN?v=638923590454830000&width=2000&height=NaN&aspect=true"     
];

const urlsPantaMujer = [
"https://leonisa.ec/cdn/shop/files/J2870_700_1200X1500_1_380x.jpg?v=1756758286",   
"https://leonisa.ec/cdn/shop/files/F7442_145_1200X1500_1_380x.jpg?v=1757361822",   
"https://leonisa.ec/cdn/shop/files/DN3_022_1200X1500_1_380x.jpg?v=1752587285",     
"https://leonisa.ec/cdn/shop/files/DN4_018_1200X1500_1_380x.jpg?v=1752587320",     
"https://leonisa.ec/cdn/shop/files/F6499S_060_1200X1500_1_380x.jpg?v=1735220932",  
"https://leonisa.ec/cdn/shop/files/F7350_146_1200X1500_1_380x.jpg?v=1750453975"    
];

const urlsZapatos = ["https://paylessec.vtexassets.com/arquivos/ids/313859-450-450?v=637780423610070000&width=450&height=450&aspect=true",   

"https://ivannyboutique.com/40592-large_default/zapato-de-taco-irina-rojo-vino.jpg",   
 "https://www.tricot.cl/dw/image/v2/BGHZ_PRD/on/demandware.static/-/Sites-master-catalog-tricot/default/dw84d47f8e/images/large/PD273869.jpg?sw=400&sh=400&sm=fit&q=80&strip=false",   

"https://ivannyboutique.com/38750-large_default/zapato-de-taco-manuela.jpg",    
  
"https://paylessec.vtexassets.com/arquivos/ids/338127-450-450?v=637886720489230000&width=450&height=450&aspect=true", 
  "https://www.tricot.cl/dw/image/v2/BGHZ_PRD/on/demandware.static/-/Sites-master-catalog-tricot/default/dw42d28597/images/large/PD412148.jpg?sw=400&sh=400&sm=fit&q=80&strip=false",   
  "https://www.tricot.cl/dw/image/v2/BGHZ_PRD/on/demandware.static/-/Sites-master-catalog-tricot/default/dwd3763e6e/images/large/PD412154.jpg?sw=400&sh=400&sm=fit&q=80&strip=false",  
  "https://www.tricot.cl/dw/image/v2/BGHZ_PRD/on/demandware.static/-/Sites-master-catalog-tricot/default/dwe2f6f663/images/large/PD412200.jpg?sw=400&sh=400&sm=fit&q=80&strip=false",  
  "https://www.tricot.cl/dw/image/v2/BGHZ_PRD/on/demandware.static/-/Sites-master-catalog-tricot/default/dw3177e76c/images/large/PD412147.jpg?sw=400&sh=400&sm=fit&q=80&strip=false"  
];


const urlsVestidos = [
"https://i.pinimg.com/236x/9c/74/62/9c7462abacefdacb1175177cbca8c92c.jpg",  
"https://taty.com.ec/wp-content/uploads/2025/09/taty_vestido_co3903_2-540x690.jpg", 
"https://taty.com.ec/wp-content/uploads/2025/09/taty_vestido_d805641_2-540x690.jpg", 
"https://taty.com.ec/wp-content/uploads/2025/09/taty_vestido_cd4110b_2-540x690.jpg", 
"https://taty.com.ec/wp-content/uploads/2025/09/taty_vestido_LD11625_2-540x690.jpg" 
];

const urlsFaldas = [
"https://taty.com.ec/wp-content/uploads/2025/07/taty_falda_scu720_2-540x690.jpg",  
"https://taty.com.ec/wp-content/uploads/2025/03/taty_vestido_10270_2.jpg",  
"https://taty.com.ec/wp-content/uploads/2024/12/taty_falda_6948pn_1-540x690.jpg",  
"https://taty.com.ec/wp-content/uploads/2025/02/taty_blusa_mt4709_1-540x690.jpg",  
"https://cdn.shopify.com/s/files/1/0274/1066/1461/files/092528334414-2_grande.jpg?v=1759360122",   
"https://taty.com.ec/wp-content/uploads/2024/11/taty_falda_ch9365_1-1-540x690.jpg"  
];

const urlsChompas = ["https://nafnafec.vtexassets.com/arquivos/ids/297046-500-auto?v=638930473271470000&width=500&height=auto&aspect=true",  
"https://nafnafec.vtexassets.com/arquivos/ids/298923-500-auto?v=638931281128800000&width=500&height=auto&aspect=true",  
"https://nafnafec.vtexassets.com/arquivos/ids/294430-500-auto?v=638930439864300000&width=500&height=auto&aspect=true",  
"https://tennisecuador.vtexassets.com/arquivos/ids/959099-500-auto?v=638509828234400000&width=500&height=auto&aspect=true"  
];


const urlsCamisas = [  "https://pical.com.ec/pub/media/catalog/product/cache/e8e56bfb7b317cf25975f69c538ca145/c/i/ci15.01468-4a-155_1.jpg", 
  "https://pical.com.ec/pub/media/catalog/product/cache/e8e56bfb7b317cf25975f69c538ca145/c/i/ci15.01467-3e-155_1.jpg", 
  "https://pical.com.ec/pub/media/catalog/product/cache/e8e56bfb7b317cf25975f69c538ca145/c/i/ci15.01335-7a-155_1.jpg", 
  "https://tennisecuador.vtexassets.com/arquivos/ids/959099-500-auto?v=638509828234400000&width=500&height=auto&aspect=true",
       "https://hmecuador.vtexassets.com/unsafe/412x0/center/middle/https%3A%2F%2Fhmecuador.vtexassets.com%2Farquivos%2Fids%2F3635703-560-auto%2FCamisa-de-franela-Loose-Fit---Azul-Cuadros---H-M-EC.jpg%3Fv%3D638948782407500000"  

];   


const urlsRopa = [
  "https://www.bigallihats.com/cdn/shop/files/Marina-Bigalli_c438bdaa-bca4-4f0b-8205-64bddaf5c586.jpg",
  "https://tennisecuador.vtexassets.com/arquivos/ids/961762-500-auto?v=638520180994100000&width=500&height=auto&aspect=true",
  "https://tennisecuador.vtexassets.com/arquivos/ids/971372-500-auto?v=638545919157330000&width=500&height=auto&aspect=true",
  "https://tennisecuador.vtexassets.com/arquivos/ids/959485-500-auto?v=638514754774970000&width=500&height=auto&aspect=true",
  "https://tennisecuador.vtexassets.com/arquivos/ids/959099-500-auto?v=638509828234400000&width=500&height=auto&aspect=true",
  "https://tennisecuador.vtexassets.com/arquivos/ids/1113002-500-auto?v=638854417521630000&width=500&height=auto&aspect=true"
];


const urlsElectro = [
  "https://www.kissu.com.ec/imagenes//subcategorias/1659549117.jpg",  
  "https://www.kissu.com.ec/imagenes//productos/sm/17081008480.jpg",  
  "https://www.kissu.com.ec/imagenes//productos/sm/16789070110.jpg",  
  "https://www.kissu.com.ec/imagenes//productos/sm/17477744290.jpg"   
]; 


const urlsCarros = ["https://d1i6h2eptoatah.cloudfront.net/pages/benefit_section_buy_image.webp"]; 

function randomItem(array){ return array[Math.floor(Math.random()*array.length)]; }

function agregarImagenRandom(urlsCategoria){ if(urlsCategoria.length>0) agregarImagen(randomItem(urlsCategoria)); }

function resaltarBoton(idBoton){ const botones = menuInicial.querySelectorAll('button'); botones.forEach(btn=>btn.classList.remove('activo')); document.getElementById(idBoton).classList.add('activo'); }



function cargarSombreros(){ 
  vaciarCarrusel(); 
  urlsSombreros.forEach(src => agregarImagen(src));   
}

function cargarBlusas() { 
  vaciarCarrusel(); 

  
  urlsBlusas.forEach(src => agregarImagen(src));

  
  imagenesLocalesBlusas = JSON.parse(localStorage.getItem("blusasLocales") || "[]");
  imagenesLocalesBlusas.forEach(src => agregarImagen(src));
}
function cargarPantaMujer(){ 
  vaciarCarrusel(); 
  urlsPantaMujer.forEach(src => agregarImagen(src));
}
function cargarZapatos(){ 
  vaciarCarrusel(); 
  urlsZapatos.forEach(src => agregarImagen(src));
}
function cargarVestidos(){ 
  vaciarCarrusel(); 
  urlsVestidos.forEach(src => agregarImagen(src));
}
function cargarFaldas(){ 
  vaciarCarrusel(); 
  urlsFaldas.forEach(src => agregarImagen(src));
}
function cargarChompas(){ 
  vaciarCarrusel(); 
  urlsChompas.forEach(src => agregarImagen(src));
}
function cargarCamisas(){ 
  vaciarCarrusel(); 
  urlsCamisas.forEach(src => agregarImagen(src));
}
function cargarRopa(){ 
  vaciarCarrusel(); 
  urlsRopa.forEach(src => agregarImagen(src));
}

function cargarElectro(){ 
  vaciarCarrusel(); 

  
  urlsElectro.forEach(src => agregarImagen(src));

  
  imagenesLocalesElectro = JSON.parse(localStorage.getItem("electroLocales") || "[]");
  imagenesLocalesElectro.forEach(src => agregarImagen(src));
}
function cargarCarros(){ vaciarCarrusel(); agregarImagenRandom(urlsCarros); }
function cargarFerreteria(){ mostrarMensajeVacio(); }
function cargarMotos(){ mostrarMensajeVacio(); }
function cargarBicicletas(){ mostrarMensajeVacio(); }
function cargarRepuestos(){ mostrarMensajeVacio(); }
function cargarCelulares(){ mostrarMensajeVacio(); }

function toggleFranja() {
  franja.style.display = (franja.style.display === 'flex') ? 'none' : 'flex';
}

document.getElementById('btnToggleFranjaMenu').addEventListener('click', toggleFranja);

function esconderFoto() {
  const foto = document.getElementById('fotoCamara');
  foto.style.display = 'none';
}

function mostrarFoto() {
  const foto = document.getElementById('fotoCamara');
  if(foto.src) foto.style.display = 'block'; 
}

function toggleFoto() {
  const foto = document.getElementById('fotoCamara');
  if(foto.style.display === 'none') mostrarFoto();
  else esconderFoto();
}

const botonesCategorias = {
  'btnSombreros': cargarSombreros,
  'btnBlusas': cargarBlusas,
  'btnPantaMujer': cargarPantaMujer,
  'btnZapatos': cargarZapatos,
  'btnVestidos': cargarVestidos,
  'btnFaldas': cargarFaldas,
  'btnChompas': cargarChompas,
  'btnCamisas': cargarCamisas,
  'btnRopa': cargarRopa,
  'btnElectro': cargarElectro,
  'btnCarros': cargarCarros
};

for(const id in botonesCategorias){
  document.getElementById(id).addEventListener('click', ()=>{
    container.style.display='block'; franja.style.display='flex';
    botonesCategorias[id](); resaltarBoton(id);
  });
}


if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = false;

recognition.onresult = function(event){
  const last = event.results.length -1;
  const text = event.results[last][0].transcript.toLowerCase().trim();
  console.log("Comando voz:", text);

    if(text.includes("encender cámara")) {
        document.getElementById('btnCamara').click();
    }
    if(text.includes("apagar cámara")) {
        detenerCamaraPC();
    }
    if(text.includes("tomar foto")) {
        document.getElementById('btnTomarFoto').click();
    }

if(text.includes("carrusel")){
  document.getElementById('btnCarruselToggle').click(); 
}

if(text.includes("franja")){
  toggleFranja();
}

  if(text.includes("uno")){
  document.getElementById("menuInicial").style.display = "flex"; 
  abrirPantallaCompleta(); 
}
  if(text.includes("cero") || text.includes("f11")){
  document.getElementById("menuInicial").style.display = "none"; 
  cerrarPantallaCompleta(); 
}
  
  for(const id in botonesCategorias){
    const nombreBoton = document.getElementById(id).textContent.toLowerCase();
    if(text.includes(nombreBoton)){
      document.getElementById(id).click();
      break;
    }
  }
}

  recognition.onend = ()=>recognition.start();
  recognition.start();
}


window.addEventListener('DOMContentLoaded', ()=>{
  
  const blusasGuardadas = localStorage.getItem("blusasLocales");
  if(blusasGuardadas){
    imagenesLocalesBlusas = JSON.parse(blusasGuardadas);
  }
  
  const electroGuardadas = localStorage.getItem("electroLocales");
  if(electroGuardadas){
    imagenesLocalesElectro = JSON.parse(electroGuardadas);
  }
  
  const categorias = Object.keys(botonesCategorias); 
  const categoriaRandom = categorias[Math.floor(Math.random() * categorias.length)]; 
  document.getElementById(categoriaRandom).click(); 
});

window.addEventListener('load', iniciarCambioAutomatico);
</script>



  

 
<script>
  
const videoCamara = document.getElementById('videoCamara');
const canvasCamara = document.getElementById('canvasCamara');
const btnTomarFoto = document.getElementById('btnTomarFoto');
const fotoCamara = document.getElementById('fotoCamara');

btnTomarFoto.addEventListener('click', () => {
    
    canvasCamara.width = videoCamara.videoWidth;
    canvasCamara.height = videoCamara.videoHeight;
    const ctx = canvasCamara.getContext('2d');
    ctx.drawImage(videoCamara, 0, 0, canvasCamara.width, canvasCamara.height);

    
    fotoCamara.src = canvasCamara.toDataURL();
    fotoCamara.style.display = 'block';

    
    fotoCamara.style.position = 'absolute';
    fotoCamara.style.left = '1000px';   
    fotoCamara.style.top = '80px';     
    fotoCamara.style.width = '200px';
    fotoCamara.style.height = '200px';
    fotoCamara.style.transition = 'all 0.5s ease'; 
});
</script>





<script>


const categorias = [
  { nombre: "Sombreros Mujer", urls: urlsSombreros },
  { nombre: "Blusas", urls: urlsBlusas },
  { nombre: "Pantalones Mujer", urls: urlsPantaMujer },
  { nombre: "Zapatos", urls: urlsZapatos },
  { nombre: "Vestidos", urls: urlsVestidos },
  { nombre: "Chompas", urls: urlsChompas },
  { nombre: "Faldas", urls: urlsFaldas },
  { nombre: "Camisas", urls: urlsCamisas },
  
  { nombre: "Electro", urls: urlsElectro },
  { nombre: "Carros", urls: urlsCarros }
];

let indiceActual = 0;
let intervaloCambio = null;
function mostrarCategoriaActual() {
  const categoria = categorias[indiceActual];
  if (categoria && categoria.urls.length > 0) {
    cargarCategoria(categoria.urls);
    resaltarBoton(categoria.nombre);
    console.log(`🌀 Mostrando categoría: ${categoria.nombre}`);
  } else {
    console.log(`⚠️ Categoría vacía: ${categoria.nombre}`);
  }
}
function resaltarBoton(nombreCategoria) {
  document.querySelectorAll("#menuInicial button").forEach(btn => {
    btn.classList.remove("activo");
    if (btn.textContent.trim() === nombreCategoria) btn.classList.add("activo");
  });
}

function iniciarRotacionCategorias() {
  mostrarCategoriaActual();
  intervaloCambio = setInterval(() => {
    indiceActual = (indiceActual + 1) % categorias.length;
    mostrarCategoriaActual();
  }, 3000); 
}

window.addEventListener("load", iniciarRotacionCategorias);
</script>






<script>

document.addEventListener("DOMContentLoaded", () => {
  
  const btnRotacion = document.getElementById("btnRotacion");

  
  btnRotacion.addEventListener("click", () => {
    
    isPaused = !isPaused;

    
    btnRotacion.textContent = isPaused ? "▶ Continuar rotación" : "⏸ Pausar rotación";
  });

  
  btnRotacion.textContent = "⏸ Pausar rotación";
});
</script>










<style>
  #whatsappMensajeFijo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #25D366;
    color: white;
    padding: 14px 22px;
    border-radius: 14px;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.35);
    z-index: 99999;
  }

  #whatsappMensajeFijo a {
    color: white;
    font-weight: bold;
    text-decoration: underline;
  }
</style>



<div id="whatsappMensajeFijo">
  WhatsApp:
  <a href="https://wa.me/593985019054" target="_blank">Enviar mensaje</a>
</div>




<script>
  console.log("WhatsApp fijo funcionando...");
</script>












<style>
  #bienvenido {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: yellow;
    color: white;
    padding: 14px 22px;
    border-radius: 14px;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.35);
    z-index: 99999;
  }

  #bienvenido a {
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }
</style>




<div id="bienvenido">


  <a href="http://localhost/mi_proyecto/claves_VitrinasOnline.html">Ingresar</a>

</div>




<script>
  console.log("WhatsApp fijo funcionando...");
</script>



</body>
</html>




`;