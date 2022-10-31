import "./MostPopular.css";
import popular_01 from "../../assets/images/popular-01.jpg";

const MostPopular = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          <h4>Most Popular</h4>
        </div>
        {/* End: section-header */}
        <div className="most-popular-items">
          <div className="most-popular-item">
            <div className="card-wrapper">
              <img className="most-popular-image" src={popular_01} />
              <div className="most-popular-item-content">
                <h4 className="most-popular-item-title">
                  Fortnite <br />
                  <span>Sandbox</span>
                </h4>
                <ul>
                  <li>
                    <span>4.8</span>
                  </li>
                  <li>
                    <span>2.3</span>
                  </li>
                </ul>
              </div>
              {/* End:  most-popular-item-content*/}
            </div>
            {/* End: card-wrapper */}
          </div>
          {/* End: most-popular-item */}
        </div>
        {/* End: most-popular-items */}
      </div>
      {/* End: section-wrapper */}
    </>
  );
};

export default MostPopular;
