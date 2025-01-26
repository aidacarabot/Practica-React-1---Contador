// Este componente será responsable de mostrar el mensaje del contador.
import "./ShowCount.css";

const ShowCount = ({ count }) => { 
  return (
    <h1 className="show-count">You clicked here {count} time</h1>
  );
};
export default ShowCount;