//* factory function
interface BuidMakerPersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
};

interface PersonOptions {
    name: string,
    birthdate: string
};


export const buildMakePerson = ({ getId, getAge }: BuidMakerPersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }

    }

};
