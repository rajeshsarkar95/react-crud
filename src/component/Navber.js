import React from 'react'

export default function Navber() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      Todo list
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home <span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            servise
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/">
            Galary
          </a>
        </li>
      </ul>
    </div>
  </nav>
  
  )
}
