import React from 'react';

const Master = ({posts, onSelectPost, onAddPost}) => (
    <div>
        <ul>
            {posts.map(x=> <li key={x.id}><button onClick={onSelectPost(x)}>{x.title}</button></li>)}
        </ul>
        <button onClick={onAddPost}>Nuevo+</button>
    </div>
)

export default Master;