import express from "express";

const router = express.Router();
const chatdata = require('./chatdata');

router.get('/', function(req, res, next) {
  console.log("Get users list");
  let users = chatdata.reduce((result, chat, _index) => {
    let contact = (chat.requested_by == 'mike@example.com' && chat.transcript && chat.transcript.filter(item => item.id).length > 0) ? chat.transcript.filter(item => item.id)[0].id : null;
    if (contact && contact != 'unknown' && result.indexOf(contact) < 0) {
      result.push(contact);
    }
    return result;
  }, []);
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  let users = chatdata.reduce((result, chat, index) => {
    if (result.indexOf(chat.requested_by) < 0) {
      result.push(chat.requested_by);
    }
    return result;
  }, []).filter(user => user===id);
  if (users.length > 0) {
    res.json(users[0])
  }else {
    res.status(400).send('No user with such id');
  }
});

router.post('/', function(req, res, next) {
  let userObj = req.body;
});

router.put('/:id', function(req, res, next) {
  const { id } = req.params;
});

router.delete('/:id', function(req, res, next) {
  const { id } = req.params;
});

export default router;
