import React from 'react';

const About = () => {
  return (
    <div id="about" className="container py-5 d-flex justify-content-center">
      <div className="card shadow-sm">
        <div className="card-header">
          <h3 className="mb-0">About GH Lookup</h3>
        </div>

        <div className="card-body">
          <p className="mb-0">Just another way to look up GitHub users easily.</p>
        </div>

        <div className="card-footer">
          <p className="m-0 text-muted"><i className="fa fa-github"></i> <strong>Version: 1.0.2</strong> by <a href="https://github.com/kennyalmendral/gh-lookup" target="_blank" rel="noreferrer">Kenny Almendral</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;