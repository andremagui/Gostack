import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // que tipo de arquivos serão consumidos?
  middlewares() {
    this.server.use(express.json());
  }

  /* quais rotas usar?  */
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
