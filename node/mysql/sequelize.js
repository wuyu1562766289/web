(async () => {
  const Sequelize = require('sequelize');

  // 建立连接
  const sequelize = new Sequelize("test", "root", "wx0510@#", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false
  });

  // 定义模型
  const Fruit = sequelize.define("Fruit", {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      // get() {
      //     const fname = this.getDataValue("name");
      //     const price = this.getDataValue("price");
      //     const stock = this.getDataValue("stock");
      //     return `${fname}(价格：￥${price} 库存：${stock}kg)`;
      // }
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      // 校验
      validate: {
        isFloat: { msg: "价格字段请输入数字" },
        min: { args: [0], msg: "价格字段必须大于0" }
      }
    },
    stock: { type: Sequelize.INTEGER, defaultValue: 0 },
  },
    {
      // 不要时间戳
      timestamps: false,
      getterMethods: {
        amount() {
          return this.getDataValue("stock") + "kg";
        }
      },
      setterMethods: {
        amount(val) {
          const idx = val.indexOf('kg');
          const v = val.slice(0, idx);
          this.setDataValue('stock', v);
        }
      }
    });

  // 添加类方法
  Fruit.classify = function (name) {
    const tropicFruits = ['香蕉', '芒果', '椰子']; // 热带水果
    return tropicFruits.includes(name) ? '热带水果' : '其他水果';
  };
  // 使用类方法
  ['香蕉', '草莓'].forEach(f => console.log(f + '是' + Fruit.classify(f)));

  // 添加实例方法
  Fruit.prototype.totalPrice = function (count) {
    return (this.price * count).toFixed(2);
  };
  // 使用实例方法
  Fruit.findAll().then(fruits => {
    const [f1] = fruits;
    console.log(`买5kg${f1.name}需要￥${f1.totalPrice(5)}`);
  });

  // 同步数据库，force: true则会删除已存在表
  let ret = await Fruit.sync({ force: false });

  // 创建
  ret = await Fruit.create({
    name: '香蕉',
    price: 4.5
  });

  // 查询
  // ret = await Fruit.findAll();
  // console.log('findAll', JSON.stringify(ret), ret[0].amount);

  // Fruit.findAll().then(fruits => {
  //   console.log(JSON.stringify(fruits));
  //   // 修改amount，触发setterMethods
  //   fruits[0].amount = '150kg';
  //   fruits[0].save();
  // });

})()