// Este componente será responsable de mostrar el mensaje del contador.
import "./ShowCount.css";

const ShowCount = (props) => { 
  return (
    <h1 className="show-count">You clicked here {props.count} time</h1>
  );
};
export default ShowCount;