//* factory function
const buildMakePerson = ({ getId, getAge }) => {

    return ({ name, birthdate }) => {

        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }

    }

};

module.exports = {
    buildMakePerson,
};