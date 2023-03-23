const phonebook = require("../phonebook");
const Contact = require("../models/Contact");

module.exports = {
  index: (req, res) => {
    res.render("main", {
      layout: "index",
      contacts: phonebook.getPhonebook(),
    });
  },

  addPhonebookPost: (req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    if (number.startsWith("+359")) {
      number = "+359" + ` ` + number.replace("+359", "");
    } else if (number.startsWith("359")) {
      number = "+359" + ` ` + number.replace("359", "");
    } else {
      number = "+359" + ` ` + number.replace("0", "");
    }
    if (
      !phonebook
        .getPhonebook()
        .some((el) => el.name === name || el.number === number)
    ) {
      let contact = new Contact(name, number);
      phonebook.addContact(contact);
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  },

  protect: (req, res, next) => {
    let regex = /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/;
    let nameReg = /[A-Za-z]+/;
    if (regex.test(req.body.number) && nameReg.test(req.body.name)) {
      return next();
    } else {
      res.redirect("/");
    }
  },
};
