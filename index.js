const contenedor= document.getElementById('contenedor');

fetch('https://rickandmortyapi.com/api/character')
.then(response=>{
    if(!response.ok){
        throw new Error('Error en la solicitud de la API')
    }return response.json()})
.then(data=>{
    //iteramos sobre los datos obtenidos
    data.results.forEach(element => {

        const card=document.createElement('section');

        //creamos un  elemento contenedor para cada imagen
        const contenedor_fotos=document.createElement('div');//creamos contenedor de cada foto
        contenedor_fotos.className='contenedor_fotos'//asigno el nombre clase a contenedor fotos
        const fotos=document.createElement('img');//creamos las imagenes en el dom
        fotos.src=element.image;//cargamos la foto que necesitamos de la data
        //ingresamos las imagens al contenedor imgenes
        contenedor_fotos.appendChild(fotos);

        card.appendChild(contenedor_fotos);
        card.className='card';//asignamos clase al contenedor

        //ingresamos al CONTENEDOR PRINCIPAL el contenedor que contiene la imagen
        contenedor.appendChild(card);
        
        const contenedor_datos=document.createElement('div');//creamos el contenedor de los datos
        contenedor_datos.className= 'contenedor_datos';//colocamos clase al contenedor para usar en css
        const datos_name= document.createElement('h4');//creamos los comentarios que tendran los datos de la img
        const datos_gender=document.createElement('p');
        const datos_status=document.createElement('p');
        //console.log(datos_name,datos_gender,datos_status)

        datos_name.textContent=element.name;//cargamos el nombre y lo mostramos en pantalla
        datos_gender.textContent=element.gender;//cargamos genero y lo mostramos en pantalla
        datos_status.textContent=element.status;//cargamos status y lo mostramos en pantalla
        //*NOTA: para que aparezca en pantalla la leyenda NOMBRE:
        //  deberia ser datos_name.textContent=`Nombre:${character.name}`
        


        //ingresamos al contenedor DATOS los datos name,gender,status
        contenedor_datos.appendChild(datos_name);
        contenedor_datos.appendChild(datos_gender);
        contenedor_datos.appendChild(datos_status);
    
        //agregamos la data a la tarjeta
        card.appendChild(contenedor_datos);

        //ingresamos al CONTENEDOR, la tarjeta que tiene ambos contenedores (fotos y datos)
        contenedor.appendChild(card);
    });
}).catch(error=> {console.log(
'ah ocurrido un error. intentaremos solucionarlo',error)});


//const text_error=document.createElement('p');
//const mensaje_error='ah ocurrido un error. intentaremos solucionarlo'
//contenedor.appendChild(text_error);
//text_error.appendChild(mensaje_error);