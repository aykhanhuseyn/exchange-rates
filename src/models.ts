import { FC } from 'react';

export type ApiContextData = {
	from: string;
	to: string;
	rates?: Rates;
	symbols?: Symbols;
	options: Option[];
	changeCurrency: ChangeCurrency;
};

type ApiContextProps = {
	children: JSX.Element;
};

export type ApiContextType = FC<ApiContextProps>;

export type Option = {
	label: string;
	value: string;
};

export type ChangeCurrency = (
	action: 'toggle' | 'from' | 'to',
	value?: string
) => void;

export type Symbols = Record<string, string>;

export type SymbolsResponse = {
	success: boolean;
	symbols: Symbols;
};

export type Rates = Record<string, number>;

export interface RatesResponse {
	success: boolean;
	timestamp: number;
	historical: boolean;
	base: string;
	date: string;
	rates: Rates;
}
