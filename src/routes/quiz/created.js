const res = require("express/lib/response")

module.exports = async (req, res) => {
    res.render('quiz-success', {slug: req.params.slug})
}