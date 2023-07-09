import './Card.css'

function Card(props) {
  return (
<div class="container">
  <div class="box">
    <span></span>
    <div class="content">

      <h2 className="card-title">{props.title}</h2>
      <p className="card-text"> {props.text}</p>
      <a href="#">Read More</a>
    </div>
    
    
  </div>


</div>
  
  );
}
export default Card;
