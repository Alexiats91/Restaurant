//Styles
import {Label, Wrap} from './styled';

//Timepicker
import {TimePicker} from 'antd';
import moment from 'moment';

const MyTimePicker = () => {
	const onChange = (time, timeString) => {
		console.log(time, timeString);
	};
	return (
		<Wrap>
			<Label>Time</Label>
			<TimePicker
				inputReadOnly
				use12Hours
				format="h.mm a"
				onChange={onChange}
				defaultValue={moment( '6.00 PM', "h.mm a" )}
				allowClear={false}
				bordered={false}
				minuteStep={15}
				showNow={false}
				className="myStyles"
				placeholder="Time"
				name="time"
				id="time"
			/>
		</Wrap>
	)

};
export default MyTimePicker;