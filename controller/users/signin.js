const { users } = require("../../models");
const { use } = require("chai");

module.exports = {
  post: async (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    // 1. 회원정보를 데이터베이스에서 확인하세요.
    let userInfo = await users.findOne({
      attributes: ["id"],
      where: { email: req.body.email, password: req.body.password },
    });
    // 2. 회원이 아닐 경우
    if (!userInfo) {
      res.status(404).send("unvalid user");
    } else {
      // 3. 회원일 경우, 회원의 id를 session에 담아주도록 구현하세요.
      // res.setHeader("Set-Cookie", `session_id=${userInfo}`);
      req.session.userid = userInfo.id;
      res.status(200).json(userInfo);
    }
  },
};

