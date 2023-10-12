// weekly tasks storage on array
const targets = [{plumy:'sura',dueDate: '12/20/23',dept:'tech'},
{plumy:'das',dueDate:'12/12/2023',dept:'quality'}];

console.log(targets.length);


//constructor 

function weeklyTasks (task,dueDate,department){
        this.task = task;
        this.dueDate = dueDate;
        this.department = department;
}

const duty = new weeklyTasks();

function addTasks(){
    targets.push(duty);
}

function showTasks(){
    for(let i=0; i < targets.length;i++){
        console.table(targets[i]);
    }
}
showTasks();
