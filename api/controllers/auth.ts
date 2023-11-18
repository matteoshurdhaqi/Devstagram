import { Request, Response } from "express";
import prisma from "../prisma_cli";
import bcrypt from 'bcrypt';

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
            },
        });
        res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//LOGIN
export const login = (req: Request, res: Response) => {

};

//LOGOUT
export const logout = (req: Request, res: Response) => {

};