CashFlowDAO = {
  connection : function() {
    return global._connection.db(global.__CONFIG.NAME).collection("cashflows");
  },
};

module.exports = CashFlowDAO;
