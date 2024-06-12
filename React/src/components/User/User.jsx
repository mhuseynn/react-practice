const User = ({fullname,phone,email,city,tecrube,skills,img}) => {
  return (
    <>
      <img id="img" src={img} alt="" />
      <div id="divName">
        <p>Full Name:</p>
        <p>{fullname}</p>
      </div>

      <div id="divName">
        <p>Phone:</p>
        <p>{phone}</p>
      </div>

      <div id="divName">
        <p>Email:</p>
        <p>{email}</p>
      </div>

      <div id="divName">
        <p>City:</p>
        <p>{city}</p>
      </div>

      <div id="divName">
        <p>Tecrube:</p>
        <p>{tecrube}</p>
      </div>

      <div id="divName">
        <p>Skills:</p>
        <p>{skills}</p>
      </div>
    </>
  );
};


export default User;