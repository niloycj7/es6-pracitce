const person = {name: 'JAck William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu khet', phone: '0171772211', friends: ['Tom hancks', 'tom cruise']}

const { phone, gfName, address, salary } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
// const gfName = person.gfName;
// const phone = person.phone;


// console.log(gfName, phone, salary, address)
// console.log(gfName, phone, salary, address)

const friends = ["Sakib khan", "Arman khan", "Amir khan", "Salman khan", "Shahrukh khan"];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);