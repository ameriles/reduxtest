import { ADD_POST, SELECT_POST } from './actionTypes'

export function addPost(id, title, content) {
    return { 
        type: ADD_POST, 
        post: {
            id,
            title,
            content
        } 
    }
};

export function selectPost(post) {
    return {
        type: SELECT_POST,
        post
    }
}