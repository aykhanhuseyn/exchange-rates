import { Card, InputNumber, Typography, SelectExchange } from 'components';
import './style.scss';

function convert(value: number, from: string, to: string): number {
	return 0;
}

const App = () => {
	return (
		<div className='container'>
			<SelectExchange />
			<Card direction='column'>
				<Typography>Amount</Typography>
				<InputNumber />
				{/* onClick */}
				{/* value */}
				<Typography>USD: $1.70</Typography>
			</Card>

			<Card>
				<Typography>USD: $1.70</Typography>
			</Card>
			<Card>
				<Typography>USD: $1.70</Typography>
			</Card>
			<Card>
				<Typography>USD: $1.70</Typography>
			</Card>
			<Card>
				<Typography>USD: $1.70</Typography>
			</Card>
		</div>
	);
};

export default App;
