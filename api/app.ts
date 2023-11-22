import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
//jwt

import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import commentRoutes from "./routes/comments";
import likeRoutes from "./routes/likes";

const app = express();
const PORT = 8800;

//middlewares
app.use((req, res, next) =>{
   res.header("Access-Control-Allow-Credentials", "true")
   next();
})
app.use(express.json());
app.use(cors(({ origin: 'http://localhost:3000' })))
app.use(cookieParser());

app.use("/api/user", userRoutes)
app.use("/api/post", postRoutes)
app.use("/api/comment", commentRoutes)
app.use("/api/auth", authRoutes) 
app.use("/api/like", likeRoutes)


app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});


