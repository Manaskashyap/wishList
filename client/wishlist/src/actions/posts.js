import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const response = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: response.data });
    } catch(error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log("inside actions", post);
    try {
        const response = await api.createPosts(post);
        console.log("inside try", response);
        dispatch({ type: 'CREATE', payload: response.data });
    } catch(error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    console.log("inside actions", post);
    try {
        const response = await api.updatePost(id, post);
        console.log("inside try", response);
        dispatch({ type: 'UPDATE', payload: response.data });
    } catch(error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    console.log("inside actions", id);
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch(error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    console.log("inside actions", id);
    try {
        const response = await api.likePost(id);
        dispatch({ type: 'LIKE', payload: response.data });
    } catch(error) {
        console.log(error);
    }
}
