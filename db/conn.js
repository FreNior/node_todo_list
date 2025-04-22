const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
} catch (error) {
  console.log("Erro ao conectar ao banco de dados: ", error);
}

module.exports = sequelize;
