import React, {useState} from "react";
import InterviewListItem from "./InterviewerListItem";

import "styles/InterviewerList.scss";

export default function InterviewerList(props) {
  
  const parsedInterviewers = props.interviewers.map((interviewer) => (
    <InterviewListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  );
}
