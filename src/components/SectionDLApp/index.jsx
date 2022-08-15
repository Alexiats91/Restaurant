//Styles
import {Section, BG, Wrap, Left, Right, ImgWrap, ImgPoints, ImgSalad, ImgPhone, ImgDisplay} from './styled'
import {MyContainer} from '../../GlobalStyle'

//Images
import points from "./../img/pointsApp.png"
import salad from "./../img/salad2.png"
import phone from "./../img/phoneApp.png"
import display from "./../img/phoneDisplay.png"

//Components
import Title from "./Title";

const DLApp = () => {
	return (
		<Section>
			<BG>
				<MyContainer>
					<Wrap>
						<Left>
							<Title/>
						</Left>
						<Right>
							<ImgWrap>
								<ImgPoints src={points} alt="img"/>
								<ImgSalad src={salad} alt="img"/>
								<ImgPhone src={phone} alt="img"/>
								<ImgDisplay src={display} alt="img"/>
							</ImgWrap>
						</Right>
					</Wrap>
				</MyContainer>
			</BG>
		</Section>
	)
};

export default DLApp;