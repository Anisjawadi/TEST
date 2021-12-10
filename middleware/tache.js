const TacheModel = require('../models/tacheModel')

const tache = async (req, res, next) => {
    const {  description,deadline } = req.body;
    
        const tacheModel = new TacheModel({  description,deadline })
    
        try {
            await tacheModel.save();


        if(tache.id !== 1) 
            return res.status(500).json({msg: "fdfdf."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = tache