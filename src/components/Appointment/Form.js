import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  console.log("FORM props", props);
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("")
    setInterviewer("")
  };

  const cancel = () => {
    reset()
    props.onCancel()
  };

  const validate = () => {
    props.onSave(student,interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            placeholder="Please Enter Your Name"
          />
        </form>
        <InterviewerList
          /* your code goes here */
          interviewers={props.interviewers}
          value={interviewer}
          onChange= {setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>
            Cancel
          </Button>
          <Button onClick={validate} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
