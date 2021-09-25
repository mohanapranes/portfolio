import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
             <h2 className="colorlib-heading animate-box">CERTIFICATIONS</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-link2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>DeepLearning.AI TensorFlow Developer specialization
</b><span></span></h2>
                        <p><a href="https://coursera.org/share/696695b27d0e908ef532e09feae50c3d" target="_blank" rel="noopener noreferrer"><h2>See Credential</h2></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-link2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>IBM machine learning badges</b><span></span></h2>
                        <p><a href="https://www.credly.com/users/mohanapraneswaran-m/badges" target="_blank" rel="noopener noreferrer"><h2>See Credential</h2></a></p>
</div>
                    </div>
                    
                  </article>

                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
