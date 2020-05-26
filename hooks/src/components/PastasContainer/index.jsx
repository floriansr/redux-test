import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { buyPastas } from "../../redux";

const PastasContainer = () => {
	const pastas = useSelector(state => state.pastas);
	const dispatch = useDispatch();


	return (
		<>
			<h2>number of pastas kg : {pastas}</h2>
			<button onClick={() => dispatch(buyPastas())}>buy pastas</button>
		</>
	);
};

export default PastasContainer