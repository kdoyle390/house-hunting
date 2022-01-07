import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


function CreateListing() {

    const [houseData, setHouseData] = useState({
        address: "",
        city: "",
        state: "",
        Square_feet: "",
        house_img: '',
        num_beds: "",
        num_baths: "",
        rent: "",
        // user_id: loginId
    })

    // const [isSelected, setIsSelected] = useState(false)

    // const handleNewListingClick = () => {
    //     setIsSelected(true)
    // }

    const handlePost = (e) => {
        e.preventDefault()
        console.log(houseData)
        
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(houseData),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        // setIsSelected(false)
        window.location.reload(false)
        
    }

    const handleChange = (e) => {
        setHouseData({
            ...houseData,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <div>
            <FormStyle>
            <form className="post-form" onSubmit={handlePost}>
            <h2>List Your Home!</h2>
            <label>
                Street Address:
                <input
                type="text"
                id="address"
                placeholder=""
                value={houseData.address}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                City:
                <input
                type="text"
                id="city"
                placeholder=""
                value={houseData.city}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                State:
                <input
                type="text"
                id="state"
                placeholder=""
                value={houseData.state}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Number of Bedrooms:
                <input
                type="text"
                id="num_beds"
                placeholder=""
                value={houseData.num_beds}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Number of Bathrooms:
                <input
                type="text"
                id="num_baths"
                placeholder=""
                value={houseData.num_baths}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Sq ft:
                <input
                id="square_feet"
                placeholder=""
                value={houseData.square_feet}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Image Link:
                <input
                type="text"
                id="house_img"
                placeholder=""
                value={houseData.house_img}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Rent:
                <input
                type="text"
                id="rent"
                placeholder=""
                value={houseData.rent}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <button type="submit" style={{display: 'flex'}}>List!</button>
            </form>
            </FormStyle>
        </div>
    )
}

export default CreateListing;



const FormStyle = styled.div`
display: flex;
justify-content: center;
    h2 {
        font-size: 24px;
        margin: 2px;
    }
    form {
        width: 20%;
        margin: 30px;
        padding: 5px;
        border-radius: 5px;
        background-color: aqua;
        color: black;
        font-weight: bold;
        box-shadow: 7px 7px black;
    }
    label {
        font-size: 16px;
        justify-content: left;
        width: 200px;
    }
    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 92%;
        height: 30px;
        font-family: arial;
        border-radius: 5px;
        position: relative;
        right: 3px;
        padding: 5px;
    }
    input {
        display: block;
        justify-content: center;
        /* margin: auto; */
        margin: 0px;
        position: relative;
        left: 10px;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
        height: 30px;
        background-color: white;
        padding: 5px;
    }
    #img {
        text-align-last: center;
        margin: auto;
        padding: 5px;
        font-weight: bold;
    }
    button {
        background-color: white;
        border: none;
        color: black;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 5px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }
`

const ButtonStyle = styled.div`
    
button {
    background-color: aqua;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 3px;
    text-decoration: none;
    margin: 9px 6px;
    cursor: pointer;
    box-shadow: 5px 5px black;
    position: justify;
    bottom: 25px;
}
`