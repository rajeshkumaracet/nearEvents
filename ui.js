class UI {
  constructor() {
    //app Init

    this.init();
  }

  init() {
    //display caterogy

    this.printCategories();

    this.result = document.getElementById("result");
    this.form = document.querySelector("#eventbr");
  }

  //display Events
  displayEvents(events) {
    let template = "";
    events.forEach(eventInfo => {
      template += `

          <div class="card mt-5 new" id = "effect">
              <div class="card-body" >
                <img class="img-fluid mb-2 rounded mx-auto d-block" src = "${
                  eventInfo.logo !== null ? eventInfo.logo.url : " "
                }">
          </div>
          <div class="card-body">
            <div class="card-text ">
              <h2 class="text-center card-title head">${
                eventInfo.name.text
              }</h2>
              <p class="lead text-warning text-center">Event Information</p>
              <p class=""text-justify>${eventInfo.description.text.substr(
                0,
                200
              )}...</p>
              <div class="text-center">
              <p class="badge badge-success p-2">Date & Time: ${
                eventInfo.start.local
              }</p>
              </div>
              <a href=${
                eventInfo.url
              } target="_blank" class="btn btn-outline-warning btn-block mt-3"><i class="fas fa-ticket-alt"></i> Get Tickets </a>

            </div>

          </div>


        </div>
       </div>


        `;
    });

    this.result.innerHTML = template;
  }

  printCategories() {
    const categories = eventBrite
      .getCategoriesAPI()
      .then(res => {
        let option = document.querySelector("#category");
        let final = res.response.categories;
        final.forEach(res => {
          let createElem = document.createElement("option");
          createElem.value = res.id;
          createElem.appendChild(document.createTextNode(res.name));
          option.appendChild(createElem);
        });
      })
      .catch(err => console.log(err));
  }

  printmsg(msg, className, a, b) {
    this.form.reset();
    const div = document.createElement("div");
    div.className = className;
    div.innerHTML = '<i class="fas fa-dumpster-fire"></i>  ';
    div.appendChild(document.createTextNode(msg));

    //insert into html

    const search = document.querySelector(".card-body");
    const search1 = document.querySelector(".card");

    search1.insertBefore(div, search);

    setTimeout(() => {
      this.removemsg();
    }, 2000);
  }
  //remove msg
  removemsg() {
    this.form.reset();
    const alert = document.querySelector(".alert");

    if (alert) {
      alert.remove();
    }
  }
}
