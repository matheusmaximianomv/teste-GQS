const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    return res.status(200).json({
        name: 'Atividade 2',
        description: 'Segunda atividade da cadeira de Gestão de Qualidade de Software aplicando os conceitos de testes'
    });
});

module.exports = routes;