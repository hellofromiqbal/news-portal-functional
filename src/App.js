import './App.css';
import AppNavbar from './components/AppNavbar';
import MainPage from './pages/MainPage';
import useFetchArticles from './hooks/useFetchArticles';

function App() {
  const { data, handleSearch } = useFetchArticles();

  return (
    <div className="App">
      <AppNavbar handleSearch={handleSearch}/>
      <MainPage data={data}/>
    </div>
  );
}

export default App;
