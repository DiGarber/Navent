import * as React from "react";
import { Fragment } from "react";

export default () => {
    return (
        <Fragment>
            <div className="loader">
                <p className="loader-text">
                    Estamos procesando tus respuestas...
                </p>
                <img
                    className="loader-img"
                    src={
                        "https://imgbum-rebranding.jobscdn.com/postulantes-assets/skins/bumeran/postulantes-desktop/img/balls.svg"
                    }
                ></img>
            </div>
        </Fragment>
    );
};





