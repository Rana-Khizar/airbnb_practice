import star from "../assets/star.png";
import like from "../assets/love.png";

const data = [
  {
    img_URLs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCf8fmIO0m-vs2dJxbU0bldE2qOu7FAKQvwA&s",
      "https://images.squarespace-cdn.com/content/v1/55f739f4e4b0550fcc13832a/1555510104579-3OHHEQS6TW8VGNBDVWIN/remodel-building-luxury-living-shenandoah-valley-virginia",
    ],
    title: "France, Rome",
    description: "Stay with Bo. Commercial officer",
    date: "Mar 8-12",
    price: "$300 per night",
    rating: 4.91,
  },
  {
    img_URLs: [
      "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRgtyHBuraJ6hot1ZaHA2xb9xmZuzTZqPfA&s",
    ],
    title: "Korea, Yusdi",
    description: "Stay with Bo. Commercial officer",
    date: "Jan 12-16",
    price: "$400 per night",
    rating: 4.99,
  },
  {
    img_URLs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtBL2btrsFdNYX_vv1qg9cFkpZinU8_HpQw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxANWJdqEJzEE4Rxn-Mn8I9w3FcFpqt7CRg&s",
    ],
    title: "Italy, Yogan",
    description: "Stay with Bo. Commercial officer",
    date: "April 23-27",
    price: "$200 per night",
    rating: 4.85,
  },
  {
    img_URLs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0BT69DBEc38Bc9PqiKkN6gCfcv7mUy5row&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzJyJ1j-_dm-PGDzFWXXkXKk50Q2cCezkvQ&s",
    ],
    title: "France, Belgium",
    description: "Stay with Bo. Commercial officer",
    date: "Mar 6-20",
    price: "$500 per night",
    rating: 4.95,
  },
  
  {
    img_URLs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0BT69DBEc38Bc9PqiKkN6gCfcv7mUy5row&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzJyJ1j-_dm-PGDzFWXXkXKk50Q2cCezkvQ&s",
    ],
    title: "France, Belgium",
    description: "Stay with Bo. Commercial officer",
    date: "Mar 6-20",
    price: "$500 per night",
    rating: 4.95,
  },
];

const Card = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-md-3 col-sm-6 col-12" key={index}>
            <div className="card w-100" style={{ border: "none" }}>
              {/* Carousel Wrapper */}
              <div
                id={`carouselExampleInterval-${index}`}
                className="carousel slide"
                data-bs-ride="false"
              >
                <div
                  className="carousel-inner"
                  style={{ borderRadius: "7px", display: "relative" }}
                >
                  <img
                    src={like}
                    alt="like-icon"
                    height={30}
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      top: "8px",
                      right: "8px",
                    }}
                  />
                  {item.img_URLs.map((img, imgIndex) => (
                    <div
                      className={`carousel-item ${
                        imgIndex === 0 ? "active" : ""
                      }`}
                      key={imgIndex}
                    >
                      <img
                        src={img}
                        className="d-block w-100"
                        alt={`Slide ${imgIndex}`}
                        style={{ height:"280px" , objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>

                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>

                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExampleInterval-${index}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExampleInterval-${index}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="row">
                  <div className="col-10">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                  <div className="col-2 d-flex justify-content-end align-items-center">
                    <img
                      src={star}
                      alt="Rating"
                      style={{ height: "15px", margin: "3px" }}
                    />
                    {item.rating}
                  </div>
                </div>
                <p className="card-text">{item.description}</p>
                <p>{item.date}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
