import { RawImg } from "@components";

export default function Home() {
  return (
    <>
      <div
        css={{
          pointerEvents: "auto",
          color: "rgb(23, 23, 23)",
          backgroundColor: "rgb(255, 255, 255)",
          font: "400 16px/24px Arial, Helvetica, sans-serif ",
        }}
      >
        <div
          scriptsClientOnly={true}
          css={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <div
            innerHTML="<p>Hello there, I am custom HTML code!</p>
"
            css={{}}
          />
        </div>
        <div
          css={{
            fontWeight: "400",
            pointerEvents: "auto",
          }}
        >
          <div
            css={{
              fontWeight: "400",
              pointerEvents: "auto",
            }}
          >
            <div
              css="[object Object]"
              css={{
                fontWeight: "400",
                pointerEvents: "auto",
              }}
            >
              <div
                css="[object Object]"
                css={{
                  fontWeight: "400",
                  pointerEvents: "auto",
                }}
              />
            </div>
          </div>
        </div>
        <div
          css="[object Object]"
          css={{
            fontWeight: "400",
            pointerEvents: "auto",
          }}
        >
          <next-route-announcer
            css={{
              display: "inline",
              fontWeight: "400",
              pointerEvents: "auto",
            }}
          />
          <nextjs-portal
            css={{
              display: "inline",
              fontWeight: "400",
              pointerEvents: "auto",
            }}
          />
        </div>
        <title
          css={{
            fontWeight: "400",
            pointerEvents: "auto",
          }}
        >
          Create Next App
        </title>
        <next-route-announcer
          css={{
            display: "block",
            fontWeight: "400",
            position: "absolute",
            pointerEvents: "auto",
          }}
        />
        <nextjs-portal
          css={{
            color: "rgb(117, 117, 117)",
            display: "block",
            fontFamily:
              '__nextjs-Geist, Geist, -apple-system, "Source Sans Pro", sans-serif',
            fontVariant: "none",
            fontVariantLigatures: "none",
            fontWeight: "400",
            position: "absolute",
            tabSize: "8",
            textAlign: "left",
            pointerEvents: "auto",
          }}
        />
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        css={{}}
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Roboto:wght@400;500&display=swap"
        css={{}}
      />
      <div
        css={{
          width: "100%",
          minHeight: "100vh",
          fontFamily:
            "'Nunito Sans', -apple-system, Roboto, Helvetica, sans-serif",
          backgroundColor: "#FFF",
        }}
      >
        <div
          css={{
            display: "flex",
            width: "100%",
            padding: "8.878px 26.633px",
            justifyContent: "space-between",
            alignItems: "center",
            height: "107px",
            "@media (max-width: 640px)": {
              padding: "10px 20px",
            },
            backgroundColor: "#FFF",
          }}
        >
          <div css={{}}>
            <div
              innerHTML='<svg id="I60:10948;843:19742" layer-name="Wordmark" width="146" height="61" viewBox="0 0 146 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo" style="width: 145.374px; height: 59.925px; flex-shrink: 0">
  <path d="M21.9425 18.3983H13.4495V13.6208H36.4306V18.3983H27.9376V39.1422C27.9376 39.694 27.4902 40.1413 26.9384 40.1413C24.1792 40.1413 21.9425 37.9046 21.9425 35.1454V18.3983Z" fill="#605DEC"></path>
  <path d="M49.3769 23.7359C49.4649 24.9326 48.5858 25.9826 47.3922 26.1063L46.2683 26.2228C44.6543 26.3733 43.5142 26.8247 42.8481 27.577C42.1819 28.3043 41.8489 29.2824 41.8489 30.5112V39.0316C41.8489 39.6445 41.3521 40.1413 40.7392 40.1413H38.2654C37.0396 40.1413 36.046 39.1477 36.046 37.9219V22.7808C36.046 22.1679 36.5428 21.671 37.1557 21.671H40.5086C41.1215 21.671 41.6183 22.1679 41.6183 22.7808V24.7933C42.5662 22.6616 44.5262 21.4955 47.4981 21.2949C48.4338 21.2324 49.2445 21.9368 49.3133 22.8721L49.3769 23.7359Z" fill="#605DEC"></path>
  <path d="M51.4705 22.7808C51.4705 22.1679 51.9673 21.671 52.5802 21.671H56.1637C56.7766 21.671 57.2734 22.1679 57.2734 22.7808V39.0316C57.2734 39.6445 56.7766 40.1413 56.1637 40.1413H53.6899C52.4642 40.1413 51.4705 39.1477 51.4705 37.9219V22.7808Z" fill="#605DEC"></path>
  <path d="M73.3987 21.2196C75.0127 21.2196 76.4474 21.6334 77.7028 22.461C78.9838 23.2635 79.9702 24.4046 80.6619 25.8842C81.3793 27.3388 81.738 29.019 81.738 30.925C81.738 32.831 81.3793 34.5112 80.6619 35.9658C79.9702 37.3952 78.9966 38.4987 77.7413 39.2761C76.4859 40.0536 75.0384 40.4423 73.3987 40.4423C72.1177 40.4423 70.952 40.1915 69.9016 39.6899C68.8768 39.1633 68.0825 38.436 67.5189 37.5081V45.9454C67.5189 46.4795 67.0859 46.9125 66.5517 46.9125C63.881 46.9125 61.716 44.7475 61.716 42.0768V22.7808C61.716 22.1679 62.2128 21.671 62.8257 21.671H66.3323C66.9452 21.671 67.442 22.1679 67.442 22.7808V24.2667C68.0057 23.3137 68.8127 22.5739 69.8631 22.0472C70.9135 21.4955 72.0921 21.2196 73.3987 21.2196ZM71.7078 36.1162C73.0656 36.1162 74.116 35.6774 74.859 34.7996C75.602 33.8968 75.9735 32.6053 75.9735 30.925C75.9735 29.2197 75.602 27.903 74.859 26.9751C74.116 26.0222 73.0656 25.5457 71.7078 25.5457C70.3499 25.5457 69.2995 26.0096 68.5565 26.9375C67.8135 27.8403 67.442 29.1444 67.442 30.8498C67.442 32.53 67.8135 33.8341 68.5565 34.762C69.2995 35.6648 70.3499 36.1162 71.7078 36.1162Z" fill="#605DEC"></path>
  <path d="M105.866 21.2196C108.018 21.2196 109.619 21.8591 110.669 23.1381C111.72 24.4171 112.245 26.3733 112.245 29.0065V37.9219C112.245 39.1477 111.251 40.1413 110.026 40.1413H108.662C107.436 40.1413 106.442 39.1477 106.442 37.9219V29.1946C106.442 27.9407 106.237 27.0378 105.827 26.4861C105.443 25.9344 104.777 25.6585 103.829 25.6585C102.028 25.6585 101.399 27.3409 101.399 29.9469V37.9219C101.399 39.1477 100.406 40.1413 99.1798 40.1413H97.8158C96.59 40.1413 95.5964 39.1477 95.5964 37.9219V29.1946C95.5964 27.9407 95.3914 27.0378 94.9815 26.4861C94.5972 25.9344 93.9311 25.6585 92.9831 25.6585C91.1824 25.6585 90.5535 27.3409 90.5535 29.9469V37.9219C90.5535 39.1477 89.5598 40.1413 88.3341 40.1413H86.97C85.7443 40.1413 84.7506 39.1477 84.7506 37.9219V25.0002C84.7506 23.1616 86.2411 21.671 88.0798 21.671H89.2901C89.9029 21.671 90.3998 22.1679 90.3998 22.7808V24.1538C91.6699 22.0998 92.2412 21.2196 95.0968 21.2196C97.8894 21.2196 99.7596 22.3607 100.708 24.6428C102.015 22.4031 102.834 21.2196 105.866 21.2196Z" fill="#605DEC"></path>
  <path d="M123.927 21.2196C126.745 21.2196 128.821 21.8717 130.153 23.1757C131.511 24.4798 132.19 26.4986 132.19 29.2322V37.3394C132.19 39.178 130.699 40.6685 128.861 40.6685H126.694V37.3952C126.31 38.3482 125.669 39.1006 124.773 39.6523C123.876 40.179 122.826 40.4423 121.622 40.4423C120.341 40.4423 119.175 40.1915 118.124 39.6899C117.1 39.1884 116.28 38.4862 115.665 37.5833C115.076 36.6805 114.781 35.6774 114.781 34.5739C114.781 33.2197 115.127 32.1538 115.819 31.3764C116.536 30.599 117.676 30.0347 119.239 29.6836C120.802 29.3325 122.941 29.157 125.657 29.157H126.656V28.4798C126.656 27.3764 126.412 26.599 125.926 26.1475C125.439 25.6961 124.593 25.4704 123.389 25.4704C122.467 25.4704 121.442 25.6334 120.315 25.9595C119.941 26.0676 119.572 26.1896 119.21 26.3254C118.046 26.7612 116.674 26.2931 116.208 25.1409C115.828 24.2033 116.182 23.1171 117.112 22.7189C117.834 22.4095 118.633 22.1354 119.508 21.8967C121.096 21.4453 122.569 21.2196 123.927 21.2196ZM122.89 36.53C124.017 36.53 124.926 36.1664 125.618 35.4391C126.31 34.6868 126.656 33.7212 126.656 32.5426V31.9031H126.003C123.927 31.9031 122.467 32.0661 121.622 32.3921C120.802 32.7181 120.392 33.3074 120.392 34.1601C120.392 34.8372 120.622 35.4015 121.083 35.8529C121.57 36.3043 122.172 36.53 122.89 36.53Z" fill="#605DEC"></path>
  <path d="M57.2835 16.95C57.2835 18.4822 56.0414 19.7243 54.5092 19.7243C52.977 19.7243 51.7349 18.4822 51.7349 16.95C51.7349 15.4178 52.977 14.1757 54.5092 14.1757C56.0414 14.1757 57.2835 15.4178 57.2835 16.95Z" fill="#605DEC"></path>
</svg>
'
              css={{}}
            />
          </div>
          <div
            css={{
              display: "flex",
              padding: "17.756px",
              alignItems: "center",
              gap: "17.756px",
              "@media (max-width: 640px)": {
                display: "none",
              },
            }}
          >
            <div
              css={{
                color: "#7C8DB0",
                textAlign: "center",
                padding: "11.097px",
                gap: "11.097px",
                font: "400 16px 'Nunito Sans' ",
              }}
            >
              Flights
            </div>
            <div
              css={{
                color: "#7C8DB0",
                textAlign: "center",
                padding: "11.097px",
                gap: "11.097px",
                font: "400 16px 'Nunito Sans' ",
              }}
            >
              Hotels
            </div>
            <div
              css={{
                color: "#7C8DB0",
                textAlign: "center",
                padding: "11.097px",
                gap: "11.097px",
                font: "400 16px 'Nunito Sans' ",
              }}
            >
              Packages
            </div>
            <div
              css={{
                color: "#7C8DB0",
                textAlign: "center",
                padding: "11.097px",
                gap: "11.097px",
                font: "400 16px 'Nunito Sans' ",
              }}
            >
              Sign in
            </div>
            <div
              css={{
                color: "#FAFAFA",
                height: "53px",
                padding: "13.317px 22.194px",
                gap: "8.878px",
                borderRadius: "4.439px",
                backgroundColor: "#605DEC",
                font: "400 16px 'Nunito Sans' ",
              }}
            >
              Sign up
            </div>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            width: "100%",
            padding: "0 107px",
            gap: "50px",
            "@media (max-width: 991px)": {
              flexDirection: "column",
              padding: "0 50px",
            },
            "@media (max-width: 640px)": {
              padding: "0 20px",
            },
          }}
        >
          <div
            css={{
              left: "section",
              flex: "1",
              maxWidth: "850px",
            }}
          >
            <div
              css={{
                color: "#605DEC",
                marginBottom: "20px",
                "@media (max-width: 640px)": {
                  fontSize: "24px",
                },
                font: "700 27px 'Nunito Sans' ",
              }}
            >
              Passenger information
            </div>
            <div
              css={{
                width: "757px",
                color: "#7C8DB0",
                marginBottom: "40px",
                "@media (max-width: 991px)": {
                  width: "100%",
                },
                "@media (max-width: 640px)": {
                  fontSize: "16px",
                },
                font: "400 20px 'Nunito Sans' ",
              }}
            >
              Enter the required information for each traveler and be sure that
              it exactly matches the government-issued ID presented at the
              airport.
            </div>
            <div
              css={{
                marginBottom: "60px",
              }}
            >
              <div
                css={{
                  color: "#6E7491",
                  marginBottom: "20px",
                  "@media (max-width: 640px)": {
                    fontSize: "18px",
                  },
                  font: "600 20px 'Nunito Sans' ",
                }}
              >
                Passenger 1 (Adult)
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "26px",
                  marginBottom: "26px",
                  "@media (max-width: 991px)": {
                    flexWrap: "wrap",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "222px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Sophia
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "222px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#7C8DB0",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Middle
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "222px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Knowles
                  </div>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "26px",
                  marginBottom: "26px",
                  "@media (max-width: 991px)": {
                    flexWrap: "wrap",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "222px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#7C8DB0",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Suffix
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "280px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    11/11/1989
                  </div>
                  <div
                    css={{
                      color: "#7C8DB0",
                      padding: "2.219px 4.439px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      font: "400 12px 'Nunito Sans' ",
                    }}
                  >
                    MM/DD/YY
                  </div>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "26px",
                  marginBottom: "26px",
                  "@media (max-width: 991px)": {
                    flexWrap: "wrap",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    sophiaknowles89@tripma.com
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    123-456-7890
                  </div>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "26px",
                  marginBottom: "26px",
                  "@media (max-width: 991px)": {
                    flexWrap: "wrap",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#7C8DB0",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Redress number
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    123456789
                  </div>
                </div>
              </div>
            </div>
            <div
              css={{
                marginBottom: "60px",
              }}
            >
              <div
                css={{
                  color: "#6E7491",
                  marginBottom: "20px",
                  "@media (max-width: 640px)": {
                    fontSize: "18px",
                  },
                  font: "600 20px 'Nunito Sans' ",
                }}
              >
                Emergency contact information
              </div>
              <div
                css={{
                  marginBottom: "20px",
                }}
              >
                <div
                  css={{
                    display: "inline-flex",
                    padding: "4.439px 0px",
                    alignItems: "center",
                    gap: "8.878px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      width: "18px",
                      height: "18px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      border: "1.11px solid #6E7491",
                    }}
                  >
                    <div
                      css={{
                        width: "9px",
                        height: "9px",
                        borderRadius: "1.11px",
                        backgroundColor: "#605DEC",
                      }}
                    />
                  </div>
                  <span
                    css={{
                      color: "#6E7491",
                      font: "400 16px 'Nunito Sans' ",
                    }}
                  >
                    Same as Passenger 1
                  </span>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "26px",
                  marginBottom: "26px",
                  "@media (max-width: 991px)": {
                    flexWrap: "wrap",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Sophia
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    Knowles
                  </div>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "26px",
                  marginBottom: "26px",
                  "@media (max-width: 991px)": {
                    flexWrap: "wrap",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#36374A",
                      textDecoration: "underline",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 20px 'Nunito Sans' ",
                    }}
                  >
                    Email address*
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "333px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4.439px",
                    "@media (max-width: 991px)": {
                      width: "100%",
                      minWidth: "250px",
                    },
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      height: "36px",
                      flex: "1 0 0",
                      color: "#000",
                      padding: "8.878px 13.317px",
                      gap: "8.878px",
                      alignSelf: "stretch",
                      borderRadius: "4.439px",
                      border: "1.11px solid #A1B0CC",
                      backgroundColor: "#FFF",
                      font: "400 18px 'Nunito Sans' ",
                    }}
                  >
                    123-456-7890
                  </div>
                </div>
              </div>
            </div>
            <div
              css={{
                marginBottom: "60px",
              }}
            >
              <div
                css={{
                  color: "#6E7491",
                  marginBottom: "20px",
                  "@media (max-width: 640px)": {
                    fontSize: "18px",
                  },
                  font: "600 20px 'Nunito Sans' ",
                }}
              >
                Bag information
              </div>
              <div
                css={{
                  width: "757px",
                  color: "#7C8DB0",
                  marginBottom: "40px",
                  "@media (max-width: 991px)": {
                    width: "100%",
                  },
                  font: "400 20px 'Nunito Sans' ",
                }}
              >
                <span css={{}}>
                  Each passenger is allowed one free carry-on bag and one
                  personal item. First checked bag for each passenger is also
                  free. Second bag check fees are waived for loyalty program
                  members. See the
                </span>
                <span
                  css={{
                    color: "#605DEC",
                  }}
                >
                  full bag policy
                </span>
                <span css={{}}>.</span>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "380px",
                  marginBottom: "20px",
                  "@media (max-width: 991px)": {
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "flex-start",
                  },
                }}
              >
                <div
                  css={{
                    color: "#7C8DB0",
                    font: "600 20px 'Nunito Sans' ",
                  }}
                >
                  Passenger 1
                </div>
                <div
                  css={{
                    color: "#7C8DB0",
                    font: "600 20px 'Nunito Sans' ",
                  }}
                >
                  Checked bags
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "380px",
                  "@media (max-width: 991px)": {
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "flex-start",
                  },
                }}
              >
                <div
                  css={{
                    color: "#6E7491",
                    font: "600 20px 'Nunito Sans' ",
                  }}
                >
                  Sophia Knowles
                </div>
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "4.439px",
                      backgroundColor: "#FAFAFA",
                    }}
                  >
                    <div css={{}}>
                      <div
                        innerHTML='<svg id="I60:10931;871:95" layer-name="32 / plus" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="minus-icon">
