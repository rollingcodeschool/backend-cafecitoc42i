import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validacionProducto";
import validarJWT from "../helpers/token-verify";

const router = Router();

// app.get('/productos', (req, res) => {
//   res.send('Se hizo la peticion get')
//   })

router
  .route("/productos")
  .get(obtenerProductos)
  .post([ validarJWT,validarProducto], crearProducto);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(validarJWT,borrarProducto)
  .put([validarJWT, validarProducto], editarProducto);
export default router;
