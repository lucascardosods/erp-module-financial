ClientController = {

  listPage : function(req, res) {
    console.log('hey apple');
    res.render('client/list.ejs', {
      message: null
    });

  }
};

module.exports = ClientController;
