import { Router } from 'express';
import { borrarProducto, crearProducto, obtenerProducto, obtenerProductos } from '../controllers/productos.controllers';

const router = Router();

// app.get('/productos', (req, res) => {
//   res.send('Se hizo la peticion get')
//   })

router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProducto).delete(borrarProducto);
export default router;
