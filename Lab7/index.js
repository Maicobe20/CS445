window.onload = function(){
  
    employeeFetch();
    document.getElementById('btn').onclick = employeeFetch;
}
function employeeFetch(){
    
    fetch('https://randomuser.me/api/?results=5')
    .then(result=>result.json())
    .then(employees=>postEmployees(employees.results));
}

function postEmployees(empList){
    let innerdiv = document.getElementById('innerdiv');
    innerdiv.innerHTML = "";

    for(let i=0;i<=empList.length;i++){

    let post = `
    <div class="col-4"><img src="${empList[i].picture.large}"></div>
    <div class="col-8">
    <p class="text-end"><b>${empList[i].name.first +" "+ empList[i].name.last}</b></p>
    <p class="text-end">Phone:${ empList[i].phone}</p>
    <p class="text-end">Email:${ empList[i].email}</p>

    </div>
    <hr>
    
    `
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = post;
    innerdiv.appendChild(row);
    }
    
}
