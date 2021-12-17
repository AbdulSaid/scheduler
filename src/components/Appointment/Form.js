import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  console.log("FORM props", props);
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent("")
    setInterviewer(null)
  };

  const cancel = () => {
    reset()
    props.onCancel()
  };

  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(student,interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off"
        >
          <input
            className="appointment__create-input text--semi-bold"
            data-testid="student-name-input"
            name={props.name}
            type="text"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            placeholder="Enter Student Name"
            
          />
          <section className="appointment__validation">{error}</section>
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
          <Button onSubmit={event => event.preventDefault()} onClick={validate} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
