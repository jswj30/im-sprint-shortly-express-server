module.exports = {
  post: (req, res) => {
    /* TODO : 유저가 로그아웃했을 때, session 정보를 없애고, '/'로 redirect할 수 있도록 구현하세요.
     * hints: express session을 사용하세요. */
    req.session.destroy();
    res.redirect("/");
    res.end();
  },
}; // async는 콜백으로 data를 내려주기 위한 방식인데, 위 코드는 내려줄 데이터가 없다.