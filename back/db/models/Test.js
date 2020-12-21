const S = require("sequelize");
const db = require("../db");
const moment = require('moment'); 
moment().format(); 



class Test extends S.Model {}
Test.init(
  {
    status: {
      type: S.INTEGER,
      allowNull: true,
    },
    availableAt: {
      type: S.STRING,
      defaultValue: moment().add(1, 'minute')._d.toString(),
      //En el front podemos usar if(moment().diff(test.availableAt, 'hours') <= 0)
      //mostras el test y sino redirigis a una vista que muestre podrás tomar este test 
      //nuevamente dentro de diff(test.availableAt, 'hours')
    }
  },
  { sequelize: db, modelName: "test" }
);

module.exports = Test;
