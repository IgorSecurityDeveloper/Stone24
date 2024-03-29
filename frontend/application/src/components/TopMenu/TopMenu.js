import React from 'react';
import { useState } from 'react';
import CreateTicket from '../../pages/CreateTicket/CreateTicket';
import '../TopMenu/TopMenu.css';

function TopMenu() {
  
  const [showTicket, setShowTicket] = useState(false);

  function createTicket() {
    setShowTicket(true);
  }
  function closeTicket() {
    setShowTicket(false);
  }

  return (
    <>
      <nav className="topMenuPosition navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => closeTicket()}>Stone24</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => createTicket()}>Incident</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Request</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">knowledge</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Analytics 
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Service Catalog</a></li>
                  <li><a className="dropdown-item" href="#">Change</a></li>
                  <li><a className="dropdown-item" href="#">Problem</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Reports</a></li>
                  <li><a className="dropdown-item" href="#">Performance Analytics</a></li>
                  <li><a className="dropdown-item disabled" href="#">Administration </a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">CMDB</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {showTicket && <CreateTicket />}
    </>

  );
}

export default TopMenu;
