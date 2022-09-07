import map from 'lodash/map';
import { Select } from 'antd';
import { useContext } from 'react';
import { context } from 'context';
import { SwapOutlined } from '@ant-design/icons';
import './style.scss';

export const SelectExchange = () => {
	const { from, to, changeCurrency, options } = useContext(context);

	return (
		<div className='select'>
			<Select
				className='left__select'
				value={from}
				style={{ width: 310 }}
				onChange={(value) => {
					changeCurrency('from', value);
				}}
			>
				{map(options, ({ label, value }) => (
					<Select.Option key={value} value={value}>
						{label}
					</Select.Option>
				))}
			</Select>
			<SwapOutlined
				className='exchange__icon'
				onClick={() => {
					changeCurrency('toggle');
				}}
			/>
			<Select
				className='right__select'
				value={to}
				style={{ width: 310 }}
				onChange={(value) => {
					changeCurrency('to', value);
				}}
			>
				{map(options, ({ label, value }) => (
					<Select.Option key={value} value={value}>
						{label}
					</Select.Option>
				))}
			</Select>
		</div>
	);
};
