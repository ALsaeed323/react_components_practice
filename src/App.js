import React, { useState,useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    console.log('edien');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json =>setItems(json))
  },[resourceType]);
  return (
    <div className="App">
     <button onClick={()=>setResourceType('posts')}>Posts</button>
     <button onClick={()=>setResourceType('users')}>Users</button>
     <button onClick={()=>setResourceType('comments')}>Comments</button>
    
    
     <div>
     <button onClick={()=>setResourceType('')}>Reset</button>
     <h1>{resourceType}</h1>
     </div>
     {items.map(item=>{
      return <pre>{JSON.stringify(item)}</pre>
    })}
    </div>
   
  );
}

export default App;
