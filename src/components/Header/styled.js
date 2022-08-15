import styled from 'styled-components';

export const HeaderStyle = styled.header.attrs({
	className: "header",
})`
  position: relative;
  
  &:after {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 27%;
    height: 100%;
    background-color: ${props => props.theme.colors.main};
    content: '';
  }
  
  .myContainer {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
	width: 100%;
	
    position: relative;
    z-index: 2;

    .navbar-brand {
      font-family: 'PoppinsSemiBold', sans-serif;
      font-size: 72px;
      text-align: center;
      color: ${props => props.theme.colors.main};
      text-decoration: none;
      padding-right: 12%;

      &:hover {
        text-decoration: underline;
      }
    }

    .navbar-collapse {

      .navbar-nav {
        align-items: center;
        color: #2E266F;

        .nav-link {
          font-family: 'PoppinsRegular', sans-serif;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: #2E266F;
          padding: 0 0 0 40px;

          &:first-child {
            padding: 0;
          }
        }
      }

      .user-cabinet {
        display: flex;
        align-items: center;

        .user-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background-color: #fff;
          border-radius: 50%;

          &:after {
            position: absolute;
            top: 0;
            right: 1px;
            width: 15px;
            height: 15px;
            background-color: #31A24C;
            border-radius: 50%;
            content: '';
          }
        }

        .dropdown {
          .nav-link {
            color: #FFFFFF;
            padding-left: 10px;
			font-size: 16px;
          }
          .dropdown-menu{
			min-width: 0;
            top: 185%;
            right: 0;
			left: auto;
            .dropdown-item{
			  padding: 0 10px;
              &:active{
                background-color: ${props => props.theme.colors.main};
              }
            }
		  }
        }
      }
    }
  }
  
  @media (max-width: 1199px) {
    .myContainer {
      .navbar-brand {
        font-size: 60px;
      }

      .navbar-toggler {
        position: relative;
        width: 40px;
        height: 20px;
        background-color: transparent;
		border: none;
		box-shadow: none;
		padding: 0;
		margin: 0;

        .navbar-toggler-icon {
          position: absolute;
          width: 100%;
          height: 3px;
		  right: 0;
          background: #ffffff;
          transition: all 0.4s ease-out;

          &:before {
            position: absolute;
            content: '';
            top: -8px;
			right: 0;
            width: 100%;
            height: 3px;
            background: #ffffff;
            transition: all 0.4s ease-out;
          }
          &:after {
            position: absolute;
            content: '';
            bottom: -8px;
			right: 0;
            width: 60%;
            height: 3px;
            background: #ffffff;
            transition: all 0.4s ease-out;
          }
        }
		
		&:not(.collapsed) .navbar-toggler-icon{
          transform: rotate(calc(0.5turn));
          background: transparent;
		}
        &:not(.collapsed) .navbar-toggler-icon:before{
		  top: 0;
          transform: rotate(calc(0.5turn + 45deg));
        }
        &:not(.collapsed) .navbar-toggler-icon:after{
		  bottom: 0;
          width: 100%;
          transform: rotate(calc(0.5turn - 45deg));
		}
      }

      .navbar-collapse {

        .navbar-nav {
          align-items: flex-end;

          .nav-link {
            color: #FFFFFF;
            padding: 0;
			&:hover{
			  text-decoration: underline;
			}
          }
        }

        .user-cabinet {
          justify-content: flex-end;

          .user-icon {
            display: none;
          }

          .dropdown {
            .dropdown-menu {
			  top: 90%;
              color: #FFFFFF;
			  text-align:right;
            }
          }
        }
      }
    }
  }
  @media (max-width: 554px) {
    .myContainer {
      .navbar-brand {
        font-size: 60px;
      }

      .navbar-toggler {
        width: 25px;
      }
    }
  }
  @media (max-width: 425px) {
    .myContainer {
      .navbar-brand {
        font-size: 60px;
      }

      .navbar-toggler {
        width: 25px;
      }
    }
  }
`;