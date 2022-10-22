const promiseA= new Promise((resolve,reject)=>{
    resolve(1);
});

const propmiseB= new Promise((resolve,reject)=>{
    if(10>7){
        resolve(10)
    }
    else{
        reject({
            errorType:"type error",
            message:"unexpected error"
        })
    }
})

Promise.all([promiseA,propmiseB]).then((value)=>{
    console.log("enter the numbr"+value)
}).catch((error)=>{
    console.log("error occured:" + error.message)
}).finally(()=>{
    console.log("successfull")
})