//Styles
import {Label, Wrap} from './styled';
import { Select } from 'antd';

const AmountPeople = () => {
	const { Option } = Select;
	const handleChange = (value) => {};
	return (
		<Wrap>
			<Label>Guests</Label>
			<Select
				onChange={handleChange}
				allowClear={false}
				defaultValue="2People"
				style={{
					width: 70,
				}}
				bordered={false}
				dropdownClassName="myDropDownSelectStyles"
				showArrow={false}
				placeholder="People"
				name="amount"
				fieldNames={{
					name: "amount",
				}}
			>
				<Option value="1People">1 People</Option>
				<Option value="2People">2 People</Option>
				<Option value="3People">3 People</Option>
				<Option value="4People">4 People</Option>
				<Option value="5People">5 People</Option>
				<Option value="6People">6 People</Option>
				<Option value="7People">7 People</Option>
				<Option value="8People">8 People</Option>
				<Option value="9People">9 People</Option>
				<Option value="10People">10 People</Option>
			</Select>
		</Wrap>
	);

};
export default AmountPeople;