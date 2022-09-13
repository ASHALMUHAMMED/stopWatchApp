import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  return (
    <div className="button">
      {props.status === 0 ? (
        <button onClick={props.start} className="start-button btn btn-success">
          START
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <button onClick={props.stop} className="stop-button btn btn-danger">
          STOP
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <button onClick={props.reset} className="reset-button btn btn-warning">
          RESET
        </button>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
            <button onClick={props.resume} className="resume-button btn btn-warning">
              RESUME
            </button>
            <button onClick={props.reset} className="reset-button btn btn-primary">
              RESET
            </button>
        </div>
      ) : (
        ""
      )}

    </div>
  );
};

export default ButtonComponent;
