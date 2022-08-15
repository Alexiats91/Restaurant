//Styled Components
import {SocialWrap, Lic, Social} from './styled';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons'

const SocialContent = () => {
	return (
		<SocialWrap>
			<Social>
				<a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} color={ '#707070' }/></a>
				<a target="_blank" rel="noreferrer" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} color={ '#707070' }/></a>
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} color={ '#707070' }/></a>
				<a target="_blank" rel="noreferrer" href="https://www.behance.net/"><FontAwesomeIcon icon={faBehance} color={ '#707070' }/></a>
			</Social>
			<Lic>
				&copy; 2020 Expice Studio
			</Lic>
		</SocialWrap>
	)
};
export default SocialContent;