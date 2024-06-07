'use strict';

import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './layouts/Dashboard';
import { SignIn } from './views/signin/SignIn';
import { Transactions, Charts, Main } from './views/dashboard';

function App() {
	const basePath: string = '/dashboard';

	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='/signin' element={<SignIn />} />
			<Route element={<Dashboard />}>
				<Route path={basePath} element={<Main />} />
				<Route path={`${basePath}/transactions`} element={<Transactions />} />
				<Route path={`${basePath}/charts`} element={<Charts />} />
			</Route>
		</Routes>
	);
}

export default App;