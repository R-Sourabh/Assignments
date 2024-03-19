function promiseFunc(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('Operation completed successfully!');
            } else {
                reject('Operation failed!');
            }
        }, 2000);
    });
}

promiseFunc(true)
    .then((result) => { console.log(result); })
    .catch((error) => {
        console.error(error);
    });
