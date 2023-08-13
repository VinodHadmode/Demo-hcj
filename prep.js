

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name = "vinod"
            if (name) {
                resolve(name)
            } else {
                reject("Error")
            }
        }, 1000);
    })
}

// console.log(test());
test().then((res) => console.log(res))
    .catch((err) => console.log(err))