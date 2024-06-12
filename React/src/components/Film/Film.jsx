import "./style.scss";

const Film = ({ img, nameFilm, year, rej, movieStudio }) => {
  return (
    <>
      <img id="img" src={img} alt="" />
      <div id="divName">
        <p>Film Name:</p>
        <p>{nameFilm}</p>
      </div>

      <div id="divName">
        <p>Film Year:</p>
        <p>{year}</p>
      </div>

      <div id="divName">
        <p>Rejissor Name:</p>
        <p>{rej}</p>
      </div>

      <div id="divName">
        <p>Studio Name:</p>
        <p>{movieStudio}</p>
      </div>
    </>
  );
};

export default Film;
