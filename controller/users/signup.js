const { users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    // 1. req 정보를 가져온다.
    // 2. 데이터베이스에 저장한다.

    // email 중복이 있으면 409를 보낸다.
    // 같은 email이 존재하는지를 찾아내는 방법??
    const project = await users.findOne({ where: { email: req.body.email } });
    if (project) {
      res.status(409).send("Already exists user");
    } else {
      let info = await users.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });
      res.status(200).json(info); // 왜 info를 send해야 하는가? 개인정보 날라가게....
    }
  },
};
