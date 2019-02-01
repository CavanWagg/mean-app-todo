var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ToDoSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  status: String
});
// allows future pagination to be much easier
ToDoSchema.plugin(mongoosePaginate);
const ToDo = mongoose.model('Todo', ToDoSchema);

module.exports = ToDo;
