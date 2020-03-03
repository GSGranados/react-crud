import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import List from './module/List'; ////Component being rendered
import Nav from './components/Nav/Nav';


function App() {

  return (
      <div className="App">
      <Nav />
        <div  className="container py-4">
          <div className="row">
           <List></List> 
          </div>
        </div>

      </div>
  );
}

export default App;
