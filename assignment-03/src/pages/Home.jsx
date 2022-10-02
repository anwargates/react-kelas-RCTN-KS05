import React from "react";
import Typed from "typed.js";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Developer", "Freelancer", "Technician"],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: `url('${process.env.PUBLIC_URL}/hero-bg.jpg') top center`,
      }}
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Muhammad Anwar</h1>
        <p>
          I'm a <span ref={el}></span>
        </p>
      </div>
    </section>
  );
}
