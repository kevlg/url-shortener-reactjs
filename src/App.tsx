import * as React from 'react';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";

class App extends React.Component<{}, {}> {
	render() {

		return ( 
			<Dashboard />
		);
	}
  
}

export default App;
