const contenedor= document.getElementById('contenedor');

fetch('https://rickandmortyapi.com/api/character')
.then(response=>{
    if(!response.ok){
        throw new Error('Error en la solicitud de la API')
    }return response.json()})
.then(data=>{
    //iteramos sobre los datos obtenidos
    data.results.forEach(element => {
        //creamos un  elemento contenedor para cada imagen
        const contenedor_fotos=document.createElement('div');//creamos contenedor de cada foto
        const fotos=document.createElement('img');//creamos las imagenes en el dom
        fotos.src=element.image;//cargamos la foto que necesitamos de la data
        contenedor_fotos.appendChild(fotos);
        contenedor.appendChild(contenedor_fotos);//ingresamos la imagen dentro del contenedor de cada imgen
        
    });
}).catch(error=> {console.log(
'ah ocurrido un error. intentaremos solucionarlo',error)});


const text_error=document.createElement('p');
const mensaje_error='ah ocurrido un error. intentaremos solucionarlo'
contenedor.appendChild(text_error);
text_error.appendChild(mensaje_error);