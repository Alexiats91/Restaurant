import styled from 'styled-components';
import saladBG from './img/salad.png';
import bg from './img/BG.png';

export const CarouselBlockStyles = styled.div`
  margin-bottom: 194px;
  margin-top: 55px;
  margin-left: 70px;

  .myStyleCarousel {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
	
	.carousel-inner{
	  overflow: unset;
      position: relative;
	  .carousel-item{
        &:before {
          position: absolute;
          z-index: -1;
          top: 2%;
          left: -10%;
          width: 60%;
          height: 100%;
          background-image: url(${bg});
          background-repeat: no-repeat;
          background-size: 100%;
          content: '';
        }
        &:after {
          position: absolute;
          content: '';
          top: -17%;
		  left: 11%;
          background-image: url(${saladBG});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          width: 76%;
          height: 100%;
          z-index: -1;
        }
	  }
	}
    .carousel-control-prev {
	  position: unset;
      width: unset;
	  margin-right: 20px;
    }

    .carousel-control-next {
      position: unset;
      width: unset;
	  margin-left: 20px;
    }
  }
  
  @media(max-width: 1199px){
    margin-top: 27px;
    margin-left: 5px;
	.myStyleCarousel{
	  .carousel-inner{
		margin-bottom: 62px;
	  }
	}
  }
  @media(max-width: 554px){
    margin-left: 85px;
	margin-bottom: 68px;
	.myStyleCarousel{
	  .carousel-inner{
		margin-bottom: 0;
         .carousel-item{
		   &:after {
             left: 24%;
           }
         }
      }
      .carousel-control-prev {
        margin-right: 10px;
		svg{
		  width: 44px;
		  height: 30px;
		}
      }

      .carousel-control-next {
		margin-left: 10px;
        svg{
          width: 44px;
          height: 30px;
        }
      }
	  }
	}
  @media(max-width: 425px){
	.myStyleCarousel{
      .carousel-control-prev {
        margin-right: 5px;
		svg{
          width: 40px;
          height: 26px;
		}
      }

      .carousel-control-next {
        margin-left: 5px;
        svg{
          width: 40px;
          height: 26px;
        }
      }
	  }
	}
  }
`;
