import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>"I'm a web developer skilled in building modern, responsive, and high-performance web applications.
                <br></br> My expertise includes frontend development with React.js, Next.js, and Tailwind CSS, and
                <br></br> backend development using Node.js, Express.js. I work with databases like
                MongoDB,<br></br> and Firebase, and I have experience deploying applications on Netlify."
                <br></br> Let me know if you want any tweaks! 🚀</p>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Frontend Development" />
                  <h5>Frontend</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Backend Development" />
                  <h5>Backend</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Database Management" />
                  <h5>Databases</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Deployment Services" />
                  <h5>Deployment</h5>
                </div>
              </Carousel>

              <img className="background-image-left" src={colorSharp} alt="" />

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    
      </section>
  )
}
