// Ejercicio 1

const task = [
    {
        Name: "Gym",
        id: "1",
        state: false,
    },
    {
        Name: "Walking the dog",
        id: "2",
        state: false,
    },
    {
        Name: "do homework",
        id: "3",
        state: false,
    },
    {
        Name: "lunch",
        id: "4",
        state: false,
    },
]

const completetasks = (id) => {
    task.forEach(task => {
     if (task.id === id) {
         task.state = true;
     }
    });
 };
 completetasks ("2")
console.log(task) 



    