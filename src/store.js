import cardBG1 from './components/SectionFoodItem/FoodCard/img/cardBG1.jpg';
import cardBG2 from './components/SectionFoodItem/FoodCard/img/cardBG2.jpg';

//exploreFoodCards img
import card1 from "./components/img/exploreFoodCards/image_1.png"
import card2 from "./components/img/exploreFoodCards/image_2.png"
import card3 from "./components/img/exploreFoodCards/image_3.png"
import card4 from "./components/img/exploreFoodCards/image_4.png"
import card5 from "./components/img/exploreFoodCards/image_5.png"
import card6 from "./components/img/exploreFoodCards/image_6.png"

const store = {
	//Header navigation menu
	navigationLinks: [
		{ link: '/MenuOne', text: 'Menu One', },
		{ link: '/MenuTwo', text: 'Menu Two', },
		{ link: '/MenuThree', text: 'Menu Three', },
		{ link: '/MenuFour', text: 'Menu Four', },
	],
	//Footer navigation menu
	footerLinks: [
		{ link: '/product', text: 'Product', },
		{ link: '/company', text: 'Company', },
		{ link: '/learnMore', text: 'Learn More', },
		{ link: '/getInTouch', text: 'Get In Touch', },
	],

	mainPage: {
		sectionFoodItem: {
			cards: [
				{
					image: cardBG1,
					title: 'Fire Water',
					description: 'we are all about we are all about to the fullest and all content dining out or in!dining out or in!',
					location: 'New market',
					link: '#',
				},
				{
					image: cardBG2,
					title: 'The Wonton',
					description: 'we are all about we are all about to the fullest and all content dining out or in!dining out or in!',
					location: 'Saheb bazar',
					link: '#',
				},
			],
		},
		sectionExploreOurFood: {
			cards: [
				{
					link: '#',
					image: card1,
					title: 'Hand Sandwich',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
					price: '$10.25',
				},
				{
					link: '#',
					image: card2,
					title: 'Hand Sandwich',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
					price: '$10.25',
				},
				{
					link: '#',
					image: card3,
					title: 'Hand Sandwich',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
					price: '$10.25',
				},
				{
					link: '#',
					image: card4,
					title: 'Hand Sandwich',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
					price: '$10.25',
				},
				{
					link: '#',
					image: card5,
					title: 'Hand Sandwich',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
					price: '$10.25',
				},
				{
					link: '#',
					image: card6,
					title: 'Hand Sandwich',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
					price: '$10.25',
				},
			],
		}
	},

}
export default store;