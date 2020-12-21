import React, {useState, useEffect, Fragment} from "react"
import {useSelector, useDispatch} from "react-redux"
import PostTestView from "../components/PostTestView"
import PreTestView from "../components/PreTestView"
import Test from "../components/Test"


export default ({history}) => {


const { selectedSkill } = useSelector((state) => state.skillReducer)
const { userSkill } = useSelector((state) => state.skillReducer);

const dispatch = useDispatch()

    return (
        <Fragment>
        <Test selectedSkill={selectedSkill} history={history}/>
        </Fragment>
    )
}

