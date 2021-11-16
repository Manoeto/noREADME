import React from 'react';



changeHandler = event => {
  event.persist();

  let value = event.target.value;

  this.setState(prevState => ({
    item: { ...prevState.item,  [event.target.name]: value }
  }))
};
function App() {

  


  return (
    
    <div className="App">
      <h1>Update Data from Form Input</h1>
      <input type="text" name="name" placeholder="Name" value={this.state.item.name} onChange={this.changeHandler} />
    </div>

  )
  }

  export default App;