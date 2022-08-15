//Styled Components
import {FooterStyles, ContentWrap} from './styled';
import {MyContainer} from "../../GlobalStyle";
//Images
import img1 from "../img/footerBG.png";
import img2 from "../img/footerPoints.png";

//Components
import FormContent from "./FormContent";
import SocialContent from "./SocialContent";

const Footer = ({links}) => {
	return (
		<FooterStyles img1={img1} img2={img2}>
			<MyContainer>
				<ContentWrap>
					<FormContent links={links}/>
					<SocialContent/>
				</ContentWrap>
			</MyContainer>
		</FooterStyles>
	)
};

export default Footer;