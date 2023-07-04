import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

// app.get('/productos', (req, res) => {
//   res.send('Se hizo la peticion get')
//   })

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 100 caracteres como maximo"
        ),
      check('precio')
          .notEmpty()
          .withMessage('El precio es un dato obligatorio')
          .isNumeric()
          .withMessage('El precio debe ser un número')
          .custom(((value)=>{
            if( value >= 1 && value<=10000){
              return true;
            }else{
              throw new Error('El precio debe estar entre 1 y 10000')
            }
          })),
      check('imagen')
          .notEmpty()
          .withMessage('La url de la imagen es obligatoria')
          .matches(/(https?:\/\/.*\.(?:png|jpeg))/)
          .withMessage('Debe ser una URL de imagen valida, con extension (png|jpe?g|gif|bmp) ')
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);
export default router;
