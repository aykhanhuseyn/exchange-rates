import { createContext, useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import map from 'lodash/map';
import { api } from 'api';
import type {
	ApiContextData,
	ApiContextType,
	SymbolsResponse,
	RatesResponse,
	Symbols,
	Option,
	Rates,
	ChangeCurrency,
} from 'models';

export const context = createContext<ApiContextData>({
	to: 'USD',
	from: 'AZN',
	options: [],
	changeCurrency: () => {},
});

export const ApiContext: ApiContextType = ({ children }) => {
	const [rates, setRates] = useState<Rates>();
	const [symbols, setSymbols] = useState<Symbols>();
	const [options, setOptions] = useState<Option[]>([]);
	const [to, setTo] = useState('USD');
	const [from, setFrom] = useState('AZN');

	const changeCurrency: ChangeCurrency = useCallback(
		(action, value) => {
			switch (action) {
				case 'from':
					setFrom(value!);
					break;
				case 'to':
					setTo(value!);
					break;
				case 'toggle':
					const temp = from;
					setFrom(to);
					setTo(temp);
					break;
			}
		},
		[from, to]
	);

	useEffect(() => {
		(async () => {
			const { data } = await api.get<SymbolsResponse>('/symbols');

			if (data?.success) {
				setSymbols(data.symbols);
				const mappedData = map(data.symbols, (label, value) => ({ label, value }));
				setOptions(mappedData);
			}
		})();

		(async () => {
			const params = { base: 'USD' };
			const { data } = await api.get<RatesResponse>(
				`/${dayjs().format('YYYY-MM-DD')}`,
				{ params }
			);

			if (data?.success) {
				setRates(data.rates);
			}
		})();
	}, []);

	return (
		<context.Provider
			value={{ symbols, options, rates, from, to, changeCurrency }}
		>
			{children}
		</context.Provider>
	);
};
