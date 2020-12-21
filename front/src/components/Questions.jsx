import * as React from "react";
import {Fragment} from "react"

export default ({testQuestions, puntero}) => {
  return (
    <Fragment>
        <h1 className="test-h1">
                {testQuestions[puntero]
                  ? testQuestions[puntero].question
                  : null}
              </h1>
    </Fragment>
  );
};