<path d="M10.4002 17.2178H25.9364C26.5492 17.2178 27.0461 17.7146 27.0461 18.3275C27.0461 18.9404 26.5492 19.4372 25.9364 19.4372L10.4002 19.4372C9.78737 19.4372 9.29053 18.9404 9.29053 18.3275C9.29053 17.7146 9.78737 17.2178 10.4002 17.2178Z" fill="#605DEC"></path>
</svg>'
                        css={{}}
                      />
                    </div>
                  </div>
                  <div
                    css={{
                      width: "28px",
                      height: "40px",
                      color: "#6E7491",
                      textAlign: "center",
                      font: "400 20px 'Nunito Sans' ",
                    }}
                  >
                    1
                  </div>
                  <div
                    css={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "4.439px",
                      backgroundColor: "#FAFAFA",
                    }}
                  >
                    <div css={{}}>
                      <div
                        innerHTML='<svg id="I60:10932;871:92" layer-name="32 / plus" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus-icon">
<path d="M16.8242 17.2178V10.5594C16.8242 9.94655 17.321 9.44971 17.9339 9.44971C18.5468 9.44971 19.0437 9.94655 19.0437 10.5594V17.2178L25.702 17.2178C26.3149 17.2178 26.8117 17.7146 26.8117 18.3275C26.8117 18.9404 26.3149 19.4372 25.702 19.4372L19.0437 19.4372V26.0955C19.0437 26.7084 18.5468 27.2053 17.9339 27.2053C17.321 27.2053 16.8242 26.7084 16.8242 26.0955V19.4372H10.1659C9.55299 19.4372 9.05615 18.9404 9.05615 18.3275C9.05615 17.7146 9.55299 17.2178 10.1659 17.2178H16.8242Z" fill="#605DEC"></path>
</svg>'
                        css={{}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={{
                width: "424px",
                height: "583px",
                position: "relative",
                margin: "60px 0",
                "@media (max-width: 991px)": {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <div
                css={{
                  width: "415px",
                  height: "498px",
                  position: "relative",
                }}
              >
                <div css={{}}>
                  <div
                    innerHTML='<svg id="I60:10913;747:1165" layer-name="suitcase" width="221" height="460" viewBox="0 0 221 460" fill="none" xmlns="http://www.w3.org/2000/svg" class="suitcase" style="width: 220px; height: 455px; flex-shrink: 0; position: absolute; left: 162px; top: 22px">
  <circle cx="65.6447" cy="444.956" r="13.2812" fill="url(#paint0_linear_2503_151)"></circle>
  <circle cx="65.6447" cy="444.956" r="11.621" stroke="#393956" stroke-opacity="0.5" stroke-width="3.32029"></circle>
  <circle cx="13.2812" cy="13.2812" r="13.2812" transform="matrix(-1 0 0 1 167.328 431.675)" fill="url(#paint1_linear_2503_151)"></circle>
  <circle cx="13.2812" cy="13.2812" r="11.621" transform="matrix(-1 0 0 1 167.328 431.675)" stroke="#393956" stroke-opacity="0.5" stroke-width="3.32029"></circle>
  <circle cx="28.2909" cy="444.956" r="13.2812" fill="url(#paint2_linear_2503_151)"></circle>
  <circle cx="28.2909" cy="444.956" r="11.621" stroke="#393956" stroke-opacity="0.5" stroke-width="3.32029"></circle>
  <circle cx="13.2812" cy="13.2812" r="13.2812" transform="matrix(-1 0 0 1 208.832 431.675)" fill="url(#paint3_linear_2503_151)"></circle>
  <circle cx="13.2812" cy="13.2812" r="11.621" transform="matrix(-1 0 0 1 208.832 431.675)" stroke="#393956" stroke-opacity="0.5" stroke-width="3.32029"></circle>
  <rect x="0.0688477" y="169.372" width="208.348" height="265.623" rx="26.5623" fill="url(#paint4_linear_2503_151)"></rect>
  <path d="M0.0688477 192.809C0.0688477 179.865 10.5621 169.372 23.5062 169.372H195.966C202.842 169.372 208.417 174.947 208.417 181.823C208.417 188.7 202.842 194.274 195.966 194.274H1.53367C0.724669 194.274 0.0688477 193.618 0.0688477 192.809Z" fill="#5CD6C0"></path>
  <path d="M0.0688477 411.558C0.0688477 424.502 10.5621 434.996 23.5062 434.996H195.966C202.842 434.996 208.417 429.421 208.417 422.545C208.417 415.668 202.842 410.093 195.966 410.093H1.53367C0.724669 410.093 0.0688477 410.749 0.0688477 411.558Z" fill="#24AD94"></path>
  <path d="M152.802 192.278C152.802 178.711 164.695 169.372 179.365 169.372H193.476C208.146 169.372 220.038 178.711 220.038 192.278V412.089C220.038 425.657 208.146 434.995 193.476 434.995H179.365C164.695 434.995 152.802 425.657 152.802 412.089V192.278Z" fill="url(#paint5_linear_2503_151)"></path>
  <path d="M193.476 169.372H179.365C164.695 169.372 152.802 178.711 152.802 192.278V194.274H220.038V192.278C220.038 178.711 208.146 169.372 193.476 169.372Z" fill="#1FAD94"></path>
  <path d="M193.476 434.996H179.365C164.695 434.996 152.802 425.657 152.802 412.089V410.093H220.038V412.089C220.038 425.657 208.146 434.996 193.476 434.996Z" fill="#149F88"></path>
  <rect opacity="0.5" x="13.3501" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint6_linear_2503_151)"></rect>
  <rect opacity="0.5" x="28.2913" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint7_linear_2503_151)"></rect>
  <rect opacity="0.5" x="43.2327" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint8_linear_2503_151)"></rect>
  <rect opacity="0.5" x="58.1738" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint9_linear_2503_151)"></rect>
  <rect opacity="0.5" x="73.1152" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint10_linear_2503_151)"></rect>
  <rect opacity="0.5" x="88.0564" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint11_linear_2503_151)"></rect>
  <rect opacity="0.5" x="102.998" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint12_linear_2503_151)"></rect>
  <rect opacity="0.5" x="117.939" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint13_linear_2503_151)"></rect>
  <rect opacity="0.5" x="132.88" y="210.876" width="6.64058" height="182.616" rx="3.32029" fill="url(#paint14_linear_2503_151)"></rect>
  <path d="M187.64 270.224C187.005 266.252 190.042 262.34 194.064 262.34C196.681 262.34 198.968 264.04 199.488 266.605C200.463 271.412 201.777 280.262 201.777 293.053C201.777 305.844 200.463 314.694 199.488 319.501C198.968 322.066 196.681 323.766 194.064 323.766C190.042 323.766 187.005 319.854 187.64 315.882C188.478 310.639 189.325 302.905 189.325 293.053C189.325 283.201 188.478 275.467 187.64 270.224Z" fill="url(#paint15_linear_2503_151)"></path>
  <path d="M192.347 327.033C195.501 327.458 200.302 325.496 200.688 322.337C200.808 321.362 200.531 320.372 199.757 319.768C198.596 318.862 196.505 317.637 193.366 317.253C190.228 316.869 187.903 317.553 186.558 318.152C185.661 318.552 185.153 319.446 185.034 320.421C184.647 323.58 188.833 326.642 191.997 326.99C192.055 326.996 192.113 327.003 192.172 327.01C192.23 327.017 192.289 327.025 192.347 327.033Z" fill="#4CE0C5"></path>
  <path d="M192.35 260.141C189.195 260.562 185.081 263.72 185.541 266.87C185.683 267.841 186.211 268.724 187.117 269.102C188.476 269.67 190.816 270.3 193.944 269.843C197.073 269.387 199.135 268.114 200.275 267.181C201.035 266.559 201.289 265.563 201.147 264.591C200.687 261.442 195.842 259.591 192.699 260.09C192.641 260.099 192.583 260.108 192.524 260.117C192.466 260.125 192.408 260.133 192.35 260.141Z" fill="#4CE0C5"></path>
  <rect x="94.697" y="36.5605" width="9.96087" height="132.812" fill="url(#paint16_linear_2503_151)"></rect>
  <rect x="94.697" y="36.5605" width="9.96087" height="132.812" fill="url(#paint17_linear_2503_151)"></rect>
  <rect x="153.632" y="36.5605" width="9.96087" height="132.812" fill="url(#paint18_linear_2503_151)"></rect>
  <rect x="153.632" y="36.5605" width="9.96087" height="132.812" fill="url(#paint19_linear_2503_151)"></rect>
  <path d="M114.619 14.1488C113.702 14.1488 112.959 13.4056 112.959 12.4887V7.50825C112.959 3.84076 115.932 0.867676 119.599 0.867676H138.691C142.358 0.867676 145.332 3.84076 145.332 7.50825V12.4887C145.332 13.4056 144.588 14.1488 143.671 14.1488H114.619Z" fill="url(#paint20_linear_2503_151)"></path>
  <path d="M94.697 42.3713C93.7801 42.3713 93.0369 41.628 93.0369 40.7112V11.6586C93.0369 7.99115 96.01 5.01807 99.6774 5.01807H158.613C162.28 5.01807 165.253 7.99115 165.253 11.6586V40.7112C165.253 41.628 164.51 42.3713 163.593 42.3713H153.632C152.715 42.3713 151.972 41.628 151.972 40.7112V21.6195C151.972 19.7858 150.485 18.2992 148.652 18.2992H109.638C107.805 18.2992 106.318 19.7858 106.318 21.6195V40.7112C106.318 41.628 105.575 42.3713 104.658 42.3713H94.697Z" fill="url(#paint21_linear_2503_151)"></path>
  <defs>
    <linearGradient id="paint0_linear_2503_151" x1="65.6447" y1="431.675" x2="65.6447" y2="458.238" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8CABCA"></stop>
      <stop offset="1" stop-color="#4E8393"></stop>
    </linearGradient>
    <linearGradient id="paint1_linear_2503_151" x1="13.2812" y1="0" x2="13.2812" y2="26.5623" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8CABCA"></stop>
      <stop offset="1" stop-color="#4E8393"></stop>
    </linearGradient>
    <linearGradient id="paint2_linear_2503_151" x1="28.2909" y1="431.675" x2="28.2909" y2="458.238" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8CABCA"></stop>
      <stop offset="1" stop-color="#4E8393"></stop>
    </linearGradient>
    <linearGradient id="paint3_linear_2503_151" x1="13.2812" y1="0" x2="13.2812" y2="26.5623" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8CABCA"></stop>
      <stop offset="1" stop-color="#4E8393"></stop>
    </linearGradient>
    <linearGradient id="paint4_linear_2503_151" x1="27.4612" y1="169.372" x2="104.243" y2="434.995" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5CD6C0"></stop>
      <stop offset="1" stop-color="#1FB297"></stop>
    </linearGradient>
    <linearGradient id="paint5_linear_2503_151" x1="152.802" y1="327.916" x2="236.386" y2="323.308" gradientUnits="userSpaceOnUse">
      <stop stop-color="#12A58B"></stop>
      <stop offset="1" stop-color="#22C3B3"></stop>
    </linearGradient>
    <linearGradient id="paint6_linear_2503_151" x1="13.3501" y1="300.687" x2="19.9907" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint7_linear_2503_151" x1="28.2913" y1="300.687" x2="34.9318" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint8_linear_2503_151" x1="43.2327" y1="300.687" x2="49.8732" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint9_linear_2503_151" x1="58.1738" y1="300.687" x2="64.8144" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint10_linear_2503_151" x1="73.1152" y1="300.687" x2="79.7558" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint11_linear_2503_151" x1="88.0564" y1="300.687" x2="94.697" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint12_linear_2503_151" x1="102.998" y1="300.687" x2="109.638" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint13_linear_2503_151" x1="117.939" y1="300.687" x2="124.58" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint14_linear_2503_151" x1="132.88" y1="300.687" x2="139.521" y2="300.687" gradientUnits="userSpaceOnUse">
      <stop stop-color="#29A38D"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint15_linear_2503_151" x1="193.891" y1="262.34" x2="193.891" y2="323.766" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5CD6C0"></stop>
      <stop offset="1" stop-color="#22C3A6"></stop>
    </linearGradient>
    <linearGradient id="paint16_linear_2503_151" x1="94.697" y1="105.563" x2="104.658" y2="105.563" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C4C4C4"></stop>
      <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"></stop>
    </linearGradient>
    <linearGradient id="paint17_linear_2503_151" x1="94.697" y1="102.966" x2="104.658" y2="102.966" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B0C6DC"></stop>
      <stop offset="0.604167" stop-color="#A5BBCB"></stop>
      <stop offset="0.760417" stop-color="#95ABB3"></stop>
      <stop offset="1" stop-color="#91A7AD"></stop>
    </linearGradient>
    <linearGradient id="paint18_linear_2503_151" x1="153.632" y1="105.563" x2="163.593" y2="105.563" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C4C4C4"></stop>
      <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"></stop>
    </linearGradient>
    <linearGradient id="paint19_linear_2503_151" x1="153.632" y1="102.966" x2="163.593" y2="102.966" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B0C6DC"></stop>
      <stop offset="0.604167" stop-color="#A5BBCB"></stop>
      <stop offset="0.760417" stop-color="#95ABB3"></stop>
      <stop offset="1" stop-color="#91A7AD"></stop>
    </linearGradient>
    <linearGradient id="paint20_linear_2503_151" x1="113.789" y1="1.69775" x2="146.162" y2="4.18796" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6B94BD"></stop>
      <stop offset="0.375" stop-color="#5E8DBA"></stop>
      <stop offset="0.719177" stop-color="#4B78A0"></stop>
      <stop offset="1" stop-color="#254F74"></stop>
    </linearGradient>
    <linearGradient id="paint21_linear_2503_151" x1="93.0369" y1="23.6947" x2="165.253" y2="23.6947" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5E87B0"></stop>
      <stop offset="0.411458" stop-color="#5A88B2"></stop>
      <stop offset="0.92626" stop-color="#49799C"></stop>
      <stop offset="0.952589" stop-color="#336375"></stop>
      <stop offset="1" stop-color="#19414D"></stop>
    </linearGradient>
  </defs>
