
const FinancialServices = require("../services/financial-services.js")();
let mongoose = require('mongoose');
const viewFolder = 'financial';

FinancialController = {

  bind : function(body) {
    if(body.value == 0){
      throw new Error("parameters");
    } else {
      let cashflow = new mongoose.models.CashFlow();
      cashflow.value = Number(body.value);
      if(cashflow.value < 0){
        cashflow.type = 1;
      } else {
        cashflow.type = 2;
      }
      cashflow.description = body.description;
      return cashflow;
    }
  },

  listPage : async function(req, res) {
    let list = await FinancialServices.listCashFlow();
    res.render(viewFolder+'/list.ejs', {
      message: req.body.message,
      list: list,
      title: "Entradas e Saídas"
    });

  },

  newPage : async function(req, res) {
    res.render(viewFolder+'/form.ejs', {
      message: null,
      title: "Nova Entrada/Saída"
    });
  },

  createNew : async function(req, res) {
    try {
      let cashflow = this.bind(req.body);
      let response = await FinancialServices.createCashFlow(cashflow);
    }
    catch(e){
      res.render(viewFolder+'/form.ejs', {
        message: e,
        title: "Nova Entrada/Saída"
      });
    }
    res.render(viewFolder+'/form.ejs', {
      message: "Adicionado com sucesso.",
      title: "Entradas e Saídas"
    });
  },

};

module.exports = FinancialController;
