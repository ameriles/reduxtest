import React from 'react';
import { connect } from 'react-redux';
import Index from './components/Index'
import Detail from './components/Detail'
import './App.css';

const App = ({selectedPost}) => (
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

const mapStateToProps = state => ({
  selectedPost: state.selectedPost
})

export default connect(mapStateToProps)(App);
