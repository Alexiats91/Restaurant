//Styles
import {BookingValuesWrap, Button, Form, FormWrap, Input, InputGroupWrap, Section, TitleWrap} from './styled';
import {TitleH3} from "../../GlobalStyle";

//Components
import MyDatePicker from "./DatePicker";
import MyTimePicker from "./Timepicker";
import AmountPeople from "./AmountPeople";

const AdvanceBooking = () => {
  return(
	  <Section>
			<FormWrap>
				<Form>
					<TitleWrap>
						<TitleH3>advance booking</TitleH3>
					</TitleWrap>
					<InputGroupWrap>
						<Input/>
						<Button>GO</Button>
					</InputGroupWrap>
					<BookingValuesWrap>
						<MyDatePicker/>
						<MyTimePicker/>
						<AmountPeople/>
					</BookingValuesWrap>
				</Form>
			</FormWrap>
	  </Section>
  )

};
export default AdvanceBooking;