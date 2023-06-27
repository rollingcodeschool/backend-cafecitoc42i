import Producto from '../models/producto';

export const obtenerProductos = (req, res) => {
  res.send('Se hizo la peticion get');
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(200).json({
      mensaje: 'El producto se creo correctamente',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al crear el producto',
    });
  }
};
