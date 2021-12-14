import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import useVisualMode from "hooks/useVisualMode";

import "./styles.scss";


export default function Appointment(props) {
  console.log("props for appointment",props)
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const STATUS = "STATUS";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING"

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING)
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id,interview)
    .then(() => transition(SHOW))
    
  }

  const deleteAppointment = (id) => {
    if (mode === CONFIRM) {
      transition(DELETING)
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
    } else {
      transition(CONFIRM);
    }
    
    
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onCancel={deleteAppointment}
        />
      )}
      {mode === CREATE && (
        <Form
        name={props.name}
        value={props.value}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
        />
      )}
      {mode === SAVING && (
        <Status 
          message="Saving"/>
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={back}
          onConfirm={deleteAppointment}
          />
      )}
      {mode === DELETING && (
        <Status 
          message="Deleting"/>
      )}
    </article>
  );
}
