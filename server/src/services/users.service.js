import { usersModel } from '../models/users.model.js';
import { comparePasswords } from '../utils.js';


export const createUser = async (req, res, next) => {
    const { firstName, lastName, email } = req.body //destructuryng
    const user = new usersModel({
        firstName, lastName, email
    });
   
    return res.status(200).json('usuario creado con éxito');
}



export const getAllUsers = async (req, res) => {
    try {
        let users = await usersModel.find();
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await usersModel.find({ email })
    if (user.lenght !== 0) {
        // comparar password
        const isPassword = await comparePasswords(password, user[0].password)
        if (isPassword) {
            for (const key in req.body) {
                req.session[key] = req.body[key]
            }
            req.session.logged = true
            return res.redirect('/views/profile')
        }
    }
    return res.redirect('/views/failLogin')
}

export const logoutUser = async (req, res) => {
    req.session.destroy((error) => {
        if (error) console.log(error)
        else res.redirect('/views/login')
    })
}

export const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let updateUser = await usersModel.findOneAndUpdate({ _id: id }, req.body)
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;

        let userDelete = await usersModel.findOneAndDelete({ _id: id })
        if (userDelete) {
            res.status(204).json({ message: "User delete successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        let { id } = req.params;

        let user = await usersModel.findOne({ _id: id })
        if (user) {
            res.status(204).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}