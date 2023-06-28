import { IoIosQuote } from "react-icons/io";
import { MdStarOutline } from "react-icons/md";

function TestimonialsSlider({ item }) {
  // console.log(item);
  const { name, position, img, stars, disc } = item;

  // console.log(name, position, img, stars, disc);

  return (
    <>
      <div className="slider-container">
        <div className="slider-header">
          <span className="slider-header__quote">
            <IoIosQuote />
          </span>
          <div>
            {Array(stars)
              .fill()
              .map((_, index) => {
                console.log("index form slider--->", index)
                return (
                  
                  <>
                    <span className="slider-header__star" key={index}>
                      <MdStarOutline />
                    </span>
                  </>
                );
              })}
          </div>
          </div>
          <div className="slider-content__body">{disc}</div>
          <div className="slider-content__footer">
            <img src={img} alt={name} />
            <div className="slider-content__details">
              <h1>{name}</h1>
              <p>{position}</p>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default TestimonialsSlider;
