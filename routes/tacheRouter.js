const router = require('express').Router()
const tachesCtrl = require('../controllers/tachesCtrl')
const auth = require('../middleware/auth')
router.post('/', tachesCtrl.addTaches);
router.get('/', tachesCtrl.getTaches);
router.patch('/updateTache/:id',  tachesCtrl.updateTache);
router.delete('/delete/:id', tachesCtrl.deleteTache);




module.exports = router



