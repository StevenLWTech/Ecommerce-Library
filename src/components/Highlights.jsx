import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";
function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quickly"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Affordable"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="10,000+ Books"
              para="Get access to the book you purchased online instantly."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
