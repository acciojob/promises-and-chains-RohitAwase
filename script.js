
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const ageInput = document.getElementById("age").value.trim();
    const name = document.getElementById("name").value.trim();

    if (ageInput === "" || name === "") {
        alert("Please enter valid details.");
        return;
    }

    const age = Number(ageInput);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    promise
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});
