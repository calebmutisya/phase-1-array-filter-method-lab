// Code your solution here

const drivers=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match
function findMatching(drivers,name){
    const findDriverName = drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase());
    if(findDriverName){
        return findDriverName;
    }else{
        return [];
    }
};

// ✓ returns a driver if beginning provided letters match
// ✓ does not return drivers if only middle or ending letters match
// ✓ does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.startsWith(letters));
};
//accesses the data structure to check if name matches
function matchName(drivers, name){
    return drivers.filter(driver=> driver.name === name);
};
