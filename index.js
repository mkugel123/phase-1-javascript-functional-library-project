
// const myEach = function(collection, cb){
//     let collectionClone = collection
//     if (typeof collection !== 'array'){
//         collectionClone = Object.values(collection)
//     }
//     collectionClone.forEach(item => cb(item))
//     return collection
// }

// const myMap = function(collection, cb){
//     let collectionClone = collection
//     if (typeof collection !== 'array'){
//         collectionClone = Object.values(collection)
//     }
//     return collectionClone.map(value => cb(value)) 
// }

// const myReduce = function(collection, cb, acc){
//     let collectionClone = collection
//     if (typeof collection !== 'array'){
//         collectionClone = Object.values(collection)
//     }
//     if (acc === undefined){
//         acc = collectionClone[0]
//         collectionClone = collectionClone.slice(1)
//     }
// return collectionClone.reduce(cb, acc)
// }

// const myFind = function(){
    
// }

const myEach = function(collection, cb){
    let collectionClone = collection
    if (typeof collection !== 'array'){
        collectionClone = Object.values(collection)
    }
    for (const item of collectionClone){
        cb(item)
    }
    return collection
}

// myEach([1, 2, 3], alert);


const myMap = function(collection, cb){
    let collectionClone = collection
    const newCollection = []
    if (typeof collection !== 'array'){
        collectionClone = Object.values(collection)
    }
    for (const item of collectionClone){
        newCollection.push(cb(item))
    }
    return newCollection
}

// myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });

const myReduce = function(collection, cb, accum){
    let collectionClone = collection
    if (typeof collection !== 'array'){
        collectionClone = Object.values(collection)
    }
    let init
    if (accum === undefined){
        accum = collectionClone[0]
        collectionClone = collectionClone.slice(1)
    }
    init = accum
    
    for (const value of collectionClone){
        accum = cb(accum, value, collectionClone)
        init = accum
    }
    return init
}

// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val;}, 10);

const myFind = function(collection, cb){
    let collectionClone = collection
    if (typeof collection !== 'array'){
        collectionClone = Object.values(collection)
    }
    
    for (const value of collectionClone){
        if (cb(value)){
            return value
        } 
    }
    return undefined
}

// myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

const myFilter = function(collection, cb){
    let collectionClone = collection
    const newCollection = []
    if (typeof collection !== 'array'){
        collectionClone = Object.values(collection)
    }
    
    for (const value of collectionClone){
        if (cb(value)){
            newCollection.push(value)
        } 
    }
    console.log(newCollection)
    return newCollection
}

// myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })

const mySize = function(collection){
    let collectionClone = collection
    if (typeof collection !== 'array'){
        collectionClone = Object.values(collection)
    }
    let size = 0
    for (const value in collectionClone){
        size ++
    }
    return size
}

// mySize([]);

const myFirst = function(array, n){
    const newArray = []
    if (n === undefined){
        return array[0]
    } else {
        for (let i = 0; i < n; i++){
            newArray.push(array[i])
        }
        return newArray
    }
}

// myFirst([5, 4, 3, 2, 1], 3);

const myLast = function(array, n){
    const newArray = []
    if (n === undefined){
        return array[mySize(array) - 1]
    } else {
        for (let i = mySize(array) - 1; i > mySize(array) - (n+1); i--){
            newArray.unshift(array[i])
        }
        return newArray
    }
}

// myLast([5, 4, 3, 2, 1]);

const myKeys = function(object){
    const keysArray = []
    for (const key in object){
        keysArray.push(key)
    }
    return keysArray
}

// myKeys({one: 1, two: 2, three: 3});

const myValues = function(object){
    const keysArray = myKeys(object)
    const valuesArray = []
    for (const value of keysArray){
        valuesArray.push(object[value])
    }
    return valuesArray
}

myValues({one: 1, two: 2, three: 3});