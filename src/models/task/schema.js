const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const schema = new Schema({
  task: {
    type: String,
    required: true,
  },
  user: {
    type: objectId,
    ref: 'User',
  },
})

module.exports = { schema };