import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: [] });
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log("inside actions", post);
    try {
        const response = await api.createPosts(post);
        console.log("inside try", response);
        dispatch({ type: 'CREATE', payload: response.data });
    } catch(error) {
        console.log(error.message);
    }
}