import {useState} from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState("")


    return (
        <div>
            <input type ="text" placeholder="Search" onChange={(e) => console.log(e.target.value)}></input>
            <button>Search</button>
        </div>
    )
}

export default Search;