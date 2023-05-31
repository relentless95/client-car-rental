import { IoIosQuote } from "react-icons/io";
import { MdStarOutline } from "react-icons/md";

function TestimonialsSlider({ name, position, img, stars, disc }) {
  return (
    <>
      <div className="slider-container">
        <div className="slider-head">
          {Array(stars)
            .fill()
            .map((star, index) => {
              return (
                <>
                  <span className="slider-star" key={index}>
                  </span>
                  <MdStarOutline />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TestimonialsSlider;
