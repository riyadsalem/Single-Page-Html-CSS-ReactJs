import "./GamingLibraryCard.css";

const GamingLibraryCard = (props) => {
  return (
    <>
      <div className="gaming-library-card">
        <ul>
          <li>
            <img src={props.image} alt="" />
          </li>
          <li>
            <h4>
              {props.title} <span>{props.category}</span>
            </h4>
          </li>
          <li>
            <h4>
              Date Aded <span>{props.date_added}</span>
            </h4>
          </li>
          <li>
            <h4>
              Hours Played <span>{props.hours_played}</span>
            </h4>
          </li>
          <li>
            <h4>
              Currently <span>{props.download}</span>
            </h4>
          </li>
          <div>
            <a href="#">Download</a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default GamingLibraryCard;
