/*TENTAR IMPLEMENTAR ISSO NO FUTURO.
O comando npx swagger-jsdoc -d ../routes/empresaRoutes -o ./swagger.json não consegue encontrar o caminho*/

const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentação da API cd_express',
      version: '1.0.0',
      description: 'Documentação da API para o sistema CD Express'
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor de desenvolvimento'
      },
    ],
  },

  apis: [
    path.resolve(__dirname, './backend/routes/coletaEntregadoresRoutes.js'),
    path.resolve(__dirname, '../routes/coletaRoutes.js'),
    path.resolve(__dirname, '../routes/empresaRoutes.js'),
    path.resolve(__dirname, '../routes/entregadorRoutes.js'),
    path.resolve(__dirname, '../routes/entregaRoutes.js'),
    path.resolve(__dirname, '../routes/usuarioRoutes.js')
  ], // Altere o caminho de acordo com a estrutura da rota
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
