import React from "react";
import classNames from "classnames";

import "styles/InterviewerListItem.scss";

export default function InterviewListItem(props) {
  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li onClick={props.setInterviewer} className={interviewClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
