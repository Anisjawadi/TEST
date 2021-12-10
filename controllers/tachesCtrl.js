const TacheModel = require('../models/tacheModel')

const tachesCtrl = {
    addTaches : async (req, res) => {
        
       
        const {description,  deadline} = req.body;
       
        const tacheModel = new TacheModel({ description, deadline })
    
        try {
           
            await tacheModel.save();
    
            res.status(201).json(tacheModel );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
  },
 
getTaches : async (req, res) => { 
    try {
        const tachesModel = await TacheModel.find();
              
        res.json(tachesModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
},
updateTache: async (req, res) => {
    try {
     const {description,time} = req.body
   
     await TacheModel.findOneAndReplace({_id: req.body._id}, {
          description,deadline
     })
     
     res.json({msg: "update Su!"})
     
    }   catch (err) {
    return res.status(500).json({msg: err.message})
}
   },
   deleteTache: async (req, res) => {
    try {
     
     await TacheModel.findByIdAndDelete(req.params.id)
         res.json({msg: "Deleted Success!"})
    
    }   catch (err) {
    return res.status(500).json({msg: err.message})
  }
},

}
module.exports = tachesCtrl