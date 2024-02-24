const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./config/swaggerConfig');

const app = express();

// Rota para servir a documentação Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

// Rotas existentes
const usuarioRoutes = require('./routes/usuarioRoutes');
const coletaEntregadoresRoutes = require('./routes/coletaEntregadoresRoutes');
const coletaRoutes = require('./routes/coletaRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const entregadorRoutes = require('./routes/entregadorRoutes');
const entregaRoutes = require('./routes/entregaRoutes');
const homeRoutes = require('./routes/homeRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

// Adiciona as rotas ao aplicativo
app.use('/usuarios', usuarioRoutes);
app.use('/coletas-entregadores', coletaEntregadoresRoutes);
app.use('/coletas', coletaRoutes);
app.use('/empresas', empresaRoutes);
app.use('/entregadores', entregadorRoutes);
app.use('/entregas', entregaRoutes);
app.use('/', homeRoutes);
app.use('/tokens', tokenRoutes);

// ...

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
