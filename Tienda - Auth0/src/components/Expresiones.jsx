const Expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, números, guion y guión_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 números.
        valores: /^\d{4,10}$/,
        cantidad: /^\d{1,4}$/,
        fechas: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
        descripcion: /^[a-zA-ZÀ-ÿ\s-Z0-9_.+-,]{4,100}$/, // Letras, números, guion y guión_bajo
};

export default Expresiones;

