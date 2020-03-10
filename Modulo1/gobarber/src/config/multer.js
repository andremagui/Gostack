import multer from 'multer';
import crypto from 'crypto';
// funções: extname, retorna a extensão do arquivo
// resolve, percorre um caminho
import { extname, resolve } from 'path';

// onde o multer irá armazenar os uploads
// filename é como formatar e controlar o nome do arquivo da nossa imagem!
export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
