// // arr = [1,2,3,4,5];

// // const result = arr.map((j,i) => {
// //      (i + "-->" + j)
// // }).join(" ");

// // console.log(result)


//     let marks = [12, 25, 31, 23, 75, 81, 100]; 

//     marks.sort(function (a, b) { return a - b }); 

//     console.log(marks);

//     var a = "10";
//     var b = 10;
//     var res = a + b;
//     console.log(res , typeof res);

//     if("10" == 10)
//     {
//         console.log("true");
//     }
//     else{
//         console.log("False");
//     }


//     array = [
//         {
//             name:"Hariraj",
//             age: 20,
//         },
//         {
//             name : "Mine",
//             age:23,
//         },
//         {
//             name : "arish",
//             age :19,
//         },
//         {
//             name : "Vignesh",
//             age : 29
//         }
//     ]

// //  array.map((i)=>{
// //     console.log(i);
// //  })


// for(var i=0;i<array.length;i++)
// {
//     console.log(array[i]);
// }

//  console.log("-----------------------------------------")

//     var res = array.filter(ele => ele.age>19 || ele.name.startsWith("H"));
//     console.log(res);


// console.log("-------------------------------------------------");

// // const add = (a,b) =>{
// //     console.log(a+b);
// // }

// var header = document.querySelector("h1");

// var btn = document.getElementById("btn");

// // btn.addEventListener("click" , ()=>{
// //     btn.innerHTML = "clicked";
// //     header.textContent = " Hello Hariraj";
// //     header.classList.add("head");
// //     btn.style.backgroundColor = "green"
    
// // })

// // function myFunc() {
// //     btn.innerHTML = "clicked";
// //     header.textContent = "Hello Hariraj"
// //     let para = document.getElementById("btn");
// //     para.classList.toggle("black");
// // }

// function myFunc() {
//     let para = document.getElementById("h1");
//     para.classList.toggle("head");
// }

// // task , desciption , duration , meeting , dropdown -----> personal break , project work



var data = [
    {
        Task: "personal break",
        description: "Game",
        duration: "00:50:43"
    },
    {
        Task: "meeting",
        description: "client meeting",
        duration: "01:50:43"
    },
    {
        Task: "project work",
        description: "develop project",
        duration: "02:50:43"
    },
    {
        Task: "meeting",
        description: "client 2 meeting",
        duration: "03:50:43"
    },
    {
        Task: "personal break",
        description: "Travel",
        duration: "04:50:43"
    }
];

//viwes
// var tableBody = document.getElementById("taskData");
// const row =data.map(task => `
//     <tr>
//     <td>${task.Task}</td>
//     <td>${task.description}</td>
//     <td>${task.duration}</td>
//     <td><button onclick="updateTask('${task.Task}', '${task.description}', '${task.duration}')">Update</button></td>
//     <td><button onclick="deleteTask('${task.Task}', '${task.description}', '${task.duration}')">Delete</button></td>

//     </tr>
// `)
// tableBody.innerHTML = row.join('');


//---------------------------------------Render the details--------------------------------------

render();

//--------------------------Adding data ----------------------------

//adding all data
function addAll(){
    const inputTask = document.getElementById("task1").value;
    const inputDescription = document.getElementById("description1").value;
    const inputDuration = document.getElementById("duration1").value;
    
        const newTask = {
            Task: inputTask,
            description: inputDescription,
            duration: inputDuration
        };
        data.push(newTask);    
        render(); 
    }
    
//--------------------------------------------------------------------Delete the data-------------------------------------

function deleteTask(taskName, taskDescription, taskDuration) {

    const index = data.findIndex(task => task.Task === taskName && task.description === taskDescription && task.duration === taskDuration);
    if (index !== -1) {
        data.splice(index, 1);
        render();

    }
}


//--------------------------------------------------------Update the value-----------------------------------------

let index

function updateTask(taskName, taskDescription, taskDuration) {
    // Find the index of the task in the data array
    index = data.findIndex(task => task.Task === taskName && task.description === taskDescription && task.duration === taskDuration);
    
    console.log(index)
        document.getElementById("task1").value = taskName;
        document.getElementById("description1").value = taskDescription;
        document.getElementById("duration1").value = taskDuration;
}

function update() {
    const updatedTask = document.getElementById("task1").value;
    const updatedDescription = document.getElementById("description1").value;
    const updatedDuration = document.getElementById("duration1").value;

    console.log(updatedTask,updatedDescription,updatedDuration)
    console.log(index)
    if (index !== -1) {
        data[index] = {
            Task: updatedTask,
            description: updatedDescription,
            duration: updatedDuration
        };
        render();
    }
}
//-------------------------------------------------filter---------------

document.getElementById("taskselect").addEventListener("change" , function(){
    const curr = this.value;    
    const fil = data.filter(i => curr == "All" || curr == i.Task).map(task => `
    <tr>
    <td>${task.Task}</td>
    <td>${task.description}</td>
    <td>${task.duration}</td>
    </tr>
`)
tableBody.innerHTML = fil.join('');
})
//----------------------------------------------render------------------------------
var tableBody
//render autiomatically
function render(){
tableBody = document.getElementById("taskData");
 const row =data.map(task => `
    <tr>
    <td>${task.Task}</td>
    <td>${task.description}</td>
    <td>${task.duration}</td>
    <td><button onclick="updateTask('${task.Task}', '${task.description}', '${task.duration}')">Update</button></td>
    <td><button onclick="deleteTask('${task.Task}', '${task.description}', '${task.duration}')">Delete</button></td>
    </tr>
`)
tableBody.innerHTML = row.join('');
}
//---------------------------------------------------------------------------------------


let secount=0;
let min=0;
let hours=0;
let milli=0
let isRunning=false;
let timer
let formatTime
//start timmer funtions
function startstop(){
    if(!isRunning){
        isRunning=true
        timer = setInterval(()=>{
            milli++;
            if(milli==100)
            {
                secount++;
                milli=0;
                if(secount==60)
                {
                    min++;
                    secount=0;
                    if(min==60)
                    {
                        hours++;
                        min=0;
                    }
                }
            }   
            formatTime = `${hours.toString().padStart(2,"0")} : ${min.toString().padStart(2,"0")} : ${secount.toString().padStart(2,"0")} : ${milli.toString().padStart(2,"0")}`;
            document.getElementById("stopwatch").innerHTML = formatTime
            document.getElementById("startStop").innerText = "Stop"
        },10)
    }else{
        document.getElementById("startStop").innerHTML="start"
        clearInterval(timer);
        isRunning=false;
        document.getElementById("duration1").value = formatTime;
    }
}   

//reset function
function reset(){
    secount=0;
    hours=0;
    min=0;

    let formatTime = `${hours.toString().padStart(2,"0")} : ${min.toString().padStart(2,"0")} : ${secount.toString().padStart(2,"0")}`
    document.getElementById("stopwatch").innerHTML=formatTime
    document.getElementById("duration1").value = formatTime;
}
