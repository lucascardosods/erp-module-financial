financialRouter = function(router) {

  const FinancialController = require('../controllers/financial-controller.js');

  router.get("/financial/list", function (req, res) {
    FinancialController.listPage(req, res)
  });

  router.get("/financial/new", function (req, res) {
    FinancialController.newPage(req, res)
  });

  router.post("/financial/new", async function (req, res) {
    try {
      FinancialController.createNew(req, res, function(e){
        req.body.message = {"success" : "Sucesso na criação"};
        FinancialController.listPage(req, res);
      });
    } catch(e){
      req.body.message = {"error" : "Falha na criação."};
      FinancialController.listPage(req, res);
    }

  });


};

module.exports = financialRouter;
