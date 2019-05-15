import { ADD_POST, SELECT_POST } from './actionTypes';

export const addPost = (id, title, content) => ({
    type: ADD_POST,
    post: {
        id,
        title,
        content
    }
});

export const selectPost = (post) => ({
    type: SELECT_POST,
    post
})