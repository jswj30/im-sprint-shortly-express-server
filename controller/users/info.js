const { users } = require("../../models");

module.exports = {
  get: (req, res) => {
    if (req.session.userid) {
      users.findOne({ where: { id: req.session.userid } }).then((data) => {
        res.status(200).json(data);
      });
    } else {
      res.status(401).send("need user session");
    }
  },
};