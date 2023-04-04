// 1
const getSum = (a, b) => {
    console.log(a + b);
}

// 2
const logElementsOfArray = (array) => {
    if (array && Array.isArray(array)) {
        array.forEach((item) => {
            console.log(item)
        })
    } else {
        console.error('Unexpected data type provided, expected Array');
    }
}

// 3
const getRandomNumber = (limit = 10) => {
    console.log(Math.floor(Math.random() * limit));
}

// 4
const sayHello = (name = 'unknown user') => {
    console.log(`Hello, ${name}!`)
}

// 5
const getRandomJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', { headers: {
        Accept: "application/json"
    }}).then(res => res.json()).catch(err => console.log(err));


    console.log(response.joke)
}
