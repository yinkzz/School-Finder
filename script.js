let apiUrl = "https://sch-finder-api.herokuapp.com";
var schoolsList = document.querySelector(".school-container");
// alert("welcome");

function fetchAllSchools() {
  fetch(`${apiUrl}/api/schools`)
    .then((response) => response.json())
    .then((data) => renderData(data));
}

fetchAllSchools();

function renderData(schools) {
  console.log(schools);
  let list = schools
    .map(
      (school) =>
        `
      <div class="col">





      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top"="100%" height="225" img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgw4SdAglTXFYVkhAaGLWNWhnewGMujjqig&usqp=CAU"
          alt="University of Oxford" role="img" aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
          dy=".3em"></text></img>





        <div class="card-body">
          <div class="university">
            <p>
               <b> ${school.name} </b>
            </p>
          </div>

          <p class="card-text"> ${school.short_desc} </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">

              <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#schoolid${school.id}">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>

              <div class="modal fade" id="schoolid${school.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${school.name} - ${school.country} </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    
            
                    <img src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="img img-responsive" style="width: 100%;"/>
              
<hr/>

                    <p> <b> Short_Desc </b>: ${school.short_desc}</p>
                    <p> <b> City </b>: ${school.city}</p>
                    <p> <b> Address </b>: ${school.address}</p>
                    <p> <b> Type </b>: ${school.type}</p>
                    <p> <b>Tuition Fee Range </b>: ${school.tuition_fee_range}</p>
                    <p> <b> Ownership </b>: ${school.ownership}</p>
                    <p> <b> Founded </b> : ${school.founded}</p>
                    <p> <b> Total Enrollment </b>: ${school.total_enrollment}</p>
                    
                  
            
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            

            </div>
          </div>
        </div>
      </div>
    </div>
`
    )
    .join(" ");

  schoolsList.innerHTML = list;
}
