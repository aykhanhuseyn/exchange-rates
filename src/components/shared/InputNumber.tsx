import { InputNumber as Input } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

export const InputNumber = () => {
	return <Input addonAfter={<SyncOutlined />} defaultValue={100} />;
};
