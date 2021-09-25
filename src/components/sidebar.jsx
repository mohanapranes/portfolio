import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
  const styleObj = {
  	fontSize:22
  }
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about1.jpg)'}} />
              <h4 id="colorlib-logo" style={ styleObj }><a href="index.html">MOAHANAPRANESWARAN M</a></h4>
              <span className="email"><i className="icon-mail"></i> mohanapraneswaran@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#Projetcs" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#Blog" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Certifications</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/mohanapranes/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/mohanapranes" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://leetcode.com/i_am_mpw/" target="_blank" rel="noopener noreferrer"><i className="icon-code"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  
              </small></p>
              <p><small>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
