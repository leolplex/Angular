export interface User {
    nombrecompleto: NombreCompleto;
    correo: string;
    pasatiempos: any[];
}

interface NombreCompleto {
    nombre: string;
    apellido: string;
}
