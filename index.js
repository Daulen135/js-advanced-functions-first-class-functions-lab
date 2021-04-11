// Code your solution in this file!

// const returnFirstTwoDrivers=function (arr){
// let newArr;
// return newArr=arr.slice(0,2)

// }

const returnFirstTwoDrivers=(arr)=>{
  let arr2;
  return arr2=arr.slice(0,2);
}

const returnLastTwoDrivers=function(arr){
let newArr2;
return newArr2=arr.slice(-2)

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num) {
    return fee => num * fee 
    }


function fareDoubler (num) {
    return 2 * num
}

function fareTripler (num) {
    return 3 * num
}


// function selectDifferentDrivers(drivers, driversToReturn) {
//     return driversToReturn(drivers);
//   };

  function selectDifferentDrivers(driversArray, driversToReturn) {
    let driversList = driversToReturn(driversArray);//invoking functions
      return driversList
    };