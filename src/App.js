import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import Form from './module/Form';
import List from './module/List';
//import Edit from './module/Edit';

function App() {

  return (
      <div className="App">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://github.com/GSGranados/react-crud" style={{color:'purple',fontWeight:'bold'}}>GSGranados - React/Expres CRUD</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="https://github.com/GSGranados/react-crud"> Employee List </a>
              </li>
            </ul>
            <a className="btn btn-info "  href="/form">Add Employee</a>
          </div>
        </nav>

        <div  className="container py-4">
          <div className="row">
           <List></List>
          </div>
        </div>

      </div>
  );
}

export default App;