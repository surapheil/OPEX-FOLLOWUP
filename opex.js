// weekly tasks storage on array
let targets = [];

//console.log(targets.length);


//constructor 
function weeklyTasks (task,department,dueDate){
        this.task = task;
        this.department = department;
        this.dueDate = dueDate;
}

//calling the form 
const form = document.querySelector('form');

// Get the data from local storage
const data = localStorage.getItem('form');

// If the data is not empty, parse it and add it to the targets array
if (data) {
  targets = JSON.parse(data);
}

console.log(targets);

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //retriving the form input via DOM
    const Task = document.getElementById('task').value;
    const Department = document.getElementById('department').value;
    const Duedate = document.getElementById('dueDate').value;

    //creating object based on the constructor function and  adding the form inputs
    //to the created object
    const duty = new weeklyTasks(Task,Department,Duedate);
    console.log(duty);
    //adding the the new object to the targets array
    targets.push(duty);
    console.log(targets);

    //converting to string for storing
    let dataTargets = JSON.stringify(targets);
    
    //storing in the local storage
    localStorage.setItem('form',dataTargets);

    // let data = localStorage.getItem('form');
    // console.log(data);
    // if (data){
    //     targets = (JSON.parse(data));
    // }
    console.log(targets);

    //clearing the form to add new entries
    form.reset()
        
});


// function showTasks(){
//     for(let i=0; i < targets.length;i++){
//         console.table(targets[i]);
//     }
// }
// showTasks();
