import React from "react";
import PastasContainer from "./components/PastasContainer";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
	return (
		<>
			<Provider store={store}>
				<PastasContainer />
			</Provider>
		</>
	);
};
export default App;
