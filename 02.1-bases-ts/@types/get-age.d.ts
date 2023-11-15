declare module 'get-age' {
    // La función getAge recibe una fecha de nacimiento como string
    // y devuelve un número que representa la edad en años
    function getAge(birthDate: string): number;
  
    // Exporta la función getAge como el valor predeterminado del módulo
    export default getAge;
  }
  