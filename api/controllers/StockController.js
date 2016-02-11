/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getStock: function (req ,res){
    Stock.find().exec(function (err, stocks){
      console.log('controller');
      sails.config.test();
      res.json({result : stocks});
    })
  },
};

