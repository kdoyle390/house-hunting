function ListingContainer () {

    const [listings, setListings] = useState([])

    useEffect( () => {
      fetch(`http://localhost:6001/results`)
        .then(resp => resp.json())
        .then(data => setListings(data));
    },[])

    return(
        <ListingCard listings={listings} setListings={setListings}/>
    )
}

export default ListingContainer;