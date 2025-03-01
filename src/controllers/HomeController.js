class HomeController {
  index(req, res) {
    res.json({
      messagem: 'Ola tudo bem',
    });
  }
}

export default new HomeController();
