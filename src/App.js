//import Parent from "./context/Parent";
import Parent from './context/Parent';
import '../src/App.css';

//App.js only renders Parent.js component
function App() {
  return (
    <div className='App'>
      <Parent />
    </div>
  );
}

export default App;
