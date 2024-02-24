// eslint-disable-next-line
import dotenv from 'dotenv';
dotenv.config();

import './backend/src/database';
import express from 'express';

// import swaggerSpec from './backend/src/config/swaggerConfig';

import tokenRoutes from './backend/src/routes/tokenRoutes';

import homeRoutes from './backend/src/routes/homeRoutes'
import empresaRoutes from './backend/src/routes/empresaRoutes'
import usuarioRoutes from './backend/src/routes/usuarioRoutes';
import entregadorRoutes from './backend/src/routes/entregadorRoutes';
import entregaRoutes from './backend/src/routes/entregaRoutes';
import coletaRoutes from './backend/src/routes/coletaRoutes';
import coletaEntregadorRoutes from './backend/src/routes/coletaEntregadorRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './backend/src/config/swagger.json';

//const helmet = require('helmet');



class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    //this.swaggerSpec;
  }

  middlewares() {

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    //this.app.use(helmet());

  }

  routes() {

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.app.use('/api/home/', homeRoutes );
    this.app.use('/api/tokens/', tokenRoutes );
    this.app.use('/api/empresas/', empresaRoutes );
    this.app.use('/api/usuarios/', usuarioRoutes);
    this.app.use('/api/entregadores/', entregadorRoutes);
    this.app.use('/api/entregas/', entregaRoutes);
    this.app.use('/api/coletas/', coletaRoutes);
    this.app.use('/api/coletas-entregadores/', coletaEntregadorRoutes);

  }


}

export default new App().app;
