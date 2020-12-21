import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { token } from "./TestSelector";
import moment from "moment";
moment().format();

export default ({ user, testDate }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/?token=${token}`);
    dispatch(confirmPost(false));
  };

  return (
    <div className="div-container">
      <div className="sub-container">
        <h1>
          <strong>{user.name}</strong>, podes volver a realizar el test el{" "}
          {" " +
            moment(testDate).lang("es").format("LL") +
            " " +
            "a las" +
            " " +
            moment(testDate).lang("es").format("LT")}
          .
        </h1>
        <button
          onClick={(e) => handleClick(e)}
          className="btn-bgd-blue  btn-center"
          type="submit"
        >
          Volver a Home
        </button>
      </div>
    </div>
  );
};
