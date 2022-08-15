//Styles
import {Section, Wrap} from './styled';
import {MyContainer} from '../../GlobalStyle';

//Components
import TitleDescription from "./TitleDescription";
import Cards from "./Cards";

const ExploreOurFood = ({store}) => {
	return (
		<Section>
			<MyContainer>
				<Wrap>
					<TitleDescription/>
					<Cards store={store}/>
				</Wrap>
			</MyContainer>
		</Section>
	)
};

export default ExploreOurFood;