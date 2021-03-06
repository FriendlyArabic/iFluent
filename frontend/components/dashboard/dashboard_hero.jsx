import React from "react";

const DashboardHero = props => {
  const { id, name, profilePictureUrl } = props.currentUser;
  const { bookings } = props;
  return (
    <div className="dashboard-hero" style={{ marginBottom: "40px" }}>
      <div className="dashboard-user">
        <section className="dashboard-info">
          <div className="avatar">
            <div className="avatar avatar-medium avatar-placeholder">
              <img src={profilePictureUrl} alt="avatar" />
            </div>
          </div>
          <section className="dashboard-person">
            <div className="dashboard-name dashboard-name-common">
              Welcome, {name}!
            </div>
            <div className="dashboard-id">
              <span>User ID: </span>
              <span>{id}</span>
            </div>
          </section>
        </section>

        <div className="dashboard-lesson">
          <section className="lesson-info">
            <div>{bookings.length}</div>
            <div>
              <span className="upcoming-lessons">Upcoming Lessons</span>
            </div>
          </section>
        </div>
      </div>
      <div className="recommend-teacher-slider-container">
        <a
          href="#/teachers/English"
          type="button"
          className="find-your-teacher-btn"
        >
          <span>DISCOVER TEACHERS</span>
        </a>
      </div>
    </div>
  );
};

export default DashboardHero;
