const eventBrite = new EventBrite();

const ui = new UI();

//listner for Submit


document.getElementById("formSub").addEventListener('click',(e) => {





  const cities = document.getElementById("cities").value;
  const category = document.getElementById("category").value;
  let img = document.querySelector(".img");
  let data = document.querySelector(".card-columns");
  if(cities !== "" && category!=="-Select-"){

    setTimeout(() => {
      img.style.display = "block";
      data.style.display = "none";

}, 1800);

   eventBrite.queryApi(cities,category)
   .then(res=>{
     let events = res.respond.events;
     if(events.length > 0){

      setTimeout(() => {
        img.style.display = "none";
        data.style.display = "block";

  }, 2000);
    ui.displayEvents(events);

     }else{


       ui.printmsg("No Events Found in your city!","alert alert-danger mt-4 text-center")
       ;

     }

   })

  }else{

    ui.printmsg("Add an City & category !","alert alert-danger mt-4 text-center");

  }



  e.preventDefault();
})