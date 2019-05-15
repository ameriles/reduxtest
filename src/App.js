import React from 'react';
import Index from './components/Index'
import Detail from './components/Detail'
import './App.css';

import store from './redux/store';

class App extends React.Component {
  constructor (props) {
    super(props);

    // inicializamos con el store
    this.state = {
      selectedPost: store.getState().selectedPost
    }

    // nos suscribimos al store para escuchar por cambios en nuestro state 
    store.subscribe(() => {
      this.setState({
        selectedPost: store.getState().selectedPost
      })
    })
  }

  render () {
    const {selectedPost} = this.state; 
    return (
      <div className="container">
        <div className="half">
          <Index />
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
