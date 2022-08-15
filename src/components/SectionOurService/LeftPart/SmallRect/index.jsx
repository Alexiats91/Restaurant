import {SmallRectStyles, Rect} from './styled';

const SmallRect = ({ svg }) => {
	return (
		<SmallRectStyles>
			<Rect>
				{svg}
			</Rect>
		</SmallRectStyles>
	)
};

export default SmallRect;