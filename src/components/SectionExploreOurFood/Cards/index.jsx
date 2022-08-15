import {CardsWrap, ExploreFoodCardStyles, ImageWrap, DescWrap, TitleWrap, Price, Image, Title, Description} from './styled';

const Cards = ({store}) => {
	const cardsList = store.map( (el, key) => {
		return (
		<ExploreFoodCardStyles key={key} href={el.link}>
			<ImageWrap>
				<Image src={el.image} alt="image"/>
			</ImageWrap>
			<DescWrap>
				<TitleWrap>
					<Title>{el.title}</Title>
					<Description>{el.description}</Description>
				</TitleWrap>
				<Price>
					{el.price}
				</Price>
			</DescWrap>
		</ExploreFoodCardStyles>
		)
	} );
	return (
		<CardsWrap>
			{cardsList}
		</CardsWrap>

	)
};

export default Cards;