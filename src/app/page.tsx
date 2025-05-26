import { PersonalizationContainer, Variant } from "@components";

export default function Home() {
  return (
    <>
      <PersonalizationContainer
        css={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          marginTop: "20px",
        }}
      >
        <Variant default="" css={{}}>
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
              innerHTML="<p>Hello there, I am custom HTML code!</p>"
              css={{}}
            />
          </div>
        </Variant>
      </PersonalizationContainer>
      <div
        css={{
          pointerEvents: "auto",
          color: "rgb(23, 23, 23)",
          backgroundColor: "rgb(255, 255, 255)",
          font: "400 16px/24px Arial, Helvetica, sans-serif ",
        }}
      >
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
    </>
  );
}
