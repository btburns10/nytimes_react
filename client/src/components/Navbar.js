import React from "react";

const Navbar = (props) => (

<nav>
  <div className='nav-wrapper #bbdefb blue lighten-4'>
    <a href='/' className='brand-logo right'>NY Times News</a>
    <ul id='nav-mobile' className='left hide-on-med-and-down'>
      <li><a href='/'>Home</a></li>
      <li><a href='/api/articles'>Saved Articles</a></li>
      <li><a href='/' className='waves-effect waves-light btn #4fc3f7 light-blue lighten-2'>
        <i className='material-icons'>refresh</i></a>
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