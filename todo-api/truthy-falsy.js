//* falsy values
//? null
//? undefined
//? 0
//? ''
//? NaN


//*truthy values
//? 1
//? 'string'
//? true
//? false
//? {}
//? []
//? function(){}

// let value = 0;
// let value = 1;
// let value = 'string';
// let value = '';
// let value = null;
// let value = undefined;
// let value = NaN;
// let value = true;
// let value = false;
// let value = {};
// let value = [];
let value = function(){};

if (value) {
    console.log('truthy');
} else {
    console.log('falsy');
}