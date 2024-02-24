import { Router} from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

//NÃO PODEM SER EXIBIDOS EM UMA APLICAÇAO produção. [obs.: vai depender da regra de negócio do sistema]

//router.get('/', usuarioController.index);
//router.get('/:id', usuarioController.show);

//EM UMA APLICAÇÃO REAL TEMOS salvar, atualizar e deletar APENAS DO USUÁRIO LOGADO
// DEIXAMOS ABERTO O store PARA QUE NOVOS USUÁRIOS POSSAM SE CADASTRAR NO SISTEMA


/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados no sistema.
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida. Retorna uma lista de usuários.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/', usuarioController.index);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     description: Retorna um único usuário com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser retornado
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida. Retorna um usuário.
 *       '404':
 *         description: Usuário não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/:id', usuarioController.show);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Cria um novo usuário com os dados fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *             required:
 *               - nome
 *               - email
 *               - senha
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso.
 *       '400':
 *         description: Dados de entrada inválidos.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/', usuarioController.store);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     description: Atualiza os dados de um usuário existente com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *             required:
 *               - nome
 *               - email
 *               - senha
 *     responses:
 *       '200':
 *         description: Usuário atualizado com sucesso.
 *       '400':
 *         description: Dados de entrada inválidos ou ID inválido.
 *       '404':
 *         description: Usuário não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/', loginRequired, usuarioController.update);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário existente
 *     description: Remove um usuário existente com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuário removido com sucesso.
 *       '404':
 *         description: Usuário não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/', loginRequired ,usuarioController.delete);

//HABILITAR UPDATE E DELETE PASSANDO O PARAMETRO ID APENAS PARA ADMINISTRADORES DO SISTEMA - implementar isso no futuro

// router.put('/:id', usuarioController.update);
// router.delete('/:id', usuarioController.delete);

export default router;
