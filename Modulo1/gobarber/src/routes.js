// COMM SERVICE
import { Router } from 'express';

// UPLOAD SERVICE MultiPartFormData
import multer from 'multer';
import multerConfig from './config/multer';

// CONTROLLERS
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// MIDDLEWARES
import authMiddleware from './app/middlewares/auth';

// COMM INSTANCE
const routes = new Router();
const upload = multer(multerConfig);

// ROUTES
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
