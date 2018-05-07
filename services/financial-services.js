module.exports = function () {

  const CashFlowDAO = require('../DAO/cash-flow-dao');

  return {

    listCashFlow: async function () {
      try {
        return await CashFlowDAO.connection().find().toArray();
      } catch(er){
        return (new Error('connection-error'));
      }
    },

    createCashFlow: async function (client) {
      try {
        return await CashFlowDAO.connection().insert(client);
      } catch(er){
        return (new Error('connection-error'));
      }
    },



  }

};
