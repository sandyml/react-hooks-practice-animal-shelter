import React from "react";

function Pet({ pet, onAdoptPet }) {

  const handleClick = () => {
    // console.log(pet)
    onAdoptPet(pet.id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.name}
          {pet.gender === "male" ? ' ♂' : ' ♀'}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {!pet.isAdopted ? 
          <button className="ui primary button" onClick={handleClick}>Adopt pet</button> 
          :
          <button className="ui disabled button">Already adopted</button>}
      </div>
    </div>
  );
}

export default Pet;