import { IoIosQuote } from "react-icons/io";
import { MdStarOutline } from "react-icons/md";

function TestimonialsSlider({ item }) {


  console.log(item);
  const {name, position, img, stars, disc} = item

  console.log(name, position, img, stars, disc)

  return (
    <>
      <div className="slider-container">
        <div className="slider-header">
          <span>
            <IoIosQuote />
          </span>
          <div>
            {Array(stars)
              .fill()
              .map((_, index) => {
                return (
                  <>
                    <span className="slider-star" key={index}>
                      <MdStarOutline />
                    </span>
                  </>
                );
              })}
          </div>
          <div className="testimonial-content-text">{disc}</div>
          <div className="testimonial-content-footer">
            <img src={img} alt={name} />
            <div className="details">
              <h1>{name}</h1>
              <p>{position}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsSlider;
