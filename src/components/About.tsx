import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a 3rd-year student at Polaris School of Technology,
          concurrently pursuing a BS in Data Science from IIT Madras. I am a
          passionate open-source contributor, recently selected for GSoC 2026
          with InVesalius. With over 19+ PRs in CHT Core and 40+ PRs in
          InVesalius, I thrive at the intersection of full-stack development,
          medical imaging, and data science. For more detailed information
          about my journey, feel free to check out my resume.
        </p>
      </div>
    </div>
  );
};

export default About;
