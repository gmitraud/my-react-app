function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="Profile Picture" />
      <h2 className="card-title">{props.title}</h2>
      <span className="card-text">{props.text}</span>
    </div>
  );
}

export default Card;
