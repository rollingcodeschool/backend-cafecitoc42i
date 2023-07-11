import { Router } from "express";
import { crearUsuario, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";

const router = Router();
// todo: tarea agregar validaciones a las rutas de usuarios
router.route('/').get(obtenerUsuarios).post(login);
router.route('/nuevo').post(crearUsuario);
router.route('/usuario/:id').get(obtenerUsuario);

export default router