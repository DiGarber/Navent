import * as React from "react";
import {Fragment} from "react"


export default ({ arrayFinal, handleChange }) => {
    return (
        <Fragment>
            {arrayFinal[2] &&
                arrayFinal.map((ans) => {
                    return (
                        <label className="answer" key={ans.id}>
                            <input
                                name="answer"
                                value={ans.value}
                                id={ans.id}
                                type="radio"
                                onChange={(e) => handleChange(e.target)}
                            />
                            {ans.answer}
                        </label>
                    );
                })}
        </Fragment>
    );
};







/*
Token => le pegas a una api => {usuario, skill}

*/ 