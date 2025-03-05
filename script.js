// const freelancers = [
//     { name: "Dr. Slice", price: 25, occupation: "gardener" },
//     { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//     { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//     { name: "Prof. Prism", price: 81, occupation: "teacher" },
//     { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//     { name: "Prof. Spark", price: 76, occupation: "programmer" },
//     { name: "Dr. Wire", price: 47, occupation: "teacher" },
//     { name: "Prof. Goose", price: 72, occupation: "driver" },
//   ];

// Name database to get started==
const available = [
    {
        name: "Alice",
        price: 50,
        occupation: "programmer",
    },
    {
        name: "Alan",
        price: 30,
        occupation: "writer",
    }
]

// Random number gen testing
function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Adding names and occupations==
const names = ["Alice", "Bob", "Jason", "Alan", "Lisa", "Sally", "Billy", "Tony", "Carol", "Nate"]

const occupations = ["writer", "teacher", "programmer", "painter"]
 

function addFreelance() {
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]

    const name = names[Math.floor(Math.random() * names.length)]

    const price = randomPrice(30, 100)

    available.push({name, price, occupation})
}

// Rendering==
function renderFreelance() {
    const freelance = document.querySelector("#container");
    const avElement = available.map((lancer) => {
        const freelanceElement = document.createElement("p");
        freelanceElement.textContent = lancer.name + "|||" + lancer.price + "|||" + lancer.occupation;
        return freelanceElement
    });
    freelance.replaceChildren(...avElement)
}

function priceArr(arr) {
    const prices = [];
    for(let i = 0; i < arr.length; i++) {
        prices.push(arr[i].price)
    }
    return prices
}

function avgPrice(arr) {
    sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

function renderAvg() {
    const avg = document.querySelector("#avg");
    const num = Math.floor(avgPrice(priceArr(available)))
    avg.replaceChildren(num)
}


console.log()


// Looping Stuff ==
const freelanceInterval = setInterval(() => {
    addFreelance()
    renderFreelance()
    renderAvg()
}, 2000);


//TESTING
console.log(available)

addFreelance()

console.log(available);
// console.log(document.body);
