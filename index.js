fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const item in collection){
        callback(collection[item])
      }
      return collection
    },

    //LONGER EACH VERSION
    // each: function(collection, callback) {
    //   if (Array.isArray(collection)){
    //     for (const item of collection){
    //       callback(item)
    //     }
    //   } else {
    //     for (const item in collection){
    //       callback(collection[item])
    //     }
    //   }
    //   return collection
    // },

    map: function(collection, callback) {
      const result = []
      for (const element in collection){
        result.push(callback(collection[element]))
      }
      return result
    },

    //LONGER MAP
    // loop over array, return array with function applied
    // will need an array and function to make it pure (it does not know about either on its own because it's pure)
    // map: function(collection, callback) {
    //   const result = []
    //   if (Array.isArray(collection)){
    //     for (const element of collection){
    //       result.push(callback(element))
    //     }
    //   } else {
    //     for (const element in collection){
    //       result.push(callback(collection[element]))
    //     }
    //   }
    //   return result
    // },


    reduce: function(collection, callback, accumulator = 0) {
      for (const element in collection){
        accumulator = callback(accumulator, collection[element], collection)
      }
      return accumulator
    },

    find: function(collection, callback){
      for (const element in collection){
        if (callback(collection[element])){
          return collection[element]
        }
      }
    },

    filter: function(collection, callback) {
      let result = []
      for (const element in collection){
        if (callback(collection[element])){
          result.push(collection[element])
        }
      }
      return result
    },

    size: function(collection) {
      return Object.entries(collection).length
    },

    first: function(collection, num = 0) {
      return num > 0 ? collection.slice(0, num) : collection[0]
    },

    last: function(collection, num = 0) {
      return num > 0 ? collection.slice(-num) : collection[collection.length-1]
    },

    compact: function(collection) {
      let return_array = []
      for (const element in collection){
        if (Boolean(collection[element])){
          return_array.push(collection[element])
        }
      }
      return return_array
    },

    sortBy: function(collection, callback) {
      let copy_arr = [...collection]
      return copy_arr.sort((a, b) => callback(a)-callback(b))
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
