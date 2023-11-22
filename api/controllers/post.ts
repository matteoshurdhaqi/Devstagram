import { Request, Response } from "express";
import prisma from "../prisma_cli"
import moment from "moment";

export const getPosts = async (req : Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profileImg: true,
            follower:{
              select: {
                followerUserId: true,
                follower: {
                  select:{
                    id: true,
                    name: true,
                    profileImg: true,
                  }
                }
              }
            }
            
          },
          
        },
      },
      orderBy: {
        createdAt: 'desc', // Ordina discendentemente in base al campo createdAt
      },
    });
    res.json(posts);
  } catch (error) {
    console.error('Errore durante il recupero dei post:', error);
    res.status(500).json({ error: 'Errore durante il recupero dei post.' });
  }
};

export const addPost = async (req: Request, res: Response) => {

  const { userId, description, img, tags} = req.body;
  

  try {
    const newPost = await prisma.post.create({
      data: {
        userId,
        description,
        img,
        tags,

      },
    });

    res.json(newPost);
  } catch (error) {
    console.error('Errore durante l\'aggiunta del post:', error);
    res.status(500).json({ error: 'Errore durante l\'aggiunta del post.' });
  }
};

