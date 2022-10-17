import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
// import { petsURL } from "../mocks/Globally";

let petsURL = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handleChangePetType = (type) => {
    setFilters({ type: type });
  }

  const handleFindPetsClick = () => {
    // let petsURL = "http://localhost:3001/pets";
    if(filters.type !== "all") {
      petsURL += `?type=${filters.type}`;
    }
    fetch(petsURL)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setPets(data);
    })
  }
  
  // const appFilter = (newPetType) => {
  //   // console.log("New Pet Type", newPetType)
  //   setFilters({ type: newPetType })
  // }
  
  const onAdoptPet = (id) => {
    console.log('IM ADOPTED', id)
    const newArray = pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    setPets(newArray)
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={handleChangePetType}
              onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser
              pets={pets}
              onAdoptPet={onAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;