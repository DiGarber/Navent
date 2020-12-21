import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  fetchUserToken,
} from "../store/actionsCreators/userActions";
import {
  getSkill,
  fetchAllSkills,
  generateNaventSkills,
} from "../store/actionsCreators/skillActions";
import {
  fetchTests,
  fetchSkillDate,
} from "../store/actionsCreators/testActions";

export const token = location.search.split("").splice(7).join("");

export default ({ history, location }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.usersReducer);
  const { allSkills, naventSkills } = useSelector(
    (state) => state.skillReducer
  );

  const handleClick = (user, skill) => {
    dispatch(getSkill(skill))
      .then(() => dispatch(fetchSkillDate(user, skill)))
      .then(() => {
        localStorage.setItem("user", JSON.stringify(user));
        history.push(`/test/${user}/${skill}`);
      });
  };

  useEffect(() => {
    dispatch(fetchUser(userData.nombre));
  }, [userData]);

  useEffect(() => {
    dispatch(fetchUserToken(token)).then(() => dispatch(fetchAllSkills()));
  }, []);

  useEffect(() => {
    dispatch(generateNaventSkills(allSkills, userData.skills));
  }, [allSkills]);
  return (
    <div className="test-container">
      <div>
        <h1 className="test-h1">Elija el skill que desea validar:</h1>
      </div>

      <div>
        {/* <h2 className="h1Center">
          Estos son los skills disponibles para test:
        </h2> */}
        <div className="botonesTestSelector">
          {userData.skills ? (
            naventSkills.length ? (
              naventSkills.map((skill) => {
                return (
                  <button
                    key={skill.id}
                    className="skillButton btn-bgd-pink"
                    onClick={() => handleClick(userData.nombre, skill.name)}
                  >
                    {skill.name}
                  </button>
                );
              })
            ) : null
          ) : (
            <p>No hay skills disponibles para vos en este momento.</p>
          )}
        </div>
      </div>
      <div className="botonesTestSelector btn-padding">
        <button
          className="btn-bgd-blue"
          onClick={() =>
            (window.location =
              "https://www.bumeran.com.ar/candidatos/curriculum%22")
          }
        >
          Volver a Bumeran
        </button>
      </div>
    </div>
  );
};
