import logo from './logo.svg';
import './App.css';
import WelcomeLogin from './WelcomeFunc'; 
import Button2 from './Button2';
import Lists from './Lists';
import UserSignInTextBoxes from './TextBoxes';
import CreateNewProjectComponent from './CreateProjectComponent';
import UseExistingProjectComp from './UseExistingProjectComponent';
 
function App() {
  return (
    <div className="App">
      <div>
        <WelcomeLogin/>
        <button > New User? Sign Up Here</button>
        <UserSignInTextBoxes/>
        <Button2 /> 
        <CreateNewProjectComponent/>
        <UseExistingProjectComp />
        
      </div>
    </div>
  );
}

export default App;
