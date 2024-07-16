import React from 'react';


const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              <SkillItem
                icon="assets/img/icons/nodejs.svg"
                percentage="90%"
                skillName="NodeJs"
                delay=".3s"
                // style={{width:"50%"}}
              />
              <SkillItem
                icon="assets/img/icons/mongodb.svg"
                percentage="80%"
                skillName="MongoDb"
                delay=".4s"
              />
              {/* <SkillItem
                icon="assets/img/icons/xd.svg"
                percentage="85%"
                skillName="XD"
                delay=".5s"
              />
              <SkillItem
                icon="assets/img/icons/wp.svg"
                percentage="99%"
                skillName="WordPress"
                delay=".6s"
              /> */}
              <SkillItem
                icon="assets/img/icons/react.svg"
                percentage="85%"
                skillName="React"
                delay=".7s"
              />
              <SkillItem
                icon="assets/img/icons/js.svg"
                percentage="93%"
                skillName="JavaScript"
                delay=".8s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, percentage, skillName, delay }) => {
  return (
    <div className={`skill-item wow fadeInUp`} data-wow-delay={delay}>
      <div className="skill-inner">
        <div className="icon-box">
          <img src={icon} alt={skillName} />
        </div>
        <div className="number">{percentage}</div>
      </div>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillsSection;
