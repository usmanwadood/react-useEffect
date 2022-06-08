import './App.css';
import React from 'react';

// using hooks to create a content filter

const App = () => {

  const [content, setContent] = React.useState('posts')
  const [items, setItems] = React.useState('')

  React.useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/${content}`)
      .then(res => res.json())
      .then(json => setItems(JSON.stringify(json)))

  }, [content])
  
  return(
    <div>
      <h1>Content Filter using Buttons</h1>
      <h3>By Usman Wadood</h3>

      <button onClick={() => setContent('posts')}>Posts</button>
      <button onClick={() => setContent('users')}>Users</button>
      <button onClick={() => setContent('comments')}>Comments</button>

      <h3>Showing Content for {content}</h3>
      <pre>{items}</pre>
    </div>
  )
}


export default App;