
function CrearTabla(array)
{
    var tabla = document.createElement('tabla');

    tabla.getAttribute('border', '1px solid black');
    tabla.getAttribute('style', 'border-collapse: collapse');
    tabla.getAttribute('width 700px');

    let cabecera = document.createElement('tr');

    for (atributo in array[0])
    {
        let th = document.createElement('th');
        th.textContent = atributo;
        if(atributo != 'active')
        {
            cabecera.appendChild(th);
        }  
    }

    tabla.appendChild(cabecera);

    for (var i in array)
    {
        var row = document.createElement('tr');
        var auxObj = array[i];

        for (var j in auxObj)
        {
            if(auxObj[j] == auxObj['active'])
            {
                continue;
            }
            let td = document.createElement('td');
            td.setAttribute('style', 'text-aling: center');
            var dato = document.createTextNode(auxObj[j]);
            td.appendChild(dato);
            row.appendChild(td);
    
        }
        tabla.appendChild(row);
    }
    return tabla;
}