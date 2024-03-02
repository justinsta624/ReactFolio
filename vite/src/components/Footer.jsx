import React from "react";

export default function Footer() {
  return (
    //icons containing links to social media etc
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1;" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/hanbyeol.j.lee"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/legendary_onesta/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/hanbyeol-lee-584232296/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i classNames="fab fa-linkedin"></i>
            </a>
            {/* <!-- Github --> */}
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
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="https://github.com/justinsta624/ReactFolio">
            Hanbyeol Justin Lee
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}