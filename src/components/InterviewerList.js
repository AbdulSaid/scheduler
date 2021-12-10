import React, {useState} from "react";
import InterviewListItem from "./InterviewerListItem";

import "styles/InterviewerList.scss";

export default function InterviewerList(props) {
  console.log('props interviewerList',props)
  // const interviewers = [
  //   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  //   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  //   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  //   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  //   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
  // ];

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
