
import './App.css';
import ListingContainer from './ListingContainer';

function App() {


  const [listings, setListings] = useState([])

  useEffect( () => {
    fetch(`http://localhost:6001/results`)
      .then(resp => resp.json())
      .then(data => setListings(data));
  },[])


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Header/>
      <ListingContainer listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;
