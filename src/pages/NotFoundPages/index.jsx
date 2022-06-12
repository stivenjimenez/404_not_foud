import "./styles.css";
import scareCrows from "../../assets/scare_crows.png";

const NotFoundPages = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header__title">404 NOT FOUND</h1>
      </div>

      <section className="hero__wrapper">
        <div className="hero__imageWrapper">
          <img src={scareCrows} alt="400 image" />
        </div>

        <div className="hero__contentWrapper">
          <h2 className="hero__title">
            I have bad news <br />
            for you
          </h2>
          <p className="hero__paragraph">
            The page you are looking
            <br /> for might be removed or is
            <br /> temporarily unavailable
          </p>
          <button className="hero__button"> Back to homepage</button>
        </div>
      </section>

      <div className="footer">
        <span className="footer__text">
          created by stivenjimenez - devChallenges.io
        </span>
      </div>
    </div>
  );
};

export default NotFoundPages;
