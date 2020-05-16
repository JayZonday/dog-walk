import React, { Component } from 'react';
import './index.css';

class Introduction extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
      .then(res=> res.json())
      .then(data => console.log(data))
    }

  render(){
    const postItems = this.state.posts.map(post =>(
      <div key={post.id}>
        <h3> {post.dogname}</h3>
      </div>
    ))
    return (
      <div>
        <div className='intro-box'>
          <div className='intro-pic-box'>
            <img className='intro-pic' src='https://i.ibb.co/GTpQvDH/Dallas.jpg'/>
            <img className='intro-pic' src='https://i.ibb.co/GTpQvDH/Dallas.jpg'/>
          </div>
          <h4 className='intro'> Jay's Paw Pawtrol offers reliable care and entertainment for your pup while
          you're on the run! Late for work or know you're going to run late for your dog's daily walk - Schedule a 30 minute
          walk and you'll be assured your dog gets their daily excercise - a cool drink of water and a timely meal if instructed.
          We also provide other services such as drop-in visits for Pup Parents that are going to be away for the day and don't want to leave
          a pup all alone!
          </h4>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
