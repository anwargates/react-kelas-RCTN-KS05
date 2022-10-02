import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Muhammad Anwar</h4>
              <p>
                <em>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </em>
              </p>
              <ul>
                <li>Kebayoran Baru, DKI Jakarta</li>
                <li>0858-9271-6319</li>
                <li>manwarf8@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Information Systems</h4>
              <h5>2019 - Now</h5>
              <p>
                <em>Universitas Nasional, Jakarta</em>
              </p>
              <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Backend Developer</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>Codivent.com, Jakarta</em>
              </p>
              <ul>
                <li>Developed Web Applications using Laravel framework</li>
                <li>Worked as a team of 5 people in a tight schedule. </li>
                <li>
                  Managed database requirements of the apps we built to met the
                  business requirements.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Computer Lab Assistant</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>
                  Network Data Communications Lab, Universitas Nasional, Jakarta
                </em>
              </p>
              <ul>
                <li>
                  Developed profile web page of Network Data Communications Lab.
                </li>
                <li>Lead a team of 5 people.</li>
                <li>
                  Maintained a number of computer workstations for the duration
                  of academic year.
                </li>
                <li>Assisted Lecturers in teaching activities.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Administrative Officer</h4>
              <h5>2022 - Now</h5>
              <p>
                <em>LSP Informatika, Jakarta</em>
              </p>
              <ul>
                <li>
                  Organizing professional certification in Informatics Field.
                </li>
                <li>
                  Maintaining records of participants and assessors througout
                  the event.
                </li>
                <li>Overseeing multiple events in a tight timeframe.</li>
                <li>
                  Coordinating schedules, arranging meetings, distributing memos
                  and reports and ensuring that everyone is kept current of
                  necessary event news and information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
