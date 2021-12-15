import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

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
  const DELETING = "DELETING";
  const EDIT = 'EDIT'
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_DELETE = "ERROR_DELETE"

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    
    props.bookInterview(props.id,interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true))
    
  }

  const deleteAppointment = (id) => {
    if (mode === CONFIRM) {
      transition(DELETING, true)
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true))
    } else {
      transition(CONFIRM);
    }
  }

  const editAppointment = () => {
    transition(EDIT)
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
          onEdit={editAppointment}
        />
      )}
      {mode === CREATE && (
        <Form
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
      {mode === EDIT && 
        <Form
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back} />
      }
      {mode === ERROR_SAVE && (
        <Error 
          message="Could not create appointment"
          onClose={back}/>
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message="Could not delete appointment"
          onClose={back}
          />
      )}
    </article>
  );
}
