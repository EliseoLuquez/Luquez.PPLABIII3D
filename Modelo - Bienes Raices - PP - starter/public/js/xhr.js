function TraerDatos()
{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4)
        {
            if(xhr.status = 200)
            {
                let json = JSON.parse(xhr.responseText);
                divTabla.innerHTML = '';
                divTabla.appendChild(CrearTabla(json['data']));
                let tds = document.getElementsByTagName('td');
                for(let i = 0; i < tds.length; i++)
                {
                    let td = tds[i];
                    td.addEventListener('click', CargarFormulario);
                }
            }
            else
            {
                console.log(xhr.status + '' + xhr.statusText);
            }
        }
        else
        {
            divTabla.appendChild(Spinner());
        }
    }
    xhr.open('GET', 'http://localhost:3000/traer', true);
    xhr.send();
}

function Alta(dato)
{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
        {
            if(xhr.responseText == 'Alta Exitosa')
            {
                //console.log(dato);
                TraerDatos();
            }
            else
            {
                console.log(xhr.responseText);
                TraerDatos();
            } 
        }     
        else
        {
            divTabla.innerHTML = '';
            //divTabla.appendChild(Spinner());
        }
    }
    xhr.open('POST', 'http://localhost:3000/alta', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(dato));
}


function Baja()
{
    let id = parseInt(document.querySelector('#txtId').value);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
        {
            if(xhr.responseText == 'Baja Exitosa')
            {
                TraerDatos();
            }
            else
            {
                console.log(xhr.responseText);
                TraerDatos();
            } 
        }     
        else
        {
            divTabla.innerHTML = '';
            //divTabla.appendChild(Spinner());
        }
    }
    xhr.open('POST', 'http://localhost:3000/baja', true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    //console.log(JSON.stringify(dato['id']));  
    xhr.send(`id=${id}`);
}


function Modificar(dato)
{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
        {
            if(xhr.responseText == 'Modificacion Exitosa')
            {
                TraerDatos();
            }
            else
            {
                console.log(xhr.responseText);
                TraerDatos();
            } 
        }     
        else
        {
            divTabla.innerHTML = '';
            //divTabla.appendChild(Spinner());
        }
    }
    xhr.open('POST', 'http://localhost:3000/modificar', true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(dato));
}

function CargarFormulario(e)
{
    let tr = e.target.parentElement;
    let nodes = tr.childNodes;
    let dato = new Anuncio_Mascota(nodes[0].textContent, nodes[1].textContent, nodes[2].textContent, nodes[3].textContent, 
        nodes[4].textContent, nodes[5].textContent, nodes[6].textContent, nodes[7].textContent);
    botonAlta.hidden = true;
    botonBaja.hidden = false;
    botonCancelar.hidden = false;
    botonModificar.hidden = false;
    CargarForm(document.forms[0], dato);
}
