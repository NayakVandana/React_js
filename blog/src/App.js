import './App.css';
import Student from './Student'
function App() {

  return (
    <div className="App">
     <h1>Props in React :)</h1>
     <Student name={"anil"}  email="anil@test.com" other={{address:"delhi",mobile:"000"}}/>
     <Student name={"anil"}  email="anil@test.com" other={{address:"delhi",mobile:"000"}}/>
     <Student name={"anil"}  email="anil@test.com" other={{address:"delhi",mobile:"000"}}/>
    </div>
  );
}

export default App;