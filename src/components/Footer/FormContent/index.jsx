import {FormContentWrap, TitleWrap, DescriptionWrap, Form, Input, Button, LinksList} from './styled';
import {Description, TitleH3} from "../../../GlobalStyle";

import {Link} from "react-router-dom";

const FormContent = ({links}) => {
	const footerLinks = links.map((el, key) => {
		return <Link key={key} to={el.link}>{el.text}</Link>
	});
	return (
		<FormContentWrap>
			<TitleWrap>
				<TitleH3 capitalize>Get notified<br/> about new amazing products</TitleH3>
			</TitleWrap>
			<DescriptionWrap>
				<Description textAlignCenter>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. </Description>
			</DescriptionWrap>
			<Form>
				<Input/>
				<Button>
					<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.6732 8.21101L16.5312 1.069C16.0954 0.63325 15.3887 0.63325 14.953 1.069C14.5171 1.50484 14.5171 2.21137 14.953 2.64721L20.1899 7.88417H1.11594C0.499673 7.88417 0 8.38384 0 9.00011C0 9.61629 0.499673 10.116 1.11594 10.116H20.1899L14.9531 15.353C14.5173 15.7889 14.5173 16.4954 14.9531 16.9312C15.171 17.149 15.4566 17.2581 15.7422 17.2581C16.0278 17.2581 16.3134 17.149 16.5313 16.9312L23.6732 9.78921C24.109 9.35337 24.109 8.64685 23.6732 8.21101Z" fill="white"/>
					</svg>
				</Button>
			</Form>
			<LinksList>
				{footerLinks}
			</LinksList>
		</FormContentWrap>
	)
};

export default FormContent;