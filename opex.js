// weekly tasks storage on array
const targets = [];

//console.log(targets.length);


//constructor 
function weeklyTasks (task,department,dueDate){
        this.task = task;
        this.department = department;
        this.dueDate = dueDate;
}

//calling the form 
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const Task = document.getElementById('task').value;
    const Department = document.getElementById('department').value;
    const Duedate = document.getElementById('dueDate').value;



//creating object based on the constructor function and  adding the form inputs
// to the created object
    const duty = new weeklyTasks(Task,Department,Duedate);
    console.log(duty);
//adding the the new object to the targets array
    targets.push(duty);
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
