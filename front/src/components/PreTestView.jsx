import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTest } from "../store/actionsCreators/testActions";
import { fetchUser } from "../store/actionsCreators/userActions";
import { getSkill } from "../store/actionsCreators/skillActions";
import { token } from "./TestSelector";
import moment from "moment";
import WarningTest from "../components/WarningTest";
moment().format();

export default ({ history, match }) => {
  const dispatch = useDispatch();
  //REDUX STATE
  const { selectedSkill } = useSelector((state) => state.skillReducer);
  const { user, userData } = useSelector((state) => state.usersReducer);
  const { testDate } = useSelector((state) => state.testReducer);
  const { singleTest } = useSelector((state) => state.testReducer);

  const handleClose = () => {
    history.push(`/tests/${selectedSkill.name}`);
  };

  useEffect(() => {
    dispatch(fetchTest(user.id, selectedSkill.id));
  }, [selectedSkill]);

  useEffect(() => {
    let id = localStorage.getItem("user");
    localStorage.getItem("testDate");
    let idB = JSON.parse(id);
    dispatch(fetchUser(idB)).then(() => {
      dispatch(getSkill(match.params.skillid));
    });
    dispatch(fetchUser(userData.nombre));
  }, []);

  return (
    <div className="modalPre">
      {user ? (
        moment(testDate).diff(moment(), "seconds") > 0 ? (
          <WarningTest user={user} skill={selectedSkill} testDate={testDate} />
        ) : (
          <div className="divModalPre">
            <div>
              <h1>Bienvenid@ {user.name} </h1>
              {singleTest.availableAt ? (
                <div className="alert-cont">
                  <h2 className="alert">
                    Tu ultima nota fue {singleTest.status}.{<br></br>}
                    Recorda que siempre guardaremos el resultado del ultimo
                    test.
                  </h2>
                </div>
              ) : null}
              <h3>
                Te encuentras a un paso de validar tus habilidades. De esta
                forma, demuestras tus conocimientos y aumentas el interés de tus
                futuros empleadores.
              </h3>
              <ul className="listado">
                <li>
                  {" "}
                  <i className="fa fa-check-square-o" aria-hidden="true">
                    {" "}
                  </i>
                  El test consiste en 10 preguntas multiple choice.
                </li>
                <li>
                  <i className="fa fa-refresh" aria-hidden="true"></i>
                  Si realizas el mismo test varias veces, se guardará únicamente
                  tu último resultado.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-clock-o" aria-hidden="true"></i>Contarás
                  con 30 segundos para responder cada pregunta.
                </li>
                <li>
                  <i className="fa fa-times-circle-o" aria-hidden="true"></i>En
                  caso de no poder responder alguna de las preguntas
                  correctamente o no cumplir con el tiempo estipulado, la
                  validación será rechazada y podrás volver a intentarlo en 7
                  dias.
                </li>
              </ul>
              <div className="footer margin-btn">
                <button
                  className="btn-bgd-blue"
                  onClick={() => history.push(`/?token=${token}`)}
                >
                  Volver a Home
                </button>

                <button className="btn-bgd-pink" onClick={handleClose}>
                  Iniciar
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        <button
          className="btn-bgd-blue"
          onClick={() =>
            (window.location =
              "https://www.bumeran.com.ar/candidatos/curriculum")
          }
        >
          Volver a Home
        </button>
      )}
    </div>
  );
};
