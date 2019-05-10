import { ADD_ARTICLE } from './actionTypes.js'

export function addArticle(id, name) {
    return { 
        type: ADD_ARTICLE, 
        payload: {
            id,
            name
        } 
    }
};