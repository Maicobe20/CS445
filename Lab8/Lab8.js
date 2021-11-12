const { from,Observable } = rxjs;
window.onload = function () {
    document.getElementById('searchbtn').addEventListener('click', employeeFetch)
    document.getElementById('btn').onclick = employeeFetch;
}
function employeeFetch() {
    let input = +document.getElementById('userinput').value;
    fetch('https://randomuser.me/api/?results=' + input)
        .then(result => result.json())
        .then(employees => { postEmployees(employees.results) });
    
}

function postEmployees(empList) {
 
    let innerdiv = document.getElementById('listcol');
    innerdiv.innerHTML = "";

   new Observable(observable => {
        observable.next(empList);

    }).subscribe({
        next: data => {
            
            for (let i = 0; i <= data.length; i++) {
                
                let post = `
    <div class="col-4"><p class="text-end"><b>${data[i].name.first + " " + data[i].name.last}</b></p></div>
    <div class="col-8">
    <h4 class="text-end">Location</h4>
    <p class="text-end">${data[i].location.street.number + '  ' + data[i].location.street.name}</p>
    <p class="text-end">${data[i].location.city + ' ' + data[i].location.state + ' ' + data[i].location.country + ' ' + data[i].location.postcode}</p>
    
    </div>
    <hr>
    
    `
                let row = document.createElement('div');
                row.className = 'row';
                row.innerHTML = post;
                innerdiv.appendChild(row);
            }
        }
    })
}