import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, keyfeatures, imgUrl, link, liveDemo }) => {
  return (
    <Col xs={12} md={8} className="mx-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="img-fluid rounded" />
        <div className="proj-txtx text-left">
          <h4>{title}</h4>
          <p>{description}</p>
          
          {/* Styled Feature List */}
          <ul className="project-features">
            {keyfeatures?.map((feature, index) => (
              <li key={index}>✅ {feature}</li>
            ))}
          </ul>

          {/* Project Links */}
          <div className="project-links mt-3">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mx-1">
                🔗 GitHub Repo
              </a>
            )}
            {liveDemo && (
              <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm mx-1">
                🌍 Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
