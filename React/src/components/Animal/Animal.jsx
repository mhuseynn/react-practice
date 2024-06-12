
const Animal = ({img,name,breed}) => {
    return (
      <>
        <img id="img" src={img} alt="" />
        <div id="divName">
          <p>Name:</p>
          <p>{name}</p>
        </div>
  
        <div id="divName">
          <p>Breed:</p>
          <p>{breed}</p>
        </div>

      </>
    );
  };
  
  
  export default Animal;

