const ProfileCard = ({ image, name, role, isOnline, toggle }) => {
  return (
    <div className="card">
      <img src={image} alt="" />

      <h1>{name}</h1>
      <p>{role}</p>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
      <button onClick={toggle}>
        {isOnline ? "Go Offline" : "Go Online"}
      </button>
    </div>
  );
};

export default ProfileCard;
