import * as React from 'react';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={(
					<RequireAuth>
						<Dashboard />
					</RequireAuth>
				)} />
			</Routes>
		</BrowserRouter>
	);
};

function RequireAuth({ children }: { children: JSX.Element }) {
	// let auth = useAuth(); // verify session storage
  
	if (true) {
	  return <Navigate to="/" replace />;
	}
  
	return children;
  }
