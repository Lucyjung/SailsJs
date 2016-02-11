
module.exports = {

  populate: function() {

    console.log('custom service');
    Stock.find().exec(function (err, stocks){
      console.log(stocks);
    })

  }
};
