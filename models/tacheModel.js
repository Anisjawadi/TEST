const mongoose = require('mongoose')

const tacheSchema = new mongoose.Schema({
    
   
    description: String,
    deadline : Date, 
  
       
}

)

module.exports = mongoose.model('taches', tacheSchema);