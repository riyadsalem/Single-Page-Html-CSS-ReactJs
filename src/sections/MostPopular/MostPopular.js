import "./MostPopular.css";
import { Card, SectionHeader, SectionWrapper } from "../../components/index";
import popular_01 from "../../assets/images/popular-01.jpg";
import popular_02 from "../../assets/images/popular-02.jpg";
import popular_03 from "../../assets/images/popular-03.jpg";
import popular_04 from "../../assets/images/popular-04.jpg";

const MostPopular = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        {/* End: section-header */}
        <div className="most-popular-items">
          <Card
            image={popular_01}
            title="Fortnite"
            category="Sandbox"
            rate="3.8"
            download="2.3M"
          />
          <Card
            image={popular_02}
            title="PubG"
            category="Stream-X"
            rate="4.8"
            download="1.1M"
          />
          <Card
            image={popular_03}
            title="Dota2"
            category="Legendary"
            rate="2.7"
            download="5.3M"
          />
          <Card
            image={popular_04}
            title="GS-Go"
            category="Battle S"
            rate="3.9"
            download="6.1M"
          />
        </div>
        {/* End: most-popular-items */}
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
