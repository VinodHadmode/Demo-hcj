
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const data = "vinod"
        if (data) {
            resolve(data)

        } else {
            reject("Eroorr")
        }
    }, 3000);
})

promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))

