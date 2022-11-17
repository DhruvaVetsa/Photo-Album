let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/photo-album')
.then(function(){
  console.log('Database connected')
})
.catch(function(e){
console.log(e)
})

let userSchema = mongoose.Schema({
  name: String,
  avatar : String
})

module.exports = mongoose.model('photo', userSchema)