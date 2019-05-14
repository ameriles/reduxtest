import React from 'react';

const Master = ({posts, onSelectPost}) => (
    <ul>
        {posts.map(x=> <li key={x.id}><button onClick={onSelectPost(x)}>{x.title}</button></li>)}
    </ul>
)

export default Master;