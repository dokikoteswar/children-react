
import './App.css';
import Hello from './Components/Hello';

const App = ()=> {
  return (
    <div>
      {/* one way props */}
     {/* <Hello name="debu"/>
     <Hello name="Archana"/>
     <Hello name="Kotesh"/> */}
     <Hello><p>I am kotesh</p></Hello>
     <Hello><p>I am Debu</p></Hello>
     <Hello><p>I am Bai</p></Hello>
    </div>
  );
}

export default App;
