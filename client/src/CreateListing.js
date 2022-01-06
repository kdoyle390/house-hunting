import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


function CreateListing() {

    const [houseData, setHouseData] = useState({
        address: "",
        Sq_ft: "",
        image_url: '',
        rent: "",
        // user_id: loginId
    })

    const [isSelected, setIsSelected] = useState(false)

    const handleNewListingClick = () => {
        setIsSelected(true)
    }

    const handlePost = (e) => {
        e.preventDefault()
        console.log(houseData)
        
        fetch('http://localhost:9292/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(houseData),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        setIsSelected(false)
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
        {isSelected ? 
            <FormStyle>
            <form className="post-form" onSubmit={handlePost}>
            <h2>List Your Home!</h2>
            <label>
                Address:
                <input
                type="text"
                id="header"
                placeholder=""
                value={houseData.address}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Sq ft:
                <textarea
                id="description"
                placeholder=""
                value={houseData.sq_ft}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Post Image:
                <input
                type="text"
                id="image_url"
                placeholder=""
                value={houseData.image_url}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Rent:
                <input
                type="text"
                id="content_link"
                placeholder=""
                value={houseData.rent}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <button type="submit">Post!</button>
            </form>
            </FormStyle>
        :
        <ButtonStyle>
            <button onClick={handleNewListingClick}>List your home!</button>
        </ButtonStyle>
        
        }
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
        margin: 10px;
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
    }
    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 90%;
        height: 20px;
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
        height: 20px;
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