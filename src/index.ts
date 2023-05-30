// function logBrth(isBirthday: boolean, userName: string, age: number): void {
//   if (isBirthday) {
//     console.log(`Congrats ${userName} - your age is ${age}`);
//   }
// }

// logBrth(true, 'John', 33 );


type UserT = {
  name: 'Vasya';
  age: number;
}

interface UserI {
  name: 'Vasya'
  age: number
}

let arrayUsers: UserT[] = [{name: 'Vasya', age:33}, {name:'Vasya', age:33}]
let arrayUsersI: Array<UserI> = [{name: 'Vasya', age:32}, {name:'Vasya', age:33}]