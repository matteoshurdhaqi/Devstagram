import { Request, Response } from "express";
import prisma from "../prisma_cli";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

//REGISTER
export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    //CHECK USER IF EXISTS
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }
    // IF NOT HASH/CREATE
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        // Crea un nuovo utente
        const newUser = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                profileImg: req.body.profileImg,
            },
        });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//LOGIN
export const login = async (req: Request, res: Response) => {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const checkPassword = bcrypt.compareSync(req.body.password, user.password)
    if (!checkPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({id: user.id}, "secretkey");

    const {password, ...others} = user;

    res.cookie("accessToken", token, {
        httpOnly: true,
    })
    .status(200).send(others);
};

//LOGOUT
export const logout = (req: Request, res: Response) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).send("User logged out")
};