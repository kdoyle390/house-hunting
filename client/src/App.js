import './App.css';
import ListingContainer from './ListingContainer';

function App() {


  // const [listings, setListings] = useState([])

  // useEffect( () => {
  //   fetch(`http://localhost:6001/results`)
  //     .then(resp => resp.json())
  //     .then(data => setListings(data));
  // },[])


  return (
    <div className="App">
      {/* <ListingContainer listings={listings} setListings={setListings}/> */}
      <ListingContainer/>
    </div>
  );
}

export default App;
