import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
		<div>
     
        <section className="colorlib-about"data-section="projects">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                               <div className="desc">
                    <h3>Omr Reader <a href="https://github.com/mohanapranes/Omr_reader" ><i className="     icon-link2" /></a></h3>

                    <p>Omr reader Project helps in analysing omr sheet with images and  generates output in the form of Excel sheet . this build using FastApi and Ml-Model is build with OpenCV </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                               <div className="desc">
                    <h3>Flower-lens <a href="https://github.com/mohanapranes/flower-lens" ><i className="     icon-link2" /></a></h3>
                    <p>It is a web application that is used to give details of the flower by using the image. It was developed using image classification and web scraping.
</p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                               <div className="desc">
                    <h3> Emotion detection in audio <a href="" ><i className="     icon-link2" /></a></h3>
                    <p>It is an NLP model. It will detect emotions from audio. It was developed using text classification and speech recognition.</p>
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
