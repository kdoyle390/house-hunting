
import './App.css';
import Header from './Header'
import ListingContainer from './ListingContainer'
import Footer from './Footer'

function App() {


  const [listings, setListings] = useState([])

  useEffect( () => {
    fetch(`http://localhost:6001/results`)
      .then(resp => resp.json())
      .then(data => setListings(data));
  },[])


  return (
    <div className="App">
      <Header />
      <ListingContainer />
      <Footer />
    </div>
  );
}

export default App;
