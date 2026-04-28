import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';
import './index.css';
import { storeRedux } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={storeRedux}>
			<AppProvider>
				<App />
			</AppProvider>
		</Provider>
	</StrictMode>
);