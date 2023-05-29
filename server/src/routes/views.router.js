import {Router} from 'express'

const router = Router()



router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/profile', (req, res) => {
    res.render('profile')
})

router.get('/pointsProfile', (req, res) => {
    res.render('pointsProfile');
})

router.get('/maps',(req,res)=>{
    res.render('mapLocations')
})

export default router

