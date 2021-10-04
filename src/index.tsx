import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import store, { persistor } from 'store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();
