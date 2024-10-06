function Button(props) {
  return (
    <div>
      <button className="btn">{props.name || props.size}</button>
    </div>
  );
}

export default Button;
