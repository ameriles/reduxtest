import React from 'react';
import { connect } from 'react-redux';
import { selectPost, addPost } from '../modules/posts/actions';

const Index = ({posts, onSelectPost, onAddPost}) => (
    <div>
        <ul>
            {posts.map(x=> <li key={x.id}><button onClick={onSelectPost(x)}>{x.title}</button></li>)}
        </ul>
        <button onClick={onAddPost(posts.length + 1)}>Nuevo +</button>
    </div>
)

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    onSelectPost(post) {
        return () => dispatch(selectPost(post));
    },
    onAddPost(id) {
        const title = `Post Numero ${id}`;
        const content = `Este es un post automático. #${id}`;
        return () => dispatch(addPost(id, title, content));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);