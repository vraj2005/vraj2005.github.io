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
                <h4>Full Stack Web Development Intern</h4>
                <h5>TitansLab Infosoft</h5>
              </div>
              <h3>Nov 2024 - Nov 2025</h3>
            </div>
            <p>
              Worked on real-world MERN/MEAN applications, contributing to both
              frontend and backend development. Built responsive UIs, optimized
              APIs, and collaborated on production-level features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Project - Road Safety</h4>
                <h5>Academic / Ongoing</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Building a YOLO-based object detection system for road potholes and
              traffic symbols. Focused on dataset preparation, model training,
              and evaluation for real-world usage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Projects</h4>
                <h5>Client + Academic</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Delivered client projects in MERN and Next.js, including e-commerce
              and restaurant management systems with authentication, dynamic UI,
              and workflow automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
