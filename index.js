// Code your solutions in this file
function writeCards(names,message){
    let arr = []
    for (let i=0; i< names.length;i++){
        arr.push("Thank you, "+names[i]+", for the wonderful "+message+" gift!")
    }
    return arr
}



function countDown(num) {
    for (let i=num; i >= 0; i-- ){
        console.log(i)
    }
}