import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GSoC 2026 Student</h4>
                <h5>InVesalius</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Selected for Google Summer of Code 2026 to work on InVesalius,
              focusing on medical imaging software and cross-platform GUI
              enhancements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>CHT Core & InVesalius</h5>
              </div>
              <h3>2024–PRESENT</h3>
            </div>
            <p>
              Active contributor to global open-source projects. 19+ PRs in
              CHT Core (Community Health Toolkit) and 40+ PRs in InVesalius,
              improving stability, UI/UX, and core functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3rd Year Student</h4>
                <h5>Polaris School of Technology</h5>
              </div>
              <h3>2023–PRESENT</h3>
            </div>
            <p>
              Pursuing a degree in Computer Science, focusing on advanced
              software engineering practices and full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Data Science</h4>
                <h5>IIT Madras</h5>
              </div>
              <h3>2023–PRESENT</h3>
            </div>
            <p>
              Concurrently pursuing a Bachelor of Science in Data Science and
              Applications, building a strong foundation in machine learning
               and data analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
