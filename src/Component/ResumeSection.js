import React from 'react'

const ResumeSection = () => {
  return (
<>
<section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title">My Experience</h2>
            </div>
            <div className="resume-widget">
              <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                <div className="time">2023 - Present</div>
                <h3 className="resume-title">mern stack developer</h3>
                <div className="institute">settings infotech </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="time">2021 - 2022</div>
                <h3 className="resume-title">teaching experience</h3>
                <div className="institute">WeeTech Institute</div>
              </div>
              {/* <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">2020 - 2021</div>
                <h3 className="resume-title">UI Designer</h3>
                <div className="institute">House of Life, Leeds</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
                <div className="time">2018 - 2020</div>
                <h3 className="resume-title">Junior Graphics Designer</h3>
                <div className="institute">Theme Junction, Bursa</div>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 className="section-title">My Education</h2>
            </div>
            <div className="resume-widget">
              {/* <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                <div className="time">2020 - 2023</div>
                <h3 className="resume-title">Programming course</h3>
                <div className="institute">Harverd University</div>
              </div> */}
              <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                <div className="time">2021</div>
                <h3 className="resume-title">higher secondary education</h3>
                <div className="institute">Navchetan Vidhyabhavan</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                <div className="time">2024</div>
                <h3 className="resume-title">Bachelor of Computer Applications (BCA)</h3>
                <div className="institute">Shri Shambhubhai V. Patel College of Computer Science and Business Management</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".8s">
                <div className="time">2024 - Present</div>
                <h3 className="resume-title">Master of Computer Applications(mca)</h3>
                <div className="institute">Parul University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
)
}

export default ResumeSection