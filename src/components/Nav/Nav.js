import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://github.com/GSGranados/react-crud" style={{color:'purple',fontWeight:'bold'}}>GSGranados - React/Expres CRUD</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to ={ {pathname : `/`}} className="nav-link" href="https://github.com/GSGranados/react-crud"> Employee List </Link>
              </li>
            </ul>
            <Link to ={{ pathname : `/form`}} className="btn btn-info "  >Add Employee</Link>
          </div>
        </nav>  
        </>
    );

}

export default Nav;