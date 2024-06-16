import { About, Container, Hero, Partner, RoadMap, Welcome } from "../../components";

const HomePage = () => {
  return (
    <>
      <div className="bg-bgPrimary text-text">
        <Container className="pt-[95px]">
          <Welcome />
          <Hero />
          <Partner />
          <About />
        </Container>
      </div>
      <div className="bg-bluePrimary">
        <Container>
          <RoadMap />
        </Container>
      </div>
    </>
  );
};
export default HomePage;