</svg>'
                    css={{}}
                  />
                </div>
                <div
                  css={{
                    width: "201px",
                    height: "199px",
                    position: "absolute",
                    left: "34px",
                    top: "277px",
                  }}
                >
                  <div css={{}}>
                    <div
                      innerHTML='<svg id="I60:10913;747:1197" layer-name="body" width="196" height="200" viewBox="0 0 196 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="backpack-body" style="width: 195px; height: 199px; flex-shrink: 0; position: absolute; left: 6px; top: 0px">
<path d="M185.198 164.205V75.3872C185.198 15.2069 152.185 0.680664 106.341 0.680664H89.7396V83.6879V166.695C89.7396 185.033 88.0035 199.898 106.341 199.898H156.145C174.483 199.898 185.198 182.542 185.198 164.205Z" fill="url(#paint0_linear_2503_183)"></path>
<path d="M81.3948 4.41602C82.6898 4.41598 95.7281 4.66852 111.152 4.97662C142.165 5.5961 169.382 29.0123 169.382 60.0309V60.0309" stroke="#1513A0" stroke-opacity="0.5" stroke-width="6.64058" stroke-linecap="round"></path>
<path d="M188.475 119.381C190.308 119.381 191.794 120.868 191.794 122.701V166.695C191.794 183.199 178.416 196.577 161.912 196.577H124.559V119.381H188.475Z" fill="url(#paint1_linear_2503_183)" stroke="url(#paint2_linear_2503_183)" stroke-width="6.64058"></path>
<path d="M62.3035 4.00098H87.2048C119.754 4.00098 146.14 30.3875 146.14 62.9365V166.695C146.14 183.199 132.761 196.578 116.258 196.578H33.2507C16.7471 196.578 3.36803 183.199 3.36792 166.695V62.9365C3.36792 30.3876 29.7545 4.00098 62.3035 4.00098Z" fill="url(#paint3_linear_2503_183)" stroke="url(#paint4_linear_2503_183)" stroke-width="6.64058"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M170.852 57.9556C169.213 57.9556 167.819 59.1512 167.57 60.771L165.271 75.7123C164.962 77.7236 166.518 79.5374 168.553 79.5374H174.094C176.129 79.5374 177.685 77.7236 177.376 75.7123L175.077 60.771C174.828 59.1512 173.434 57.9556 171.795 57.9556H170.852ZM169.481 72.8969C169.101 72.8969 168.769 73.1561 168.676 73.5256L168.261 75.1858C168.13 75.7097 168.526 76.2172 169.066 76.2172H173.581C174.121 76.2172 174.517 75.7097 174.386 75.1858L173.971 73.5256C173.879 73.1561 173.547 72.8969 173.166 72.8969H169.481Z" fill="url(#paint5_linear_2503_183)"></path>
<defs>
<linearGradient id="paint0_linear_2503_183" x1="137.447" y1="0.680664" x2="137.447" y2="199.898" gradientUnits="userSpaceOnUse">
<stop stop-color="#605DEC"></stop>
<stop offset="1" stop-color="#2A26D9"></stop>
</linearGradient>
<linearGradient id="paint1_linear_2503_183" x1="158.176" y1="116.061" x2="158.176" y2="199.898" gradientUnits="userSpaceOnUse">
<stop stop-color="#1C18CE"></stop>
<stop offset="1" stop-color="#6F6DEE"></stop>
</linearGradient>
<linearGradient id="paint2_linear_2503_183" x1="158.176" y1="116.061" x2="158.176" y2="199.898" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F4CE6"></stop>
<stop offset="1" stop-color="#8482ED" stop-opacity="0"></stop>
</linearGradient>
<linearGradient id="paint3_linear_2503_183" x1="49.0219" y1="7.32124" x2="125.804" y2="199.898" gradientUnits="userSpaceOnUse">
<stop stop-color="#8F8DF2"></stop>
<stop offset="0.357212" stop-color="#7977E9"></stop>
<stop offset="1" stop-color="#5D5AE2"></stop>
</linearGradient>
<linearGradient id="paint4_linear_2503_183" x1="115.503" y1="199.898" x2="-43.1032" y2="92.4275" gradientUnits="userSpaceOnUse">
<stop stop-color="#7370EB"></stop>
<stop offset="1" stop-color="#B0AFF4"></stop>
</linearGradient>
<linearGradient id="paint5_linear_2503_183" x1="168.552" y1="59.2007" x2="176.023" y2="78.2923" gradientUnits="userSpaceOnUse">
<stop stop-color="#BCBAF7"></stop>
<stop offset="1" stop-color="#8F8DF2"></stop>
</linearGradient>
</defs>
</svg>'
                      css={{}}
                    />
                  </div>
                  <div css={{}}>
                    <div
                      innerHTML='<svg id="I60:10913;747:1206" layer-name="front" width="142" height="104" viewBox="0 0 142 104" fill="none" xmlns="http://www.w3.org/2000/svg" class="backpack-front" style="width: 141px; height: 101px; flex-shrink: 0; position: absolute; left: 0px; top: 93px">
<path d="M11.8584 44.8859C11.8584 22.2883 32.8714 3.96924 58.7923 3.96924H85.029C116.134 3.96924 141.35 17.6514 141.35 44.7686V87.2112C141.35 96.2503 132.944 103.578 122.576 103.578H21.2452C16.061 103.578 11.8584 99.9141 11.8584 95.3946V44.8859Z" fill="url(#paint0_linear_2503_192)"></path>
<path d="M88.6943 4.79932L89.625 4.81104C109.107 5.30454 124.748 21.2522 124.748 40.853V86.2642C124.748 92.6173 119.597 97.7671 113.244 97.7671H16.7217C10.3685 97.7671 5.21796 92.6173 5.21777 86.2642V40.853L5.22949 39.9224C5.72308 20.4406 21.6707 4.79932 41.2715 4.79932H88.6943Z" fill="url(#paint1_linear_2503_192)"></path>
<path d="M88.6943 4.79932L89.625 4.81104C109.107 5.30454 124.748 21.2522 124.748 40.853V86.2642C124.748 92.6173 119.597 97.7671 113.244 97.7671H16.7217C10.3685 97.7671 5.21796 92.6173 5.21777 86.2642V40.853L5.22949 39.9224C5.72308 20.4406 21.6707 4.79932 41.2715 4.79932H88.6943Z" fill="url(#paint2_linear_2503_192)"></path>
<path d="M88.6943 4.79932L89.625 4.81104C109.107 5.30454 124.748 21.2522 124.748 40.853V86.2642C124.748 92.6173 119.597 97.7671 113.244 97.7671H16.7217C10.3685 97.7671 5.21796 92.6173 5.21777 86.2642V40.853L5.22949 39.9224C5.72308 20.4406 21.6707 4.79932 41.2715 4.79932H88.6943Z" stroke="url(#paint3_linear_2503_192)" stroke-width="6.64058"></path>
<path opacity="0.5" d="M1.89771 41.3228L128.069 41.3228" stroke="#1513A0" stroke-width="6.64058"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M106.757 41.3228C104.736 41.3228 103.018 42.7974 102.712 44.7944L99.8946 63.1734C99.5147 65.6513 101.432 67.8851 103.939 67.8851H110.694C113.201 67.8851 115.118 65.6513 114.738 63.1734L111.921 44.7944C111.615 42.7974 109.897 41.3228 107.876 41.3228H106.757ZM105.121 59.5612C104.651 59.5612 104.241 59.8811 104.128 60.3369L103.62 62.3776C103.459 63.023 103.947 63.6478 104.612 63.6478H110.138C110.803 63.6478 111.292 63.023 111.131 62.3776L110.623 60.3369C110.509 59.8811 110.1 59.5612 109.63 59.5612H105.121Z" fill="url(#paint4_linear_2503_192)"></path>
<defs>
<linearGradient id="paint0_linear_2503_192" x1="116.863" y1="8.94967" x2="16.4238" y2="103.578" gradientUnits="userSpaceOnUse">
<stop stop-color="#5855E9"></stop>
<stop offset="0.473958" stop-color="#4642E3"></stop>
<stop offset="0.6808" stop-color="#5F5DE3"></stop>
<stop offset="1" stop-color="#7679E9"></stop>
</linearGradient>
<linearGradient id="paint1_linear_2503_192" x1="68.0618" y1="1.95338" x2="68.0618" y2="94.4471" gradientUnits="userSpaceOnUse">
<stop stop-color="#817FF0"></stop>
<stop offset="0.511799" stop-color="#6563E5"></stop>
<stop offset="1" stop-color="#5452E0"></stop>
</linearGradient>
<linearGradient id="paint2_linear_2503_192" x1="24.9584" y1="8.11963" x2="94.8708" y2="102.061" gradientUnits="userSpaceOnUse">
<stop stop-color="#8F8DF2"></stop>
<stop offset="0.476102" stop-color="#777BE9"></stop>
<stop offset="1" stop-color="#5D5AE2"></stop>
</linearGradient>
<linearGradient id="paint3_linear_2503_192" x1="95.7711" y1="94.4471" x2="22.7869" y2="8.22035" gradientUnits="userSpaceOnUse">
<stop stop-color="#7370EB"></stop>
<stop offset="1" stop-color="#B0AFF4"></stop>
</linearGradient>
<linearGradient id="paint4_linear_2503_192" x1="104.071" y1="42.8552" x2="113.29" y2="66.3299" gradientUnits="userSpaceOnUse">
<stop stop-color="#BCBAF7"></stop>
<stop offset="1" stop-color="#8F8DF2"></stop>
</linearGradient>
</defs>
</svg>'
                      css={{}}
                    />
                  </div>
                </div>
              </div>
              <div
                css={{
                  position: "relative",
                }}
              >
                <div css={{}}>
                  <div
                    innerHTML='<svg id="60:10918" layer-name="measurement" width="150" height="39" viewBox="0 0 150 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="measurement-width" style="width: 146px; height: 27px; flex-shrink: 0; position: absolute; left: 161px; top: 503px">
<path d="M1.46191 19.4791H147.945M1.46191 19.4791V12.8208M1.46191 19.4791V26.1375M147.945 19.4791V12.8208M147.945 19.4791V26.1375" stroke="#B0BED9" stroke-width="2.21944" stroke-linecap="round"></path>
<rect width="42.8778" height="38" transform="translate(52.155 0.479492)" fill="white"></rect>
<text fill="#B0BED9" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="13.3167" font-weight="500" letter-spacing="0px"><tspan x="56.7463" y="34.8069">36cm</tspan></text>
<text fill="#B0BED9" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="19.975" font-weight="500" letter-spacing="0px"><tspan x="58.3979" y="18.8069">14"
</tspan></text>
</svg>'
                    css={{}}
                  />
                </div>
                <div css={{}}>
                  <div
                    innerHTML='<svg id="60:10914" layer-name="measurement" width="87" height="39" viewBox="0 0 87 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="measurement-depth" style="width: 83px; height: 27px; flex-shrink: 0; position: absolute; left: 316px; top: 503px">
<path d="M1.82324 19.4791H85.0524M1.82324 19.4791V12.8208M1.82324 19.4791V26.1375M85.0524 19.4791V12.8208M85.0524 19.4791V26.1375" stroke="#B0BED9" stroke-width="2.21944" stroke-linecap="round"></path>
<rect width="38.4389" height="38" transform="translate(23.6633 0.479492)" fill="white"></rect>
<text fill="#B0BED9" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="13.3167" font-weight="500" letter-spacing="0px"><tspan x="26.0354" y="34.8069">23cm</tspan></text>
<text fill="#B0BED9" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="19.975" font-weight="500" letter-spacing="0px"><tspan x="33.3635" y="18.8069">9"
</tspan></text>
</svg>'
                    css={{}}
                  />
                </div>
                <div css={{}}>
                  <div
                    innerHTML='<svg id="60:10922" layer-name="measurement" width="39" height="266" viewBox="0 0 39 266" fill="none" xmlns="http://www.w3.org/2000/svg" class="measurement-height" style="width: 263px; height: 27px; transform: rotate(-90deg); flex-shrink: 0; position: absolute; left: 397px; top: 185px">
<path d="M19.1493 264.786L19.1493 1.78194M19.1493 264.786L12.491 264.786M19.1493 264.786L25.8076 264.786M19.1493 1.78194L12.491 1.78194M19.1493 1.78194L25.8076 1.78194" stroke="#B0BED9" stroke-width="2.21944" stroke-linecap="round"></path>
<g clip-path="url(#clip0_60_10922)">
<rect width="42.8778" height="38" transform="translate(0.14917 155.278) rotate(-90)" fill="white"></rect>
<text transform="translate(0.14917 150.839) rotate(-90)" fill="#B0BED9" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="13.3167" font-weight="500" letter-spacing="0px"><tspan x="0.152596" y="34.3274">56cm</tspan></text>
<text transform="translate(0.14917 150.839) rotate(-90)" fill="#B0BED9" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="19.975" font-weight="500" letter-spacing="0px"><tspan x="1.80417" y="18.3274">22"
</tspan></text>
</g>
<defs>
<clipPath id="clip0_60_10922">
<rect width="42.8778" height="38" fill="white" transform="translate(0.14917 155.278) rotate(-90)"></rect>
</clipPath>
</defs>
</svg>'
                    css={{}}
                  />
                </div>
              </div>
              <div
                css={{
                  color: "#B0BED9",
                  textAlign: "center",
                  position: "absolute",
                  left: "172px",
                  top: "567px",
                  width: "243px",
                  height: "16px",
                  font: "400 13px Roboto ",
                }}
              >
                *Dimensions include handles and wheels
              </div>
            </div>
            <div
              css={{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "26.633px",
                marginTop: "40px",
                "@media (max-width: 640px)": {
                  flexDirection: "column",
                  gap: "15px",
                  width: "100%",
                },
              }}
            >
              <div
                css={{
                  color: "#605DEC",
                  height: "53px",
                  padding: "13.317px 22.194px",
                  gap: "8.878px",
                  borderRadius: "4.439px",
                  border: "1.11px solid #605DEC",
                  "@media (max-width: 640px)": {
                    width: "100%",
                  },
                  font: "400 18px 'Nunito Sans' ",
                }}
              >
                Save and close
              </div>
              <div
                css={{
                  color: "#FAFAFA",
                  userSelect: "button",
                  height: "53px",
                  padding: "13.317px 22.194px",
                  gap: "8.878px",
                  borderRadius: "4.439px",
                  "@media (max-width: 640px)": {
                    width: "100%",
                  },
                  backgroundColor: "#605DEC",
                  font: "400 18px 'Nunito Sans' ",
                }}
              >
                Select seats
              </div>
            </div>
          </div>
          <div
            css={{
              right: "section",
              width: "444px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "20px",
              "@media (max-width: 991px)": {
                width: "100%",
                alignItems: "center",
              },
            }}
          >
            <div
              css={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: "444px",
                borderRadius: "13.317px",
                border: "1.11px solid #E9E8FC",
                "@media (max-width: 991px)": {
                  width: "100%",
                  maxWidth: "500px",
                },
                "@media (max-width: 640px)": {
                  width: "100%",
                },
                backgroundColor: "#FFF",
              }}
            >
              <div
                css={{
                  display: "flex",
                  padding: "17.756px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8.878px",
                  width: "100%",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    width: "408px",
                    padding: "8.878px",
                    alignItems: "flex-start",
                    gap: "8.878px",
                    "@media (max-width: 640px)": {
                      width: "100%",
                      flexWrap: "wrap",
                      gap: "15px",
                    },
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      width: "44px",
                      height: "44px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <RawImg
                      $name="airline-image"
                      image="https://cdn.builder.io/api/v1/image/assets/TEMP/a07a341bf612ef18ff07c4174045d6f54e48f8dc?placeholderIfAbsent=true"
                      altText="Hawaiian Airlines"
                      css={{
                        width: "44px",
                        height: "44px",
                      }}
                    />
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4.439px",
                      flex: "1 0 0",
                      "@media (max-width: 640px)": {
                        flex: "none",
                        width: "100%",
                      },
                    }}
                  >
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#27273F",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      Hawaiian Airlines
                    </div>
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#7C8DB0",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      FIG4312
                    </div>
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4.439px",
                      flex: "1 0 0",
                      "@media (max-width: 640px)": {
                        flex: "none",
                        width: "100%",
                      },
                    }}
                  >
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#27273F",
                        textAlign: "right",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      16h 45m (+1d)
                    </div>
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#27273F",
                        textAlign: "right",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      7:00 AM - 4:15 PM
                    </div>
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#7C8DB0",
                        textAlign: "right",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      2h 45m in HNL
                    </div>
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "408px",
                    padding: "4.439px 0px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "11.097px",
                    backgroundColor: "#FFF",
                  }}
                >
                  <div
                    css={{
                      height: "1px",
                      alignSelf: "stretch",
                      backgroundColor: "#E9E8FC",
                    }}
                  />
                </div>
                <div
                  css={{
                    display: "flex",
                    width: "408px",
                    padding: "8.878px",
                    alignItems: "flex-start",
                    gap: "8.878px",
                    "@media (max-width: 640px)": {
                      width: "100%",
                      flexWrap: "wrap",
                      gap: "15px",
                    },
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      width: "44px",
                      height: "44px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <RawImg
                      $name="airline-image"
                      image="https://cdn.builder.io/api/v1/image/assets/TEMP/64d5febf03e16c74d9e716f59fcd2db771cd584c?placeholderIfAbsent=true"
                      altText="Hawaiian Airlines"
                      css={{
                        width: "44px",
                        height: "44px",
                      }}
                    />
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4.439px",
                      flex: "1 0 0",
                      "@media (max-width: 640px)": {
                        flex: "none",
                        width: "100%",
                      },
                    }}
                  >
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#27273F",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      Hawaiian Airlines
                    </div>
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#7C8DB0",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      FIG4312
                    </div>
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4.439px",
                      flex: "1 0 0",
                      "@media (max-width: 640px)": {
                        flex: "none",
                        width: "100%",
                      },
                    }}
                  >
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#27273F",
                        textAlign: "right",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      16h 45m (+1d)
                    </div>
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#27273F",
                        textAlign: "right",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      7:00 AM - 4:15 PM
                    </div>
                    <div
                      css={{
                        alignSelf: "stretch",
                        color: "#7C8DB0",
                        textAlign: "right",
                        font: "400 16px 'Nunito Sans' ",
                      }}
                    >
                      2h 45m in HNL
                    </div>
                  </div>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  padding: "17.756px",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  gap: "44.389px",
                  width: "100%",
                  "@media (max-width: 640px)": {
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "stretch",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8.878px",
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      width: "133px",
                      color: "#27273F",
                      textAlign: "right",
                      "@media (max-width: 640px)": {
                        textAlign: "left",
                        width: "100%",
                      },
                      font: "600 16px 'Nunito Sans' ",
                    }}
                  >
                    Subtotal
                  </div>
                  <div
                    css={{
                      width: "133px",
                      color: "#27273F",
                      textAlign: "right",
                      "@media (max-width: 640px)": {
                        textAlign: "left",
                        width: "100%",
                      },
                      font: "600 16px 'Nunito Sans' ",
                    }}
                  >
                    Taxes and Fees
                  </div>
                  <div
                    css={{
                      width: "133px",
                      color: "#27273F",
                      textAlign: "right",
                      "@media (max-width: 640px)": {
                        textAlign: "left",
                        width: "100%",
                      },
                      font: "600 16px 'Nunito Sans' ",
                    }}
                  >
                    Total
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "8.878px",
                    "@media (max-width: 640px)": {
                      width: "100%",
                    },
                  }}
                >
                  <div
                    css={{
                      color: "#27273F",
                      textAlign: "right",
                      "@media (max-width: 640px)": {
                        textAlign: "left",
                        width: "100%",
                      },
                      font: "600 16px 'Nunito Sans' ",
                    }}
                  >
                    $503
                  </div>
                  <div
                    css={{
                      color: "#27273F",
                      textAlign: "right",
                      "@media (max-width: 640px)": {
                        textAlign: "left",
                        width: "100%",
                      },
                      font: "600 16px 'Nunito Sans' ",
                    }}
                  >
                    $121
                  </div>
                  <div
                    css={{
                      color: "#27273F",
                      textAlign: "right",
                      "@media (max-width: 640px)": {
                        textAlign: "left",
                        width: "100%",
                      },
                      font: "600 16px 'Nunito Sans' ",
                    }}
                  >
                    $624
                  </div>
                </div>
              </div>
            </div>
            <div
              css={{
                color: "#FAFAFA",
                userSelect: "seats",
                height: "53px",
                padding: "13.317px 22.194px",
                gap: "8.878px",
                borderRadius: "4.439px",
                width: "153px",
                backgroundColor: "#605DEC",
                font: "400 18px 'Nunito Sans' ",
              }}
            >
              Select seats
            </div>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            width: "100%",
            padding: "17.756px 0px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "18.865px",
            marginTop: "100px",
            backgroundColor: "#FFF",
          }}
        >
          <div
            css={{
              display: "flex",
              padding: "66.583px 133.167px 26.633px 133.167px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              alignSelf: "stretch",
              "@media (max-width: 991px)": {
                flexWrap: "wrap",
                gap: "40px",
                padding: "40px 50px 20px 50px",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                padding: "30px 20px 15px 20px",
                gap: "30px",
              },
            }}
          >
            <div css={{}}>
              <div
                innerHTML='<svg id="I60:10901;844:19865" layer-name="Wordmark" width="147" height="61" viewBox="0 0 147 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-logo" style="width: 145.374px; height: 59.925px">
