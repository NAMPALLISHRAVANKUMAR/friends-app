
async function getFriends(req, res) {
    console.log(req.body);
    res.send(req.body)
}
module.exports = { getFriends };
