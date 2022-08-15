//Styles
import {Sectoin, Backgroud, Content} from "./styled";
import {MyContainer} from "../../GlobalStyle";

//Components
import Title from "./Title";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const OurService = () => {
	return (
		<Sectoin>
			<MyContainer>
				<Title/>
			</MyContainer>
			<Backgroud>
				<MyContainer>
					<Content>
						<LeftPart/>
						<RightPart/>
					</Content>
				</MyContainer>
			</Backgroud>
		</Sectoin>
	)
};

export default OurService;