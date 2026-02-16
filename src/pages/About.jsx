import TiltedCard from '../components/TiltedCard';

import intellectImg from '../assets/intellect.png';
import creativityImg from '../assets/creativity.png';
import mindImg from '../assets/mind.png';


function About() {
  return (
    <div className="about">
      <section className="intro">
        <h1>About Noia</h1>
        <h2>Did you know?</h2>
        <p>"Eunoia" means beautiful mind, which is what inpsired this app!</p>
      </section>

      <section className="features">
        <div className="feature-grid">
          
          <TiltedCard
            imageSrc={intellectImg}
            altText="inspirational"
            captionText="check out our word of the day!"
            containerHeight="40vh"
            containerWidth="100%"
            imageHeight="40vh"
            imageWidth="100%"
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-text">
                inspire your <b><i>intellect</i></b>
              </p>
            }
          />
          <TiltedCard
            imageSrc={creativityImg}
            altText="enriching"
            captionText="check out our word of the day!"
            containerHeight="40vh"
            containerWidth="100%"
            imageHeight="40vh"
            imageWidth="100%"
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-text">
                unlock your <b><i>creativity</i></b>
              </p>
            }
          />
          <TiltedCard
            imageSrc={mindImg}
            altText="productivity"
            captionText="check out our word of the day!"
            containerHeight="40vh"
            containerWidth="100%"
            imageHeight="40vh"
            imageWidth="100%"
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-text">
                enrich your <b><i>mind</i></b>
              </p>
            }
          />
        </div>
      </section>
    </div>
  );
}

export default About