<path d="M22.4759 18.5514H13.9829V13.7739H36.964V18.5514H28.471V39.2952C28.471 39.8471 28.0237 40.2944 27.4718 40.2944C24.7127 40.2944 22.4759 38.0577 22.4759 35.2985V18.5514Z" fill="#605DEC"></path>
<path d="M49.9103 23.8889C49.9983 25.0857 49.1192 26.1357 47.9256 26.2594L46.8018 26.3759C45.1877 26.5263 44.0476 26.9777 43.3815 27.7301C42.7154 28.4574 42.3823 29.4354 42.3823 30.6643V39.1847C42.3823 39.7976 41.8855 40.2944 41.2726 40.2944H38.7989C37.5731 40.2944 36.5794 39.3007 36.5794 38.075V22.9338C36.5794 22.321 37.0763 21.8241 37.6891 21.8241H41.042C41.6549 21.8241 42.1518 22.321 42.1518 22.9338V24.9464C43.0997 22.8147 45.0596 21.6486 48.0315 21.4479C48.9673 21.3855 49.778 22.0899 49.8468 23.0252L49.9103 23.8889Z" fill="#605DEC"></path>
<path d="M52.0039 22.9338C52.0039 22.321 52.5008 21.8241 53.1137 21.8241H56.6971C57.31 21.8241 57.8069 22.321 57.8069 22.9338V39.1847C57.8069 39.7976 57.31 40.2944 56.6971 40.2944H54.2234C52.9976 40.2944 52.0039 39.3007 52.0039 38.075V22.9338Z" fill="#605DEC"></path>
<path d="M73.9321 21.3727C75.5462 21.3727 76.9809 21.7865 78.2363 22.6141C79.5173 23.4166 80.5036 24.5577 81.1954 26.0373C81.9127 27.4918 82.2714 29.1721 82.2714 31.0781C82.2714 32.984 81.9127 34.6643 81.1954 36.1188C80.5036 37.5483 79.5301 38.6518 78.2747 39.4292C77.0193 40.2066 75.5718 40.5954 73.9321 40.5954C72.6511 40.5954 71.4854 40.3446 70.435 39.843C69.4102 39.3163 68.616 38.5891 68.0523 37.6612V46.0984C68.0523 46.6326 67.6193 47.0656 67.0852 47.0656C64.4145 47.0656 62.2494 44.9005 62.2494 42.2298V22.9338C62.2494 22.321 62.7463 21.8241 63.3591 21.8241H66.8658C67.4786 21.8241 67.9755 22.321 67.9755 22.9338V24.4197C68.5391 23.4668 69.3461 22.7269 70.3966 22.2003C71.447 21.6486 72.6255 21.3727 73.9321 21.3727ZM72.2412 36.2693C73.5991 36.2693 74.6495 35.8304 75.3925 34.9527C76.1354 34.0499 76.5069 32.7583 76.5069 31.0781C76.5069 29.3727 76.1354 28.0561 75.3925 27.1282C74.6495 26.1752 73.5991 25.6987 72.2412 25.6987C70.8833 25.6987 69.8329 26.1627 69.0899 27.0906C68.347 27.9934 67.9755 29.2975 67.9755 31.0028C67.9755 32.6831 68.347 33.9872 69.0899 34.9151C69.8329 35.8179 70.8833 36.2693 72.2412 36.2693Z" fill="#605DEC"></path>
<path d="M106.399 21.3727C108.551 21.3727 110.152 22.0122 111.203 23.2912C112.253 24.5702 112.779 26.5263 112.779 29.1596V38.075C112.779 39.3007 111.785 40.2944 110.559 40.2944H109.195C107.969 40.2944 106.976 39.3007 106.976 38.075V29.3477C106.976 28.0937 106.771 27.1909 106.361 26.6392C105.976 26.0875 105.31 25.8116 104.362 25.8116C102.562 25.8116 101.933 27.4939 101.933 30.1V38.075C101.933 39.3007 100.939 40.2944 99.7133 40.2944H98.3493C97.1235 40.2944 96.1298 39.3007 96.1298 38.075V29.3477C96.1298 28.0937 95.9249 27.1909 95.5149 26.6392C95.1306 26.0875 94.4645 25.8116 93.5166 25.8116C91.7158 25.8116 91.087 27.4939 91.087 30.1V38.075C91.087 39.3007 90.0933 40.2944 88.8675 40.2944H87.5035C86.2777 40.2944 85.284 39.3007 85.284 38.075V25.1533C85.284 23.3146 86.7746 21.8241 88.6132 21.8241H89.8235C90.4364 21.8241 90.9332 22.321 90.9332 22.9338V24.3069C92.2033 22.2528 92.7747 21.3727 95.6302 21.3727C98.4228 21.3727 100.293 22.5138 101.241 24.7959C102.548 22.5562 103.367 21.3727 106.399 21.3727Z" fill="#605DEC"></path>
<path d="M124.461 21.3727C127.279 21.3727 129.354 22.0247 130.686 23.3288C132.044 24.6329 132.723 26.6517 132.723 29.3853V37.4924C132.723 39.3311 131.233 40.8216 129.394 40.8216H127.228V37.5483C126.843 38.5013 126.203 39.2537 125.306 39.8054C124.41 40.332 123.359 40.5954 122.155 40.5954C120.874 40.5954 119.708 40.3446 118.658 39.843C117.633 39.3414 116.813 38.6392 116.198 37.7364C115.609 36.8336 115.314 35.8304 115.314 34.727C115.314 33.3728 115.66 32.3069 116.352 31.5295C117.069 30.7521 118.209 30.1878 119.772 29.8367C121.335 29.4856 123.474 29.31 126.19 29.31H127.189V28.6329C127.189 27.5295 126.946 26.752 126.459 26.3006C125.972 25.8492 125.127 25.6235 123.923 25.6235C123 25.6235 121.976 25.7865 120.848 26.1125C120.474 26.2207 120.106 26.3427 119.743 26.4785C118.579 26.9143 117.207 26.4462 116.741 25.2939C116.362 24.3564 116.716 23.2702 117.645 22.872C118.368 22.5626 119.166 22.2885 120.041 22.0498C121.63 21.5984 123.103 21.3727 124.461 21.3727ZM123.423 36.6831C124.55 36.6831 125.46 36.3195 126.152 35.5922C126.843 34.8398 127.189 33.8743 127.189 32.6956V32.0561H126.536C124.461 32.0561 123 32.2191 122.155 32.5452C121.335 32.8712 120.925 33.4605 120.925 34.3132C120.925 34.9903 121.156 35.5546 121.617 36.006C122.104 36.4574 122.706 36.6831 123.423 36.6831Z" fill="#605DEC"></path>
<path d="M57.8169 17.1031C57.8169 18.6353 56.5748 19.8774 55.0426 19.8774C53.5104 19.8774 52.2683 18.6353 52.2683 17.1031C52.2683 15.5709 53.5104 14.3288 55.0426 14.3288C56.5748 14.3288 57.8169 15.5709 57.8169 17.1031Z" fill="#605DEC"></path>
</svg>'
                css={{}}
              />
            </div>
            <div
              css={{
                display: "flex",
                width: "222px",
                padding: "17.756px 17.756px 17.756px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8.878px",
                "@media (max-width: 991px)": {
                  width: "calc(50% - 20px)",
                  minWidth: "200px",
                },
                "@media (max-width: 640px)": {
                  width: "100%",
                },
              }}
            >
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#6E7491",
                  font: "700 18px 'Nunito Sans' ",
                }}
              >
                About
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                About Tripma
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                How it works
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Careers
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Press
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Blog
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Forum
              </div>
            </div>
            <div
              css={{
                display: "flex",
                width: "222px",
                padding: "17.756px 17.756px 17.756px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8.878px",
                "@media (max-width: 991px)": {
                  width: "calc(50% - 20px)",
                  minWidth: "200px",
                },
                "@media (max-width: 640px)": {
                  width: "100%",
                },
              }}
            >
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#6E7491",
                  font: "700 18px 'Nunito Sans' ",
                }}
              >
                Partner with us
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Partnership programs
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Affiliate program
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Connectivity partners
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Promotions and events
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Integrations
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Community
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Loyalty program
              </div>
            </div>
            <div
              css={{
                display: "flex",
                width: "222px",
                padding: "17.756px 17.756px 17.756px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8.878px",
                "@media (max-width: 991px)": {
                  width: "calc(50% - 20px)",
                  minWidth: "200px",
                },
                "@media (max-width: 640px)": {
                  width: "100%",
                },
              }}
            >
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#6E7491",
                  font: "700 18px 'Nunito Sans' ",
                }}
              >
                Support
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Help Center
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Contact us
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Privacy policy
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Terms of service
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Trust and safety
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Accessibility
              </div>
            </div>
            <div
              css={{
                display: "flex",
                width: "222px",
                padding: "17.756px 17.756px 17.756px 0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8.878px",
                "@media (max-width: 991px)": {
                  width: "calc(50% - 20px)",
                  minWidth: "200px",
                },
                "@media (max-width: 640px)": {
                  width: "100%",
                },
              }}
            >
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#6E7491",
                  font: "700 18px 'Nunito Sans' ",
                }}
              >
                Get the app
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Tripma for Android
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Tripma for iOS
              </div>
              <div
                css={{
                  padding: "4.439px",
                  gap: "11.097px",
                  alignSelf: "stretch",
                  flex: "1 0 0",
                  color: "#7C8DB0",
                  font: "400 16px 'Nunito Sans' ",
                }}
              >
                Mobile site
              </div>
              <div css={{}}>
                <div
                  innerHTML='<svg id="I60:10901;844:19857" layer-name="link / app store" width="151" height="45" viewBox="0 0 151 45" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-store-link" style="width: 149.813px; height: 44.389px; border-radius: 4.439px; border: 1.11px solid #A1A1A1; background: #000; margin-top: 13.317px">
