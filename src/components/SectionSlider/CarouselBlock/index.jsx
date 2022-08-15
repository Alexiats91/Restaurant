//Carousel Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Styles
import {CarouselBlockStyles} from './styled';

//Slide images
import Slide1 from './img/plate1.png';
import Slide2 from './img/plate2.png';
import Slide3 from './img/plate3.png';

const CarouselBlock = () => {
	return (
		<CarouselBlockStyles>
			<Carousel
				className="myStyleCarousel"
				fade
				indicators={false}
				prevIcon={
					<svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.5729 23.2732C16.5735 23.2737 16.5739 23.2744 16.5746 23.275L26.7801 33.4313C27.5446 34.1921 28.7813 34.1893 29.5423 33.4246C30.3032 32.6601 30.3003 31.4234 29.5358 30.6625L22.6838 23.8438H64.0469C65.1256 23.8438 66 22.9693 66 21.8906C66 20.8119 65.1256 19.9375 64.0469 19.9375H22.6839L29.5357 13.1188C30.3002 12.3578 30.3031 11.1212 29.5422 10.3567C28.7812 9.59191 27.5444 9.58928 26.78 10.35L16.5745 20.5063C16.5739 20.5069 16.5735 20.5075 16.5728 20.5081C15.8078 21.2716 15.8103 22.5122 16.5729 23.2732Z" fill="white"/>
						<circle cx="22.5" cy="22.5" r="21" stroke="white" strokeWidth="3"/>
					</svg>
				}
				nextIcon={
					<svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="43.5" cy="22.5" r="21" stroke="white" strokeWidth="3"/>
						<path d="M49.4271 20.7268C49.4265 20.7263 49.4261 20.7256 49.4254 20.725L39.2199 10.5687C38.4554 9.8079 37.2187 9.81074 36.4577 10.5754C35.6968 11.3399 35.6997 12.5766 36.4642 13.3375L43.3162 20.1562H1.95312C0.874414 20.1562 0 21.0307 0 22.1094C0 23.1881 0.874414 24.0625 1.95312 24.0625H43.3161L36.4643 30.8812C35.6998 31.6422 35.6969 32.8788 36.4578 33.6433C37.2188 34.4081 38.4556 34.4107 39.22 33.65L49.4255 23.4937C49.4261 23.4931 49.4265 23.4925 49.4272 23.4919C50.1922 22.7284 50.1897 21.4878 49.4271 20.7268Z" fill="white"/>
					</svg>
				}
			>
				<Carousel.Item>
					<img className="d-block w-100" src={Slide1} alt="Slide1"/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Slide2} alt="Slide2"/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Slide3} alt="Slide3"/>
				</Carousel.Item>
			</Carousel>
		</CarouselBlockStyles>
	)
};

export default CarouselBlock;