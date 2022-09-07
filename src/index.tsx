import ReactDOM from 'react-dom/client';
import { ApiContext } from 'context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ApiContext>
		<App />
	</ApiContext>
);
