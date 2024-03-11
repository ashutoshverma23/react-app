import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <body>
        <section className="home">
          <div className="left">
            <div className="heading-text">
              <h1 id="brand">SAATHI</h1>
              <h2 align="center" id="slogan">
                Your Personal mental health companion
              </h2>
            </div>
            <div className="buttons">
              <button id="button1">Get Started</button>
            </div>
            <div className="stats"></div>
          </div>
          <div className="right"></div>
        </section>
      </body>
      <Footer />
    </>
  );
};

export default Home;
