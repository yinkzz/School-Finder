let apiUrl = "https://sch-finder-api.herokuapp.com";
var schoolsList = document.querySelector(".school-container");


// GET ALL SCHOOLS
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
              <button type="button" class="btn btn-sm btn-outline-secondary"data-bs-toggle="modal" data-bs-target="#deleteSchool${school.id}">Delete</button>

              <!--Get A School Modal-->
              <div class="modal fade" id="schoolid${school.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${school.name} - ${school.country} <br><span style="font-size:.7em; color:green;">Tuition range: ${school.tuition_fee_range}</span></h5>
                    
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    
            
                    <img src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="img img-responsive" style="width: 100%;"/>
              
                    <hr/>

                    <p> ${school.short_desc}</p>
                    <p> <b> City </b>: ${school.city}</p>
                    <p> <b> Address </b>: ${school.address}</p>
                    <p> <b> Type </b>: ${school.type}</p>
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
            

            <!--Delete A School Modal-->
            <div class="modal fade" id="deleteSchool${school.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Please Confirm</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to delete <b>${school.name}</b>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Go back</button>
                    <button type="button" onclick="DeleteASchool(${school.id})" class="btn btn-primary" style="background: red; border: none; outline: none">Yes</button>
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



function DeleteASchool(id) {
  const token = window.localStorage.getItem('token')
  console.log(token)
  fetch(`${apiUrl}/api/schools/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${token}`
    },
  })
    .then((responseJson) => {
      console.log("School Deleted Successfully")
      fetchAllSchools();
      location.reload() // refreshes the page
    })
}