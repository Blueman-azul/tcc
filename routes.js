const express = require("express")
const routes = express.Router()

routes.get('/inicial', (req, res) => {
    res.render("admin/inicial");
})

module.exports = routes;