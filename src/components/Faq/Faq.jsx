import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./Faq.scss";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
    // console.log("id------>", id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    // console.log("click on active");
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question ${getClassQuestion("q1")}`}
                >
                  <p>1. What is special about comparing rental car deals</p>
                  <FaPlus />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum aperiam culpa at itaque tempore aliquam consectetur
                  illo dolore, minima obcaecati excepturi totam officiis
                  quibusdam, nesciunt quidem sunt impedit, eaque quam. Ducimus
                  repellendus vel fugiat. Atque ipsa ipsam nesciunt tempora
                  iusto quibusdam rem quos autem a ea. Vel sapiente consequatur
                  voluptates beatae voluptatibus amet velit, nobis
                  reprehenderit! Quam culpa excepturi enim.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the car rental deals?</p>
                  <FaPlus />
                </div>{" "}
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat quos nesciunt, sit impedit facilis repellendus
                  temporibus dolor qui modi tenetur perferendis dolorem in, nam
                  aliquam tempore earum animi, odio neque? Minima, assumenda
                  commodi soluta quidem placeat molestiae nulla mollitia aliquam
                  expedita autem, dolorum error iste est dignissimos laboriosam
                  eum quasi dicta non ut omnis, ea totam quaerat. Quidem, magnam
                  aliquam?
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How do I find such low rental car prices</p>
                  <FaPlus />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque sunt repellendus tempora eligendi corrupti ullam
                  ipsum explicabo nobis laudantium debitis, beatae ab in
                  excepturi. Quam atque officia nobis accusantium velit! Numquam
                  ea doloribus repudiandae nobis sed pariatur nam qui earum
                  doloremque id sit praesentium labore soluta commodi iusto
                  eligendi a beatae, tempora corrupti voluptatem nulla? Autem
                  impedit corrupti ipsa saepe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
