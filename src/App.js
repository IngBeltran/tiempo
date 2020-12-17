import './App.css';
import Search from './components/Search'
import Results from './components/Results'
import useHttpSearch from './hooks/httpHook'

function App() {
    const [items, search] = useHttpSearch() 

    const doSearch = e => {
        if(e.key === 'Enter') search(e.target.value)
    }

  return (
    <div className="App">
      <Search handleSearch={doSearch} />
      <Results items={items} />
    </div>
  );
}

export default App;