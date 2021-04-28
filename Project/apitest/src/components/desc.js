import React from 'react';

const Description = ({description}) => {
  return(
    <div>
      <center><h1>Brewery Data</h1></center>
      {description.map((brewery) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{brewery.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">ID#: {brewery.id}</h6>
            <p className="card-text">Type: {brewery.brewery_type}</p>
            <p className="card-text">Address: {brewery.street}</p>
            <p className="card-text">City: {brewery.city}</p>
            <p className="card-text">State: {brewery.state}</p>
            <p className="card-text">Postal: {brewery.postal_code}</p>
            <p className="card-text">Country: {brewery.country}</p>
            <p className="card-text">Phone: {brewery.phone}</p>
            <p className="card-text">Website: <a href={brewery.website_url}>{brewery.website_url}</a></p>
            <p className="card-text">Last Database Update: {brewery.updated_at}</p>
            
            
          </div>  
        </div>  
      ))}
    </div>
  )
};

export default Description