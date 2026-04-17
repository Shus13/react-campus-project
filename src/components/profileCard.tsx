const ProfileCard = ({image, name, role}) => {
  return (
    <div>
        <div className="card">
            <img src={image} alt="" />

            <h1>{name}</h1>
            <p>{role}</p>
            {/* <p>{isOnline ? "Online" : "Offline"}</p> */}
        </div>
    </div>
  )
}

export default ProfileCard