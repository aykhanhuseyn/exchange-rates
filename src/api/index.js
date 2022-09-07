import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.apilayer.com/exchangerates_data',
	redirect: 'follow',
	headers: {
		apikey: 'Z3utNLhuS1FxfJ4cwBV352mkavvrRhkz',
	},
});
