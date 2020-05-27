class Anuncio_Mascota extends Anuncio
{
    animal;
    raza;
    fecha;
    vacuna;
    active;

    constructor(id, titulo, transaccion, descripcion, precio, animal, raza, fecha, vacuna, active = true)
    {
        super(id, titulo, transaccion, descripcion, precio);
        this.animal = animal;
        this.raza = raza;
        this.fecha = fecha;
        this.vacuna = vacuna;
        this.active = active;
    }
}