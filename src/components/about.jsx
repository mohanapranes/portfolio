import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <p>  Hey guys it's mohanapranes here, I am currently a studying B.tech Information technology in Bannari Amman Institute of Technology.</p>
                    <p>I'm passionate about programming and quite curious to learn different technologies. Now I am looking for an opportunity to devlope my skills with good team. </p>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Here Are Some Of My Skills</h2>
            </div>
            </div>
            <div className="col row-pt-md">
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Languages</h3>
                    <p>C | C++ | Python | Rust | JavaScript | SQL</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-plug" />
                </span>
                <div className="desc">
                    <h3>Frameworks</h3>
                    <p>React | Flask | FastAPI</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-git" />
                </span>
                <div className="desc">
                    <h3>Tools</h3>
                    <p>Git | Linux | MySql </p>
                </div>
                </div>
             
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
