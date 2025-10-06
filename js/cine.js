const getCine = async () => {
    const id = (new URLSearchParams(window.location.search)).get('id')
    const cines = await fetch(`http://localhost/cinestar_sweb_php/cines/${id}`)
    if (cines.status != 200) return

    const pelicula = (await cines.json()).data
    const peliculas = pelicula.peliculas
    const tarifas = pelicula.tarifas

    let html = `
        <h2>${pelicula.RazonSocial}</h2>
        <div class="cine-info">
            <div class="cine-info datos">
                <p>${pelicula.Direccion}</p>
                <p>${pelicula.Telefonos} anexo 865</p>
                <br/>
                <div class="tabla" id="tarifas">
    `

    for (let i = 0; i < tarifas.length; i++) {
        html += `
            <div class="${(i % 2 == 0) ? 'fila' : 'fila impar'}">
                <div class="celda-titulo">${tarifas[i].DiasSemana}</div> 
                <div class="celda">${tarifas[i].Precio}</div>
            </div>
        `
    }

    html += `
                </div>
                <div class="aviso">
                    <p>
                        A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.
                    </p>
                </div>
            </div>

            <img src="img/cine/1.2.jpg"/>
            <br/><br/>
            <h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4>
            <br/>

            <div class="cine-info peliculas">
                <div class="tabla" id="peliculas">
                    <div class="fila">
                        <div class="celda-cabecera">Películas</div>
                        <div class="celda-cabecera">Horarios</div>
                    </div>
    `

    for (let i = 0; i < peliculas.length; i++) {
        html += `
            <div class="${(i % 2 == 0) ? 'fila' : 'fila impar'}">
                <div class="celda-titulo">${peliculas[i].Titulo}</div> 
                <div class="celda">${peliculas[i].Horarios}</div>
            </div>
        `
    }

    html += `
                </div>
            </div>

            <div>
                <img class="img-cine"  src="img/cine/1.3.jpg" alt="Imagen del cine" />
                <span class="tx_gris">
                    Precios de los juegos: desde S/1.00 en todos los Cine Star.<br />
                    Horario de atención de juegos es de 12:00 m hasta las 10:30 pm.
                    <br /><br />
                    Visítanos y diviértete con nosotros.
                    <br /><br />
                    <b>CINESTAR</b>, siempre pensando en ti.
                </span>
            </div>
        </div>
    `

    document.getElementById(`contenido-interno`).innerHTML = html
}

getCine();