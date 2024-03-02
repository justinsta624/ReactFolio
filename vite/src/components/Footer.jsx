import React from "react";

// Define the Footer component
export default function Footer() {
  return (
    // Render icons containing links to social media, etc.
    <>
      {/* Footer container with styling */}
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1;" }}
      >
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook link */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/hanbyeol.j.lee"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Instagram link */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/legendary_onesta/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Linkedin link */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/hanbyeol-lee-584232296/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i classNames="fab fa-linkedin"></i>
            </a>
            {/* Github link */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/justinsta624"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        {/* End of Grid container */}

        {/* Copyright information */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {/* Copyright notice with a link to the GitHub repository */}
          © 2024 Copyright:
          <a className="text-dark" href="https://github.com/justinsta624/ReactFolio">
            Hanbyeol Justin Lee
          </a>
        </div>
        {/* End of Copyright */}
      </footer>
    </>
  );
}