import React from "react";

class TeacherInfoCard extends React.Component {
  render() {
    const randStudents = Math.floor(Math.random() * Math.floor(200));
    const {
      country,
      aboutMe,
      title,
      videoUrl,
      hourlyRate,
      trialRate,
      name,
      profilePictureUrl,
      languageSpoken,
      languageTaught,
      totalLessons
    } = this.props.teacher;
    return (
      <div className="TeacherInfoCard teacherCard-box1 TeacherInfoCard-desktop">
        <div className="Video">
          <iframe
            src={videoUrl}
            frameBorder="0"
            width="100%"
            height="422"
            title="video"
            allowFullScreen=""
          ></iframe>
        </div>

        <div className="teacherCard">
          <div className="teacherCard-left">
            <div className="avatar avatar-big avatar-shadow avatar-placeholder">
              <img src={profilePictureUrl} alt="Avatar" />
            </div>
            <div className="Online">
              <span>Online</span>
            </div>
          </div>
          <div className="teacherCard-body">
            <div className="teacherCard-part1">
              <div className="teacherCard-middle">
                <div className="teacherCard-name">
                  {name}
                  {/* <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/am.a5752aba.svg" alt="AM" width="30px" height="16px" className="flag-icon"/> */}
                </div>
                <div className="teacherCard-personalInfo">
                  <div>
                    <span>{this.props.teacher.title}</span>
                  </div>
                  <div>
                    <span>From </span>
                    <span>{country}</span>
                  </div>
                  <div>
                    <span>Living in </span>
                    <span>{country}</span>
                  </div>
                </div>
                <div className="redbar"></div>
              </div>
              <div className="teacherCard-right">
                <div className="teacherCard-right-icon">
                  <span className="Favourite">
                    <img
                      width="24"
                      height="24"
                      src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/favourite.63cfc0be.svg"
                      alt="fav"
                    />
                  </span>
                  <div className="share-teacher-wrapper">
                    <div className="TagMenu TagMenu-desktop TagMenu-rerotate90">
                      <div className="chat-send-attachment-btn">
                        <img
                          src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/shareBtn.5fa47672.svg"
                          alt="shares"
                          width="24"
                          height="24"
                        />
                      </div>
                      <div className="TagMenu-menu TagMenu-menu-bottom-right TagMenu-hidden">
                        <div className="TagMenu-menu-option" data-value="1">
                          Share this teacher
                        </div>
                        <div className="TagMenu-menu-option" data-value="2">
                          Report this teacher
                        </div>
                        <div className="TagMenu-menu-option" data-value="3">
                          Block this teacher
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="teacherCard-right-body">
                  <div className="teacherCard-stars">
                    <div className="stars-box">
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <span className="number">5.0</span>
                    </div>
                  </div>
                  <div>
                    <span>{totalLessons} LESSONS</span>
                  </div>
                  <div>
                    <span>{randStudents} STUDENTS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="teacherCard-part2">
              <div className="teacherCard-teaches">
                <div className="teacherCard-teaches-title">
                  <span>Teaches</span>
                </div>
                <div className="teacherCard-teaches-languages">
                  <div>
                    <span className="language">
                      <span>{languageTaught}</span>
                    </span>
                    <span className="tooltip-container-box" gap="5">
                      <span className="tooltip-container" placement="bottom">
                        <span className="tooltip-reference">
                          <div>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                          </div>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="teacherCard-teaches">
                <div className="teacherCard-teaches-title">
                  <span>Also Speaks</span>
                </div>
                <div className="teacherCard-teaches-languages">
                  <div>
                    <span className="language">
                      <span>{languageSpoken}</span>
                    </span>
                    <span className="tooltip-container-box" gap="5">
                      <span className="tooltip-container" placement="bottom">
                        <span className="tooltip-reference">
                          <div>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                            <span className="level level-color-2 level-color-3"></span>
                          </div>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <button type="button" className="teacherCard-switch-profile-btn btn btn-standard btn-ghost-default">
                            <span>Switch to User Profile</span>
                        </button> */}
          </div>
        </div>
        <div className="aboutMe">
          <div>
            <h2 className="cardTitle">
              <span>About Me</span>
            </h2>
            <div className="aboutMe-introduction">
              {aboutMe}
              {/* <div className="TextOverflow" style={{maxHeight: "63px", lineHeight: "21px"}}>
                                    <span className="TextOverflow-readMore">
                                        <span className="TextOverflow-readMore-ellipsis">&nbsp;...</span>
                                        <span className="TextOverflow-readMore-text">
                                            <span>Read more</span>
                                        </span>
                                    </span>
                                </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherInfoCard;