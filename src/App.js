import logo from './logo.svg';
import './App.scss';
import './_color.scss';
import Menu from './components/Menu/Menu'
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div id='container'>
      <Menu />
      <Welcome />
    </div>
  );
}

export default App;
