import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
import TeacherInfoCard from "./teacher_info_card";
import TeacherLessonsCard from "./teacher_lessons_card";
// import TeacherStatisticsCard from "./teacher_statistics_card";
// import TeacherReview from "./teacher_review";

class TeacherMain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LandingNavBarContainer />
        <div className="Teacher-main">
          <TeacherInfoCard teacher={this.props.teacher} />
          <TeacherLessonsCard
            lessons={this.props.lessons}
            teacher={this.props.teacher}
          />
          {/* <TeacherStatisticsCard teacher={this.props.teacher} />
                <TeacherReview teacher={this.props.teacher} /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherMain;
