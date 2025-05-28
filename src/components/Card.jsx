// src/components/Card.jsx
// import taskList from '../taskData.jsx'; 
const Card = (props) => {
  return (
    <>
        <div key={props.id} className="card">
          <p>{props.text}</p>
          <button>Completed</button>
        </div>
      
    </>
  );
};

export default Card;
