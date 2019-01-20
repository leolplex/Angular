export interface User {
    nombrecompleto: NombreCompleto;
    correo: string;
}

interface NombreCompleto {
    nombre: string;
    apellido: string;
}
