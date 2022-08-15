//Components
import SectionSlider from "../../components/SectionSlider";
import SectionFoodItem from "../../components/SectionFoodItem";
import SectionAdvanceBooking from "../../components/SectionAdvanceBooking";
import SectionOurService from "../../components/SectionOurService";
import SectionExploreOurFood from "../../components/SectionExploreOurFood";
import SectionDLApp from "../../components/SectionDLApp";

const Main = ({store}) => {
	return (
		<main>
			<SectionSlider/>
			<SectionFoodItem store={store.sectionFoodItem.cards}/>
			<SectionAdvanceBooking/>
			<SectionOurService/>
			<SectionExploreOurFood store={store.sectionExploreOurFood.cards}/>
			<SectionDLApp/>
		</main>
	)
};

export default Main;