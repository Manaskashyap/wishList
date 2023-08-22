import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {
    return axios.get(url);
};

export const createPosts = (newPost) => {
    console.log(newPost);
    return axios.post(url, newPost); 
};

export const updatePost = (id, updatedPost) => {
    return axios.post(`${url}/${id}`, updatedPost); 
};

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`); 
};

export const likePost = (id) => {
    return axios.post(`${url}/${id}/likePost`); 
};