import React from 'react';
import store from '../redux/store';
import { selectPost, addPost } from '../modules/posts/actions';

class Index extends React.Component {
    constructor () {
        super();
        
        this.state = {
            posts: store.getState().posts
        }

        store.subscribe(() => {
            this.setState({
                posts: store.getState().posts
            });
        });
    }

    onAddPost = (id) => () => {
        const title = `Post Numero ${id}`;
        const content = `Este es un post automático. #${id}`;
        store.dispatch(addPost(id, title, content));
    }

    onSelectPost = (post) => () => {
        store.dispatch(selectPost(post));
    }

    render () {
        const {posts} = this.state;
        return (
            <div>
                <ul>
                    {posts.map(x=> <li key={x.id}><button onClick={this.onSelectPost(x)}>{x.title}</button></li>)}
                </ul>
                <button onClick={this.onAddPost(posts.length + 1)}>Nuevo +</button>
            </div>
        )
    }
} 

export default Index;