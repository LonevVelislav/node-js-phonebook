const phonebookController = require("./controller/phonebookController");
module.exports = (app) => {
  app.get("/", phonebookController.index);
  app.post(
    "/add",
    phonebookController.protect,
    phonebookController.addPhonebookPost
  );
};
