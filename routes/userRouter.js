const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/register', userCtrl.register)



router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.get('/infor', auth, userCtrl.getUserInfor)

router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor)

router.get('/logout', userCtrl.logout)

router.post('/reset', auth, userCtrl.resetPassword)

router.patch('/update', auth, userCtrl.updateUser)

router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole)



module.exports = router