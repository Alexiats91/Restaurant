import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux imitation
import store from "./store";

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
	<React.StrictMode>
			<App store={store}/>
	</React.StrictMode>
);
reportWebVitals();
