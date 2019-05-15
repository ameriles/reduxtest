import React from 'react';
import Index from './components/Index'
import Detail from './components/Detail'
import './App.css';

const data = [{
  id: 1,
  title: 'Un Post Simple',
  content: 'Un post simple bien cortito'
}, {
  id: 2,
  title: 'Un Post Mas Largo',
  content: 'Un post simple pero un poco mas largo. No tanto, pero mas largo'
}, {
  id: 3,
  title: 'El ultimo post',
  content: 'No hay mas posts después de este'
}]

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: data,
      selectedPost: null
    }
  }

  onSelectPost = (post) => () => {
    this.setState({
      selectedPost: post
    })
  }

  onAddPost = () => {
    const posts = this.state.posts;
    const newId = posts.length + 1
    posts.push({
      id: newId,
      title: 'Post Numero ' + newId,
      content: 'Este es un post automático. #' + newId
    })
    this.setState({
      posts
    })
  }

  render () {
    const {posts, selectedPost} = this.state; 
    return (
      <div className="container">
        <div className="half">
          <Index posts={posts} onSelectPost={this.onSelectPost} onAddPost={this.onAddPost} />
        </div>
        <div className="half">
          {
            selectedPost
              ? <Detail title={selectedPost.title} content={selectedPost.content} />
              : null
          }
          
        </div>
      </div>
    );
  }
  
}

export default App;
