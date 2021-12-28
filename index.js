// code your solution here
function superbowlWin(arrayOfRecords){
// Search through all the records
// When a record has a result of === "W"
// Return the year of the result

const results = arrayOfRecords.find(game => game.result === "W")
// return results.year
if (results === undefined){
    return undefined
} else {
    return results.year
}
}


//     return record.year === "2015";
// }
// console.log(record.find(superbowlWin).year)
