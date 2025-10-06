const getpeliculas =async()=>{
    const id =(new URLSearchParams(window.location.search)).get('id')
    const data = await fetch(`http://localhost/cinestar_sweb_php/peliculas/${id}`)
    if(data.status==200) return

    const peliculas = await data.json()
    
    let html='<br/><h1>Cartelera</h1><br/>'

    peliculas.data.forEach(pelicula => {
        html +=`
        
				<div class="contenido-pelicula">
					<div class="datos-pelicula">
						<h2>${pelicula.Titulo}</h2><br/>
						<p>${pelicula.sipnosis}</p>
						<br/>
                       	<div class="boton-pelicula"> 
                       		<a href="http://www.cinestar.com.pe/cartelera/pelicula/Locos-de-Amor-2" >
                       			<img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       		</a>
               			</div>
               			<div class="boton-pelicula"> 
               				<a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
               					<img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
               				</a>
                        </div> 
					</div>
					<img src="img/pelicula/${pelicula.id}><br/><br/>
				</div>
        `
        
    });
    document.getElementById('contenido-interno').innerHTML=html
}
getpeliculas()
