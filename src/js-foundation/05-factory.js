// const {getId} = require('../plugins/get-id.plugins');
// const {getAge} = require('../plugins/get-age.plugins');
const {getId, getAge} = require('../plugins')

const buildPerson = ({name, birthdate}) => {
    return {
        id: getId(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
};

module.exports = {
    buildPerson,
};