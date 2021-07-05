var listElement = document.getElementById("num-list")

for (var i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
        listElement.innerHTML += "<li>FizzBuzz</li>"
    } else if (i % 3 === 0) {
        console.log("Fizz");
        listElement.innerHTML += "<li>Fizz</li>"
    } else if (i % 5 === 0) {
        console.log("Buzz");
        listElement.innerHTML += "<li>Buzz</li>"
    } else {
        console.log(i);
        listElement.innerHTML += "<li>" + i + "</li>"
    }
}