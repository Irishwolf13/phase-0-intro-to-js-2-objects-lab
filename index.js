const employee = {
    name: "Frank",
    streetAddress: "123 Riso Street",
};

function updateEmployeeWithKeyAndValue(myEmployee, key, value){
    const employee2 = {...employee};
    employee2[key] = value;
    return employee2;
};

function destructivelyUpdateEmployeeWithKeyAndValue(myEmployee, key, value){
    myEmployee[key] = value;
    return myEmployee
};

function deleteFromEmployeeByKey(myEmployee, key){
    const myEmployee2 = {...myEmployee};
    myEmployee2[key] = undefined;
    return myEmployee2;
};
function destructivelyDeleteFromEmployeeByKey(myEmployee, key){
    myEmployee[key] = undefined;
    return myEmployee;
};