<rect x="0.943777" y="0.98406" width="148.703" height="43.2792" rx="3.88403" fill="black"></rect>
<rect x="0.943777" y="0.98406" width="148.703" height="43.2792" rx="3.88403" stroke="#A1A1A1" stroke-width="1.10972"></rect>
<path d="M20.3541 34.5172C19.8225 34.1613 19.3504 33.7253 18.9558 33.2218C18.5253 32.7003 18.1263 32.1518 17.7598 31.5841C16.8988 30.3225 16.2255 28.9426 15.759 27.4884C15.197 25.7966 14.9238 24.1768 14.9238 22.592C14.9238 20.8235 15.306 19.2803 16.0501 17.985C16.6009 16.9712 17.4215 16.123 18.4106 15.5272C19.3661 14.9302 20.4789 14.6035 21.603 14.581C21.9964 14.581 22.4235 14.6373 22.8731 14.7499C23.1991 14.8401 23.5925 14.9865 24.0759 15.1667C24.6941 15.4033 25.0313 15.5497 25.1437 15.5835C25.5034 15.7186 25.8069 15.775 26.043 15.775C26.2228 15.775 26.4814 15.7186 26.768 15.6285C26.931 15.5722 27.2401 15.4708 27.6785 15.2793C28.1124 15.1217 28.4563 14.9865 28.7295 14.8851C29.1454 14.7612 29.5478 14.6486 29.9097 14.5922C30.3481 14.5247 30.7831 14.5021 31.2001 14.5359C31.9982 14.5922 32.7289 14.7612 33.3808 15.009C34.5273 15.4708 35.4524 16.1917 36.1426 17.2168C35.8504 17.397 35.5806 17.6065 35.3277 17.8363C34.7803 18.3206 34.316 18.8951 33.9451 19.5315C33.4617 20.3989 33.2144 21.3788 33.2212 22.3701C33.2381 23.59 33.5472 24.6623 34.1654 25.5916C34.6004 26.2674 35.1815 26.8464 35.8897 27.3217C36.2382 27.5583 36.5439 27.7216 36.8339 27.8286C36.699 28.251 36.5506 28.6622 36.3787 29.0677C35.9886 29.9767 35.5244 30.8474 34.9736 31.6697C34.488 32.3793 34.1058 32.9087 33.8158 33.2579C33.3639 33.7986 32.9278 34.2041 32.4894 34.4936C32.0061 34.8146 31.4384 34.9847 30.8573 34.9847C30.4639 35.0016 30.0705 34.9509 29.695 34.8416C29.3691 34.7346 29.0476 34.6141 28.7328 34.4778C28.4035 34.3268 28.0629 34.1984 27.7156 34.0948C27.2884 33.9822 26.8501 33.9281 26.4072 33.9292C25.9576 33.9292 25.5192 33.9855 25.1033 34.0926C24.7548 34.1917 24.4176 34.3133 24.0838 34.4586C23.6116 34.6558 23.3025 34.7853 23.1227 34.8416C22.7585 34.9498 22.3853 35.0151 22.0099 35.0387C21.4254 35.0387 20.8813 34.8698 20.3395 34.5319L20.3541 34.5172ZM28.0584 13.7238C27.2941 14.1068 26.5679 14.269 25.8406 14.2149C25.7282 13.4872 25.8406 12.7393 26.1441 11.9204C26.4139 11.222 26.7736 10.5913 27.2682 10.0281C27.7853 9.44232 28.4035 8.95797 29.1004 8.60878C29.8423 8.2258 30.5504 8.02305 31.2249 7.98926C31.3148 8.75521 31.2249 9.5099 30.9439 10.3209C30.6876 11.0418 30.3054 11.7064 29.8198 12.3034C29.3308 12.8891 28.7238 13.3735 28.0371 13.7227L28.0584 13.7238Z" fill="white"></path>
<path d="M48.8657 15.9655H51.4937C53.8183 15.9655 55.1838 14.5187 55.1838 12.0533V12.0424C55.1838 9.58782 53.8075 8.14648 51.4937 8.14648H48.8657V15.9655ZM49.8411 15.0877V9.02429H51.4287C53.2006 9.02429 54.1868 10.1026 54.1868 12.0533V12.0641C54.1868 14.004 53.2006 15.0877 51.4287 15.0877H49.8411Z" fill="white"></path>
<path d="M59.0305 16.0738C60.5856 16.0738 61.6368 14.9468 61.6368 13.1478V13.137C61.6368 11.338 60.5802 10.2218 59.0251 10.2218C57.47 10.2218 56.4188 11.3434 56.4188 13.137V13.1478C56.4188 14.9414 57.4646 16.0738 59.0305 16.0738ZM59.0359 15.2394C58.0389 15.2394 57.3833 14.4754 57.3833 13.1478V13.137C57.3833 11.8203 58.0443 11.0563 59.0251 11.0563C60.0221 11.0563 60.6723 11.8149 60.6723 13.137V13.1478C60.6723 14.47 60.0275 15.2394 59.0359 15.2394Z" fill="white"></path>
<path d="M64.1506 15.9655H65.1097L66.3777 11.6035H66.3993L67.6727 15.9655H68.6318L70.2032 10.3302H69.2712L68.1441 14.9143H68.1224L66.8437 10.3302H65.9333L64.66 14.9143H64.6383L63.5112 10.3302H62.5738L64.1506 15.9655Z" fill="white"></path>
<path d="M71.4219 15.9655H72.3647V12.6493C72.3647 11.6902 72.9445 11.0563 73.8332 11.0563C74.7001 11.0563 75.1282 11.5602 75.1282 12.4759V15.9655H76.071V12.3079C76.071 11.0237 75.3558 10.2218 74.1204 10.2218C73.2642 10.2218 72.6899 10.6065 72.3864 11.1321H72.3647V10.3302H71.4219V15.9655Z" fill="white"></path>
<path d="M77.7666 15.9655H78.7094V8.14648H77.7666V15.9655Z" fill="white"></path>
<path d="M82.7621 16.0738C84.3172 16.0738 85.3684 14.9468 85.3684 13.1478V13.137C85.3684 11.338 84.3118 10.2218 82.7567 10.2218C81.2016 10.2218 80.1504 11.3434 80.1504 13.137V13.1478C80.1504 14.9414 81.1961 16.0738 82.7621 16.0738ZM82.7675 15.2394C81.7705 15.2394 81.1149 14.4754 81.1149 13.1478V13.137C81.1149 11.8203 81.7759 11.0563 82.7567 11.0563C83.7537 11.0563 84.4039 11.8149 84.4039 13.137V13.1478C84.4039 14.47 83.7591 15.2394 82.7675 15.2394Z" fill="white"></path>
<path d="M88.4132 16.0738C89.1664 16.0738 89.8437 15.6675 90.1743 15.0497H90.1959V15.9655H91.1388V12.0695C91.1388 10.9425 90.3043 10.2218 88.9713 10.2218C87.6438 10.2218 86.8364 10.9696 86.7552 11.8961L86.7497 11.9557H87.6601L87.6709 11.907C87.7793 11.403 88.2344 11.0563 88.9605 11.0563C89.7462 11.0563 90.1959 11.4735 90.1959 12.1616V12.6331L88.5812 12.7252C87.2862 12.801 86.5384 13.4025 86.5384 14.3616V14.3724C86.5384 15.3965 87.2916 16.0738 88.4132 16.0738ZM87.5029 14.3724V14.3616C87.5029 13.836 87.9364 13.5 88.6896 13.4567L90.1959 13.3646V13.8251C90.1959 14.6433 89.5132 15.2556 88.6246 15.2556C87.9472 15.2556 87.5029 14.9143 87.5029 14.3724Z" fill="white"></path>
<path d="M94.8988 16.0738C95.7062 16.0738 96.3347 15.6675 96.6869 15.0118H96.7086V15.9655H97.6515V8.14648H96.7086V11.273H96.6869C96.3347 10.6228 95.6791 10.2218 94.8826 10.2218C93.4683 10.2218 92.5038 11.3651 92.5038 13.1424V13.1478C92.5038 14.9251 93.4575 16.0738 94.8988 16.0738ZM95.0831 15.2394C94.086 15.2394 93.4683 14.4429 93.4683 13.1478V13.1424C93.4683 11.8582 94.086 11.0563 95.0831 11.0563C96.0313 11.0563 96.714 11.8853 96.714 13.1424V13.1478C96.714 14.4103 96.0367 15.2394 95.0831 15.2394Z" fill="white"></path>
<path d="M104.424 16.0738C105.979 16.0738 107.03 14.9468 107.03 13.1478V13.137C107.03 11.338 105.974 10.2218 104.418 10.2218C102.863 10.2218 101.812 11.3434 101.812 13.137V13.1478C101.812 14.9414 102.858 16.0738 104.424 16.0738ZM104.429 15.2394C103.432 15.2394 102.777 14.4754 102.777 13.1478V13.137C102.777 11.8203 103.438 11.0563 104.418 11.0563C105.415 11.0563 106.066 11.8149 106.066 13.137V13.1478C106.066 14.47 105.421 15.2394 104.429 15.2394Z" fill="white"></path>
<path d="M108.428 15.9655H109.371V12.6493C109.371 11.6902 109.95 11.0563 110.839 11.0563C111.706 11.0563 112.134 11.5602 112.134 12.4759V15.9655H113.077V12.3079C113.077 11.0237 112.362 10.2218 111.126 10.2218C110.27 10.2218 109.696 10.6065 109.392 11.1321H109.371V10.3302H108.428V15.9655Z" fill="white"></path>
<path d="M119.275 16.0738C119.459 16.0738 119.66 16.0522 119.779 16.0359V15.2719C119.697 15.2773 119.589 15.2936 119.475 15.2936C118.971 15.2936 118.706 15.1256 118.706 14.5241V11.1104H119.779V10.3302H118.706V8.80755H117.73V10.3302H116.907V11.1104H117.73V14.5296C117.73 15.6078 118.24 16.0738 119.275 16.0738Z" fill="white"></path>
<path d="M121.285 15.9655H122.227V12.6764C122.227 11.7173 122.807 11.0563 123.68 11.0563C124.557 11.0563 125.078 11.6577 125.078 12.6764V15.9655H126.02V12.5138C126.02 11.1484 125.202 10.2218 124.005 10.2218C123.165 10.2218 122.553 10.5957 122.249 11.2296H122.227V8.14648H121.285V15.9655Z" fill="white"></path>
<path d="M129.981 16.0738C131.211 16.0738 132.132 15.3369 132.316 14.4049L132.327 14.3507H131.401L131.384 14.3995C131.222 14.8818 130.718 15.2394 130.003 15.2394C129 15.2394 128.361 14.5621 128.339 13.4025H132.398V13.0557C132.398 11.3651 131.46 10.2218 129.921 10.2218C128.383 10.2218 127.386 11.4193 127.386 13.1641V13.1695C127.386 14.9414 128.361 16.0738 129.981 16.0738ZM129.916 11.0563C130.74 11.0563 131.346 11.571 131.439 12.6656H128.355C128.458 11.6144 129.098 11.0563 129.916 11.0563Z" fill="white"></path>
<path d="M57.4997 31.5242H51.9988L50.8479 34.8306H48.2827L53.6471 20.6296H55.8611L61.2353 34.8306H58.6604L57.4997 31.5242ZM52.6913 29.5345H56.8072L54.7492 23.6434L52.6913 29.5345Z" fill="white"></path>
<path d="M71.6203 29.6613C71.6203 31.2934 71.2496 32.5971 70.5084 33.5724C69.7671 34.5413 68.7723 35.0257 67.5238 35.0257C66.3664 35.0257 65.4398 34.6453 64.7441 33.8845V38.888H62.374V24.2774H64.5588L64.6563 25.3503C65.3521 24.505 66.2981 24.0823 67.4946 24.0823C68.782 24.0823 69.7899 24.5635 70.5181 25.5259C71.2529 26.4817 71.6203 27.8114 71.6203 29.515V29.6613ZM69.2599 29.4565C69.2599 28.4031 69.0486 27.5676 68.626 26.9499C68.2098 26.3321 67.6116 26.0233 66.8313 26.0233C65.8625 26.0233 65.1667 26.4232 64.7441 27.2229V31.9046C65.1733 32.7239 65.8755 33.1335 66.8508 33.1335C67.6051 33.1335 68.1936 32.8312 68.6162 32.2265C69.0454 31.6152 69.2599 30.6919 69.2599 29.4565Z" fill="white"></path>
<path d="M83.0976 29.6613C83.0976 31.2934 82.727 32.5971 81.9858 33.5724C81.2445 34.5413 80.2497 35.0257 79.0012 35.0257C77.8438 35.0257 76.9172 34.6453 76.2215 33.8845V38.888H73.8514V24.2774H76.0362L76.1337 25.3503C76.8295 24.505 77.7755 24.0823 78.972 24.0823C80.2594 24.0823 81.2673 24.5635 81.9955 25.5259C82.7303 26.4817 83.0976 27.8114 83.0976 29.515V29.6613ZM80.7373 29.4565C80.7373 28.4031 80.526 27.5676 80.1033 26.9499C79.6872 26.3321 79.089 26.0233 78.3087 26.0233C77.3399 26.0233 76.6441 26.4232 76.2215 27.2229V31.9046C76.6506 32.7239 77.3529 33.1335 78.3282 33.1335C79.0825 33.1335 79.6709 32.8312 80.0936 32.2265C80.5227 31.6152 80.7373 30.6919 80.7373 29.4565Z" fill="white"></path>
<path d="M98.1814 31.1731C98.1814 30.5489 97.9603 30.0677 97.5182 29.7296C97.0825 29.3915 96.2925 29.0501 95.1481 28.7055C94.0037 28.3608 93.0934 27.9772 92.4171 27.5546C91.1232 26.7418 90.4762 25.6819 90.4762 24.375C90.4762 23.2306 90.9411 22.2877 91.871 21.5465C92.8073 20.8052 94.02 20.4346 95.509 20.4346C96.4973 20.4346 97.3784 20.6166 98.1522 20.9808C98.9259 21.3449 99.5339 21.8651 99.976 22.5413C100.418 23.211 100.639 23.9556 100.639 24.7748H98.1814C98.1814 24.0336 97.9473 23.4549 97.4792 23.0387C97.0175 22.6161 96.3543 22.4048 95.4895 22.4048C94.6832 22.4048 94.0557 22.5771 93.6071 22.9217C93.1649 23.2663 92.9438 23.7475 92.9438 24.3652C92.9438 24.8854 93.1844 25.321 93.6656 25.6722C94.1468 26.0168 94.94 26.3549 96.0454 26.6865C97.1508 27.0116 98.0384 27.3855 98.7081 27.8082C99.3778 28.2243 99.8688 28.7055 100.181 29.2517C100.493 29.7913 100.649 30.4253 100.649 31.1536C100.649 32.337 100.194 33.2798 99.2836 33.9821C98.3797 34.6778 97.1508 35.0257 95.5968 35.0257C94.5694 35.0257 93.6233 34.8371 92.7585 34.46C91.9002 34.0764 91.2305 33.5497 90.7493 32.8799C90.2746 32.2102 90.0373 31.4299 90.0373 30.5391H92.5049C92.5049 31.3454 92.7715 31.9696 93.3047 32.4118C93.8379 32.8539 94.6019 33.075 95.5968 33.075C96.4551 33.075 97.0988 32.9027 97.5279 32.5581C97.9636 32.2069 98.1814 31.7453 98.1814 31.1731Z" fill="white"></path>
<path d="M105.777 21.7123V24.2774H107.64V26.033H105.777V31.9241C105.777 32.3272 105.855 32.6198 106.011 32.8019C106.174 32.9775 106.46 33.0652 106.869 33.0652C107.142 33.0652 107.419 33.0327 107.698 32.9677V34.8014C107.159 34.9509 106.639 35.0257 106.138 35.0257C104.317 35.0257 103.407 34.0211 103.407 32.0119V26.033H101.671V24.2774H103.407V21.7123H105.777Z" fill="white"></path>
<path d="M108.944 29.4565C108.944 28.4226 109.149 27.4928 109.559 26.667C109.969 25.8347 110.544 25.1975 111.285 24.7553C112.027 24.3067 112.878 24.0823 113.841 24.0823C115.265 24.0823 116.419 24.5408 117.303 25.4576C118.194 26.3744 118.675 27.5903 118.747 29.1054L118.756 29.6613C118.756 30.7017 118.555 31.6315 118.152 32.4508C117.755 33.2701 117.183 33.904 116.435 34.3527C115.694 34.8014 114.835 35.0257 113.86 35.0257C112.371 35.0257 111.178 34.5315 110.281 33.5432C109.39 32.5483 108.944 31.2251 108.944 29.5735V29.4565ZM111.315 29.6613C111.315 30.7472 111.539 31.599 111.987 32.2167C112.436 32.8279 113.06 33.1335 113.86 33.1335C114.66 33.1335 115.281 32.8214 115.723 32.1972C116.172 31.573 116.396 30.6594 116.396 29.4565C116.396 28.3901 116.165 27.5448 115.704 26.9206C115.248 26.2964 114.627 25.9843 113.841 25.9843C113.067 25.9843 112.452 26.2931 111.997 26.9108C111.542 27.5221 111.315 28.4389 111.315 29.6613Z" fill="white"></path>
<path d="M126.508 26.4427C126.196 26.3907 125.874 26.3646 125.542 26.3646C124.456 26.3646 123.725 26.7808 123.348 27.6131V34.8306H120.978V24.2774H123.241L123.299 25.4576C123.871 24.5408 124.665 24.0823 125.679 24.0823C126.017 24.0823 126.297 24.1279 126.518 24.2189L126.508 26.4427Z" fill="white"></path>
<path d="M132.679 35.0257C131.177 35.0257 129.958 34.5543 129.022 33.6114C128.092 32.6621 127.627 31.4007 127.627 29.8271V29.5345C127.627 28.4811 127.829 27.5416 128.232 26.7158C128.642 25.8835 129.214 25.2365 129.949 24.7748C130.683 24.3132 131.503 24.0823 132.406 24.0823C133.843 24.0823 134.952 24.5408 135.732 25.4576C136.519 26.3744 136.912 27.6716 136.912 29.3492V30.305H130.017C130.088 31.1763 130.378 31.8656 130.885 32.3728C131.399 32.8799 132.042 33.1335 132.816 33.1335C133.902 33.1335 134.786 32.6946 135.469 31.8168L136.747 33.036C136.324 33.6667 135.758 34.1576 135.05 34.5088C134.347 34.8534 133.557 35.0257 132.679 35.0257ZM132.397 25.9843C131.746 25.9843 131.22 26.2118 130.817 26.667C130.42 27.1222 130.166 27.7561 130.056 28.5689H134.572V28.3934C134.52 27.6001 134.308 27.0019 133.938 26.5987C133.567 26.1891 133.053 25.9843 132.397 25.9843Z" fill="white"></path>
</svg>'
                  css={{}}
                />
              </div>
              <RawImg
                $name="google-play-link"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/49b2a415c953bf31aa9f448e76ba46ab0cf7502a?placeholderIfAbsent=true"
                altText="Google Play"
                css={{
                  width: "150px",
                  height: "44px",
                  marginTop: "13px",
                }}
              />
            </div>
          </div>
          <div css={{}}>
            <div
              innerHTML='<svg id="I60:10901;844:19869" layer-name="footer / divider" width="1596" height="2" viewBox="0 0 1596 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-divider" style="display: flex; height: 0px; justify-content: center; align-items: center; align-self: stretch; background: #FFF">
