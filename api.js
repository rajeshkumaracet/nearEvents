class EventBrite {

constructor(){
  this.auth_token = "WEHPJEMVAPIROWIRVOOU";
}

//get Events

async queryApi(cities, category){

  let query = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${cities}&sort_by=date&categories=${category}&token=${this.auth_token}`);

  const respond = await query.json();



  return{
    respond
  }

}


async getCategoriesAPI(){

  const events = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);


  const response = await events.json();

  return {
    response
  }

}


 }
