import "./GamingLibrary.css";
import {
  SectionHeader,
  SectionWrapper,
  GamingLibraryCard,
} from "../../components/index";
import GamingLibraryData from "../../Data/GamingLibraryData";

const GamingLibrary = () => {
  /*
  const cards = GamingLibraryData.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.date_added}
        hours_played={card.hours_played}
        downloaded={card.downloaded}
      />
    );
  });
  */

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="most-popular-items">
          <GamingLibraryCard />
        </div>
        {/* End: most-popular-items */}
      </SectionWrapper>
    </>
  );
};

export default GamingLibrary;
