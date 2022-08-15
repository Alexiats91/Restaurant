import {DescWrap, TitleWrap, Wrap} from './styled';
import {Description, TitleH2} from "../../../GlobalStyle";

const Title = () => {
	return (
		<Wrap>
			<TitleWrap>
				<TitleH2>Our Services</TitleH2>
			</TitleWrap>
			<DescWrap>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget
					sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt.
					Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi
					tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus
					auctor eget sed.
				</Description>
			</DescWrap>
		</Wrap>
	)
};

export default Title;