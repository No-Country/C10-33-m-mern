import { Router } from "express";
import { usersModel } from '../models/users.model.js'
import { getAllUsers, updateUser, createUser, loginUser, deleteUser, getUser, logoutUser } from '../services/users.service.js';



const router = Router()


router.post('/register', createUser);


router.post('/login', loginUser);

router.get('/api/private', (req, res) => {
    res.json({ message: `Hello ${req.auth.payload.sub}!` });
  })

router.get('/allUsers', getAllUsers);


router.get('/:id/profile', getUser)


router.get('/:id/logout', logoutUser)


router.put('/:id/updateUser', updateUser);


router.delete('/:id/deleteUser', deleteUser);


export default router


