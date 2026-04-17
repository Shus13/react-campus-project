import { useState } from "react";
import ProfileCard from "./components/profileCard";

const App = () => {
  // const [show, setShow] = useState(true);
  const arr = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_official_portrait_of_Balendra_Shah%2C_the_Prime_Minister_of_Federal_Democratic_Republic_of_Nepal.png/500px-The_official_portrait_of_Balendra_Shah%2C_the_Prime_Minister_of_Federal_Democratic_Republic_of_Nepal.png",
      name: "Balen Shah",
      role: "Frontend Developer",
      isOnline:true
    },
    {
      image:
        "https://cdn.britannica.com/64/171264-050-C7253301/chief-minister-of-gujarat-india-narendra-modi-speaks-at-the-world-economic-forum.jpg?w=300",
      name: "Modi Singh",
      role: "Backend Developer",
      isOnline:false
    },
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/480175530_1395264415215493_3456335896516218480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=13uy0BMSbocQ7kNvwEk6QoB&_nc_oc=Adop8XjMua-yaz8KsKbCFxLUaeP7a7eW1vp1xtBTPnPVTtmaVNzn50qQfJOjc1JFSOFgtwkI90CTqRGCri3B3sNA&_nc_zt=23&_nc_ht=scontent.fkep2-1.fna&_nc_gid=P6gFfr2QErYRCg9NeYabEg&_nc_ss=7a3a8&oh=00_Af3PxXv-cI3yfiP6mMddZQn8j_lHYwVsdVHvhmUdLYLtUg&oe=69E7E3A4",
      name: "Dixit BT",
      role: "Full Stack Developer",
      isOnline:true
    },
  ];

  return (
    <div className="parent">
      {/* <button onClick={() => setShow(!show)}>Show/Hide</button> */}
      {/* {show ? ( */}
        
          {arr.map((elem, index) => (
        <ProfileCard
          key={index}
          image={elem.image}
          name={elem.name}
          role={elem.role}
        />
      ))}
      
      {/* ) : (
        <p>Profiles are hidden</p>
      )} */}
    </div>
  );
};

export default App;
