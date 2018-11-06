import React from "react";
import { Link } from "react-router-dom";
// import SavedArticles from "./SavedArticles";
// import HomePage from "./HomePage";

const Navbar = () => (
  <nav>
    <div className='nav-wrapper #bbdefb blue lighten-4'>
      <h1 className='brand-logo right'>NY Times News</h1>
      <ul id='nav-mobile' className='left hide-on-med-and-down'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/articles'>Saved Articles</Link></li>
        <li><Link to='/' className='waves-effect waves-light btn #4fc3f7 light-blue lighten-2'>
          <i className='material-icons'>refresh</i></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

//   <footer class="page-footer #00e676 green accent-3">
// 		<div class="footer-copyright #00e676 green accent-3">
// 			<div class="container">
// 			© NY Times News 2018
// 			<a class="grey-text text-lighten-4 right" href="https://github.com/btburns10">Brendan Burns GitHub</a>
// 			</div>
// 		</div>
//   </footer>