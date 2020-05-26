import React from "react";
import { buyPastas } from "../../redux";
import { connect } from "react-redux";

const PastasContainer = (props) => {
	return (
		<>
			<h2>number of pastas kg : {props.pastas}</h2>
			<button onClick={props.buyPastas}>buy pastas</button>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		pastas: state.pastas,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyPastas: () => dispatch(buyPastas()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PastasContainer);
