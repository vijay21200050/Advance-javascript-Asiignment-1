async function load() {
    return (await fetch('http://api.nobelprize.org/v1/prize.json')).json();
}

document.addEventListener("DOMContentLoaded", async () => {
    let users = [];

    try {
        users = await load();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    var ans = [];

    var sol = users.prizes;
    sol.forEach(element => {
        if(element.year >= 2000 && element.year <= 2019 && element.category === "chemistry")
            element.laureates.forEach(element1 => {
                ans.unshift(element1.firstname + ' ' + element1.surname);
            })
    });

    console.log(ans);

})