<rect width="1598" height="0.000125731" transform="translate(0.5 0.633301)" fill="white"></rect>
<path d="M0.5 0.633301L1598.5 0.633259" stroke="#CBD4E6" stroke-width="1.10972"></path>
</svg>'
              css={{}}
            />
          </div>
          <div
            css={{
              display: "flex",
              height: "71px",
              padding: "13.317px 133.167px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              "@media (max-width: 640px)": {
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
                textAlign: "center",
              },
            }}
          >
            <div
              css={{
                display: "flex",
                padding: "8.878px",
                alignItems: "flex-start",
                gap: "22.194px",
              }}
            >
              <div css={{}}>
                <div
                  innerHTML='<svg id="I60:10901;844:19872" layer-name="24 / twitter" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-icon" style="width: 26.633px; height: 26.633px">
<path d="M26.0676 7.36577C25.749 7.84194 25.3886 8.28598 24.9866 8.6979C24.5845 9.10982 24.1483 9.48585 23.678 9.82596C23.6856 9.93178 23.6913 10.0357 23.6951 10.1377C23.6989 10.2398 23.7008 10.3437 23.7008 10.4495C23.7008 11.4018 23.5984 12.3428 23.3935 13.2725C23.1887 14.2022 22.8929 15.1016 22.506 15.9708C21.9446 17.233 21.2429 18.3611 20.4009 19.355C19.5588 20.3489 18.6049 21.1897 17.539 21.8775C16.4732 22.5653 15.3107 23.0906 14.0514 23.4534C12.7921 23.8162 11.4721 23.9976 10.0915 23.9976C8.7867 23.9976 7.51415 23.8181 6.27384 23.4591C5.03353 23.1001 3.86339 22.5653 2.76343 21.8548C3.13514 21.9002 3.51444 21.9229 3.90132 21.9229C4.98612 21.9229 6.03488 21.749 7.04761 21.4014C8.06034 21.0537 8.99152 20.5473 9.84115 19.8822C9.33289 19.8746 8.84359 19.7896 8.37326 19.6271C7.90293 19.4646 7.47242 19.2378 7.08174 18.9468C6.69107 18.6558 6.3497 18.3101 6.05763 17.9095C5.76557 17.5089 5.53989 17.0667 5.38058 16.583C5.53231 16.6057 5.68213 16.6246 5.83005 16.6397C5.97798 16.6548 6.1278 16.6624 6.27952 16.6624C6.70434 16.6624 7.12157 16.6057 7.53121 16.4923C6.96985 16.3789 6.45591 16.1786 5.98936 15.8914C5.52283 15.6042 5.11887 15.2546 4.7775 14.8427C4.43613 14.4308 4.17062 13.966 3.98097 13.4482C3.79132 12.9305 3.6965 12.3882 3.6965 11.8213V11.7646C4.36406 12.1426 5.08853 12.3428 5.86988 12.3655C5.5361 12.1388 5.23835 11.8799 4.97663 11.5889C4.71492 11.2979 4.49303 10.9824 4.31096 10.6423C4.1289 10.3021 3.98856 9.94312 3.88994 9.56521C3.79132 9.1873 3.74201 8.79805 3.74201 8.39747C3.74201 7.97421 3.79512 7.5604 3.90132 7.15604C4.00752 6.75167 4.17062 6.36809 4.39062 6.0053C4.9975 6.75356 5.67265 7.42435 6.41607 8.01767C7.1595 8.61099 7.95034 9.11928 8.78859 9.54254C9.62684 9.96579 10.5049 10.3002 11.4228 10.5459C12.3407 10.7915 13.2814 10.937 14.2448 10.9824C14.1993 10.8085 14.1671 10.629 14.1481 10.4439C14.1291 10.2587 14.1196 10.0754 14.1196 9.89399C14.1196 9.23643 14.2448 8.61855 14.4952 8.04034C14.7455 7.46214 15.0869 6.95763 15.5193 6.52681C15.9517 6.09599 16.458 5.75588 17.0384 5.50645C17.6187 5.25703 18.2388 5.13232 18.8988 5.13232C19.5664 5.13232 20.2017 5.2627 20.8048 5.52346C21.4079 5.78422 21.937 6.15646 22.3922 6.64018C22.9308 6.53437 23.4523 6.3851 23.9568 6.19236C24.4613 5.99963 24.9486 5.76343 25.419 5.48378C25.2445 6.03553 24.9771 6.53815 24.6168 6.99164C24.2564 7.44513 23.8259 7.81927 23.3252 8.11404C24.2811 8.00066 25.1952 7.75124 26.0676 7.36577L26.0676 7.36577Z" fill="#6E7491"></path>
</svg>'
                  css={{}}
                />
              </div>
              <div
                css={{
                  width: "27px",
                  height: "27px",
                  position: "relative",
                }}
              >
                <div
                  css={{
                    width: "24px",
                    height: "24px",
                    fill: "#6E7491",
                    position: "absolute",
                    left: "1.3px",
                    top: "1.3px",
                  }}
                />
              </div>
              <div css={{}}>
                <div
                  innerHTML='<svg id="I60:10901;844:19879" layer-name="24 / facebook" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-icon" style="width: 26.633px; height: 26.633px">
