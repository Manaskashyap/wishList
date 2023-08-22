import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import express from 'express'; 

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/:id/likePost', likePost);

export default router;
