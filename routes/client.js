clientRouter = function(router) {

  const ClientController = require('../controllers/ClientController.js');

  router.get("/client/list", function (req, res, next) {
    ClientController.listPage(req, res)
  });


};

module.exports = clientRouter;
