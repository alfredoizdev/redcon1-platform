import { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';


const ProtedtedRouter: FunctionComponent<any> = (props) => {

	const user = false;

	if (!user) {
		return <Redirect to="/" />
	}

	return <Route {...props} />
};


export default ProtedtedRouter