class Anuncio
{
    id;
    titulo;
    transaccion;
    descripcion;
    precio;

    
    constructor(id, titulo, transaccion = 'venta', descripcion, precio)
    {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }

}