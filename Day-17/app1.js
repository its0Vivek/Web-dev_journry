/// todo app

let todo =  [];

let req = prompt("please enter your request ");
 
while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }


    if(req == "list") {
        console.log("---------------------------------")
        for(let i=0; i<todo.length; i++) {
            console.log(i , todo[i]);
        }
        console.log("---------------------------------")
    } else if(req == "add") {
        let task =prompt("enter your task");
        todo.push(task);
        console.log("task add");
    }

    else if(req == "delete") {
      let idx = prompt("please enter your test idx ");
      todo.splice(idx, 1);
      console.log("task deleted")
    } else {
        console.log("wronge requist");
    }

   req = prompt("please enter your request ");
    }
   
    
