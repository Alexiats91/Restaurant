//Styles
import {Label, Wrap} from './styled';

//DatePicker
import {DatePicker} from 'antd';
import moment from 'moment';

const MyDatePicker = () => {
	const dateFormat = 'DD-MM-YYYY';
	const disabledDate = (current) => {
		return current && current < moment().startOf('day');
	}
	return (
		<Wrap>
			<Label>Date</Label>
			<DatePicker
				inputReadOnly
				allowClear={false}
				disabledDate={disabledDate}
				defaultValue={moment()}
				format={dateFormat}
				bordered={false}
				className="myStyles"
				dropdownClassName="myDropDownStyles"
				placeholder="Date"
				name="date"
				id="date"
			/>
		</Wrap>
	);

};
export default MyDatePicker;