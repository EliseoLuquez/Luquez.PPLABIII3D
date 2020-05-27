var frm;
var botonAlta;
var botonModificar;
var botonBaja;
var botonCancelar;
var divTabla;

window.addEventListener('load', () => {
    frm = document.forms[0];
    botonAlta = document.getElementById('btnAlta');
    botonBaja = document.getElementById('btnBaja');
    botonModificar = document.getElementById('btnModificar');
    botonCancelar = document.getElementById('btnCancelar');
    divTabla = document.getElementById('divTabla');
    
    TraerDatos();
    botonBaja.hidden = true;
    botonCancelar.hidden = true;
    botonModificar.hidden = true;

    frm.addEventListener('submit', function(e)
    {
        e.preventDefault();
    });

    botonAlta.addEventListener('click', function(e){       
        let nuevoDato = obtenerDato(frm);
        Alta(nuevoDato);
    });

    botonBaja.addEventListener('click', function(e){
            if (confirm('¿Eliminar?')){
               let nuevoDato = obtenerDato(frm);
               Baja(nuevoDato);
               Cancelar(frm);
               botonAlta.hidden = false;
               botonBaja.hidden = true;
               botonCancelar.hidden = true;
               botonModificar.hidden = true;
            }
    });

    botonModificar.addEventListener('click', function(e){
            if (confirm('¿Modificar?')){
               let nuevoDato = obtenerDato(frm);
               Modificar(nuevoDato);
               Cancelar(frm);
               botonAlta.hidden = false;
               botonBaja.hidden = true;
               botonCancelar.hidden = true;
               botonModificar.hidden = true;

            }
    });

    botonCancelar.addEventListener('click', function(e){
        Cancelar(frm);
        botonAlta.hidden = false;
        botonBaja.hidden = true;
        botonCancelar.hidden = true;
        botonModificar.hidden = true;
    });
});

function obtenerDato(frm)
{
    let id;
    let titulo;
    let transaccion = 'venta';
    let descripcion;
    let animal;
    let precio;
    let raza;
    let fecha;
    let vacuna;
    let active = 'active';

    for(elements of frm.elements)
    {
        switch(elements.name)
        {
            case 'id':
                id = elements.value;
                break;
            case 'titulo':
                titulo = elements.value;
                break;
             case 'descripcion':
                descripcion = elements.value;
                break;
            case 'animal':
                if(document.getElementById('perro').checked == true)
                {
                    animal = 'perro';
                }
                else if(document.getElementById('gato').checked == true)
                {
                    animal = 'gato';
                }
                break;  
            case 'precio':
                precio = elements.value;
                break;
            case 'raza':
                raza = elements.value;
                break;
            case 'fecha':
                fecha = elements.value;
                break;
            case 'vacunas':
                vacuna = elements.value;
                break;
        }
    }
    return new Anuncio_Mascota(id, titulo, transaccion, descripcion, precio, animal, raza, fecha, vacuna, active);
}


function CargarForm(frm, Anuncio_Mascota)
{
    for(elements of frm.elements)
    {
        switch(elements.name)
        {
            case 'id':
                elements.value = Anuncio_Mascota.id;
                break;
            case 'titulo':
                elements.value = Anuncio_Mascota.titulo;
                break;
            case 'animal':
                if(Anuncio_Mascota.animal == 'perro')
                {
                    document.getElementById('perro').checked = true;
                    document.getElementById('gato').checked = false;
                }
                else if(Anuncio_Mascota.animal == 'gato')
                {
                    document.getElementById('perro').checked = false;
                    document.getElementById('gato').checked = true;
                }
                break;  
            case 'descripcion':
                elements.value = Anuncio_Mascota.descripcion;
                break;
            case 'precio':
                elements.value = Anuncio_Mascota.precio;
                break;
            case 'raza':
                elements.value = Anuncio_Mascota.animal;
                break;
            case 'fecha':
                elements.value = Anuncio_Mascota.fecha;
                break;
            case 'vacunas':
                elements.value = Anuncio_Mascota.vacunas;
                break;
        }
    }
}


function Cancelar(frm)
{
    for(elements of frm.elements)
    {
        switch(elements.name)
        {
            case 'id':
                elements.value = '';
                break;
            case 'titulo':
                elements.value = '';
                break;
            case 'descripcion':
                elements.value = '';
                break;
            case 'animal':
                if(document.getElementById('perro').checked == true || document.getElementById('gato').checked == true)
                {
                    document.getElementById('perro').checked = false;
                    document.getElementById('gato').checked = false;
                }
                break;  
            case 'precio':
                elements.value = '';
                break;
            case 'raza':
                elements.value = '';
                break;
            case 'fecha':
                elements.value = '';
                break;
            case 'vacunas':
                elements.value = '';
                break;
        }
    }
}

function Spinner()
{
    var spinner = document.createElement('img');
    spinner.setAttribute('src', './img/480.gif');
    spinner.setAttribute('alt', 'spinner');
    return spinner;
}