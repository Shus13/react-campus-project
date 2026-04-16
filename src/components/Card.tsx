const Card = (props: any) => {
  return (
    <div className="card">
      <h1>{props.user}</h1>
      <p>I'm {props.age} year old.</p>
      <button>Click Here</button>
    </div>
  );
};

export default Card;
