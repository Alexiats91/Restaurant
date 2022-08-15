import styled from 'styled-components';
import points from '../img/points.png'

export const OurServiceStyles = styled.section`

  .myContainer {
    .descWrap {
      margin-top: 146px;
      margin-bottom: 168px;

      .descTitle {
        h2 {
          width: 337px;
        }
      }

      .descArticle {
        p {
          width: 609px;
        }
      }
    }
  }

  .block__bg {
    background: url(${points}) center/contain repeat;
    padding-top: 105px;
    padding-bottom: 99px;

    .myContainer {
      .block {
        display: flex;
        column-gap: 100px;
        justify-content: space-between;
        flex-wrap: wrap;

        .block__leftSide {
          display: flex;
          flex-direction: column;

          .block__leftSide-top,
          .block__leftSide-bottom {
            display: flex;
            justify-content: space-between;
            column-gap: 100px;

            .block__leftSide-top-rectDescWrap,
            .block__leftSide-bottom-rectDescWrap {
              display: flex;
              justify-content: start;
              align-items: center;
              width: 390px;

              .block__leftSide-top-rectDesc,
              .block__leftSide-bottom-rectDesc {
                width: 209px;
              }
            }
          }

          .block__leftSide-top {
            .block__leftSide-top-rectDescWrap {
              .block__leftSide-top-rectDesc {
                margin-left: 63px;

                h4 {
                  span {
                    display: inline-block;
                    width: 84px;
                    height: 3px;
                    background-color: var(--main-color);
                    margin: 0 0 7px 13px;
                  }
                }

                .arrowLeft__wrap {
                  position: relative;

                  .arrowLeft {
                    width: 182px;
                    height: 2px;
                    background-color: var(--main-color);

                    position: absolute;
                    top: -18px;
                    left: -188px;

                    &:before {
                      position: absolute;
                      content: '';
                      width: 11px;
                      height: 2px;
                      background-color: var(--main-color);
                      transform: rotate(-45deg);
                      border-radius: 2px;
                      top: -3.5px;
                      left: -1.6px;
                    }

                    &:after {
                      position: absolute;
                      content: '';
                      width: 11px;
                      height: 2px;
                      background-color: var(--main-color);
                      transform: rotate(45deg);
                      border-radius: 2px;
                      bottom: -3.5px;
                      left: -1.6px;
                    }
                  }
                }

                p {
                  padding-top: 20px;
                }
              }
            }
          }

          .block__leftSide-bottom {
            .block__leftSide-bottom-rectDescWrap {
              .block__leftSide-bottom-rectDesc {
                h4 {
                  width: 160px;

                  span {
                    display: inline-block;
                    width: 84px;
                    height: 3px;
                    background-color: var(--main-color);
                    margin: 0 13px 7px 0;
                  }
                }

                .arrowRight__wrap {
                  position: relative;

                  .arrowRight {
                    width: 267px;
                    height: 2px;
                    background-color: var(--main-color);
                    position: absolute;
                    top: -18px;
                    left: 245px;

                    &:before {
                      position: absolute;
                      content: '';
                      width: 11px;
                      height: 2px;
                      background-color: var(--main-color);
                      transform: rotate(45deg);
                      border-radius: 2px;
                      top: -3.5px;
                      right: -1.6px;
                    }

                    &:after {
                      position: absolute;
                      content: '';
                      width: 11px;
                      height: 2px;
                      background-color: var(--main-color);
                      transform: rotate(-45deg);
                      border-radius: 2px;
                      bottom: -3.5px;
                      right: -1.6px;
                    }
                  }
                }

                p {
                  padding-top: 20px;
                }
              }
            }
          }
        }

        .block__rightSide {
          .block__rightSide-bg {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 670px;
            height: 758px;
            background: #FFEDDE;

            svg {
              margin-bottom: 90px;
            }

            h4 {
              width: 244px;
            }

            p {
              width: 199px;
              margin: 20px 0;
            }

            .line {
              background-color: var(--main-color);
              width: 192px;
              height: 3px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1680px) {
    .block__bg {
      padding-top: 35px;
      padding-bottom: 26px;

      .myContainer {
        .block {
          column-gap: 63px;
          justify-content: space-evenly;

          .block__leftSide {
            .block__leftSide-top,
            .block__leftSide-bottom {
              column-gap: 63px;

              .block__leftSide-top-rectDescWrap,
              .block__leftSide-bottom-rectDescWrap {
                width: 271px;
              }
            }

            .block__leftSide-top {
              .block__leftSide-top-rectDescWrap {
                .block__leftSide-top-rectDesc {
                  margin-left: 22px;

                  .arrowLeft__wrap {
                    .arrowLeft {
                      width: 109px;
                      left: -118px;
                    }
                  }
                }
              }
            }

            .block__leftSide-bottom {
              .block__leftSide-bottom-rectDescWrap {
                .block__leftSide-bottom-rectDesc {
                  .arrowRight__wrap {
                    .arrowRight {
                      width: 144px;
                      left: 215px;
                    }
                  }
                }
              }
            }
          }

          .block__rightSide {
            .block__rightSide-bg {
              width: 462px;
              height: 550px;

              svg {
                width: 212px;
                height: 160px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .myContainer {
      .descWrap {
        margin-top: 100px;
        margin-bottom: 118px;
      }
    }
  }
  @media (max-width: 1160px) {
    .block__bg {
      padding-top: 28px;
      padding-bottom: 0;
      background: none;

      .myContainer {
        .block {
          column-gap: 10px;

          .block__leftSide {
            .block__leftSide-top,
            .block__leftSide-bottom {
              column-gap: 0;
              flex-wrap: wrap;

              .block__leftSide-top-rectDescWrap,
              .block__leftSide-bottom-rectDescWrap {
                width: auto;
              }
            }

            .block__leftSide-top {
              .block__leftSide-top-rectDescWrap {
                .block__leftSide-top-rectDesc {
                  margin-left: 0;

                  .arrowLeft__wrap {
                    .arrowLeft {
                      width: 73px;
                      left: -80px;
                    }
                  }
                }
              }
            }

            .block__leftSide-bottom {
              .block__leftSide-bottom-rectDescWrap {
                .block__leftSide-bottom-rectDesc {
                  .arrowRight__wrap {
                    .arrowRight {
                      width: 81px;
                      left: 195px;
                    }
                  }
                }
              }
            }
          }

          .block__rightSide {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .myContainer {
      .descWrap {
        margin-top: 60px;
        margin-bottom: 28px;
      }
    }

    .block__bg {
      .myContainer {
        .block {

          .block__leftSide {
            width: 100%;

            .block__leftSide-top,
            .block__leftSide-bottom {
              padding-bottom: 20px;
              justify-content: center;
            }
          }

          .block__rightSide {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 510px) {
    .block__bg {
      .myContainer {
        .block {
          .block__leftSide {
            .block__leftSide-top,
            .block__leftSide-bottom {
              .block__leftSide-top-rectDescWrap,
              .block__leftSide-bottom-rectDescWrap {
				width: 100%;
				justify-content: center;
              }
            }
            .block__leftSide-top {
              .block__leftSide-top-rectDescWrap {
                .block__leftSide-top-rectDesc {
                  .arrowLeft__wrap {
					display: none;
                    .arrowLeft {
                    }
                  }
                }
              }
            }
            .block__leftSide-bottom {
			  flex-direction: column-reverse;
              .block__leftSide-bottom-rectDescWrap {
                .block__leftSide-bottom-rectDesc {
                  .arrowRight__wrap {
                    display: none;
                    .arrowRight {
                    }
                  }
                }
              }
            }
          }
          .block__rightSide {
            .block__rightSide-bg {
              svg {
              }
            }
          }
        }
      }
    }
  }
`;