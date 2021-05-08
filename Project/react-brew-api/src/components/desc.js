import React from 'react';

const Description = ({description}) => {
  return(
    <div>
      {/* Loops through the description array to find each JSON object and names the object brewery */}
      {description.map((brewery) => (
         <section class="showcase">
           <div class="container-fluid p-0">
             <div class="row">
                <div class="col-xl-9 order-lg-1 my-auto showcase-text">

                  {/* Display all brewery data that I want to show by taking from the JSON called brewery */}
                  <h2>{brewery.name}</h2>
                  <h4><strong>ID#: </strong>{brewery.id}</h4>
                  <p><strong>Type: </strong>{brewery.brewery_type}</p>
                  <p><strong>Address: </strong>{brewery.street}</p>
                  <p><strong>City: </strong>{brewery.city}</p>
                  <p><strong>State: </strong>{brewery.state}</p>
                  <p><strong>Postal: </strong>{brewery.postal_code}</p>
                  <p><strong>Country: </strong>{brewery.country}</p>
                  <p><strong>Phone: </strong>{brewery.phone}</p>
                  <p><strong>Website: </strong><a href={brewery.website_url}>{brewery.website_url}</a></p>
                  <p><strong>Last Update: </strong>{brewery.updated_at}</p>
                </div>
             </div>
           </div>
         </section>
      ))}
    </div>
  )
};

export default Description