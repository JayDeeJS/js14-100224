import './App.css';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <HeaderPage/>
      <AppRouter/>
    </div>
  );
}

export default App;