<path d="M22.4523 4.02246H4.58056C4.30771 4.04089 4.0508 4.1576 3.85743 4.35096C3.66407 4.54433 3.54736 4.80124 3.52893 5.07409V22.9458C3.53047 23.2243 3.64176 23.4909 3.83865 23.6877C4.03553 23.8846 4.30212 23.9959 4.58056 23.9975H14.1474V16.2178H11.6235V13.2744H14.252V11.0666C14.1953 10.5371 14.2561 10.0016 14.4301 9.49836C14.6041 8.99507 14.8869 8.53633 15.2584 8.15484C15.6299 7.77334 16.081 7.47847 16.5795 7.29123C17.078 7.10399 17.6116 7.029 18.1424 7.07159C19.194 7.07159 20.1399 7.17616 20.4548 7.17616V9.91039H18.878C17.616 9.91039 17.4057 10.5414 17.4057 11.3827V13.2744H20.3491L19.9284 16.3235H17.3011V23.9975H22.4523C22.7307 23.9959 22.9973 23.8846 23.1942 23.6877C23.3911 23.4909 23.5024 23.2243 23.5039 22.9458V5.07409C23.4855 4.80124 23.3688 4.54433 23.1754 4.35096C22.9821 4.1576 22.7251 4.04089 22.4523 4.02246V4.02246Z" fill="#6E7491"></path>
</svg>'
                  css={{}}
                />
              </div>
            </div>
            <div
              css={{
                color: "#7C8DB0",
                textAlign: "right",
                "@media (max-width: 640px)": {
                  textAlign: "center",
                  fontSize: "16px",
                },
                font: "400 20px 'Nunito Sans' ",
              }}
            >
              © 2020 Tripma incorporated
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
