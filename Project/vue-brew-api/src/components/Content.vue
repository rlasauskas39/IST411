<template>
  <div>
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-9 mx-auto"><h1 class="mb-5"><span class="mast-title">Find A Random Brewery!</span></h1></div>
        <div class="row">  
          <div class="col-xl-9 mx-auto">
            <button class="btn-random" v-on:click="getBrew">Random Brewery</button>
          </div>
        </div>
      </div>
    </header>
    <section class="showcase">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-xl-9 order-lg-1 my-auto showcase-text">
            <h2>{{brewery.name}}</h2>
            <h4><strong>ID#: </strong>{{brewery.id}}</h4>
            <p><strong>Type: </strong>{{brewery.brewery_type}}</p>
            <p><strong>Address: </strong>{{brewery.street}}</p>
            <p><strong>City: </strong>{{brewery.city}}</p>
            <p><strong>State: </strong>{{brewery.state}}</p>
            <p><strong>Postal: </strong>{{brewery.postal_code}}</p>
            <p><strong>Country: </strong>{{brewery.country}}</p>
            <p><strong>Phone: </strong>{{brewery.phone}}</p>
            <p><strong>Website: </strong><a :href="brewery.website_url">{{brewery.website_url}}</a></p>
            <p><strong>Last Update: </strong>{{brewery.updated_at}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      brewery: {}
    }
  },
  methods: {
    getBrew() {
      //Generate random number between 8034 and 15895
      let id = parseInt((Math.random() * 7861) + 8034);
      
      //Get information from API about that brewery
      fetch("https://api.openbrewerydb.org/breweries/" + id)
      .then(res => res.json())
      .then((data) => {

        //Set the data in this component to the json received
        this.brewery = data
      })
    }
  },
  created: function() {
    //Runs the API call when the page is first created so there is always info presented
    this.getBrew()
  }
}
</script>

<style>

</style>