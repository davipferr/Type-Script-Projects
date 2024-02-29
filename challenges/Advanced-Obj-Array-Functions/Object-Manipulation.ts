/*

Challenge 1: Object Manipulation
You have an object representing a user:

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 25,
};

Your task is to create a function updateUser that takes the user object and 
an object with updated properties, and returns a new object with the updated values

*/

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 25,
};

const uptd: Partial<User> = {
  name: "Davi",
  email: "davpferr@example.com",
};

// Resolução 1 - sem generics

const updateUser = (userObj: User, uptdObj: Partial<User>) => {
  return { ...userObj, ...uptdObj };
};

// Resolução 2 - Com Generics, e Infers
type UpdateFunction = <T>(userObj: T, uptdObj: Partial<T>) => T;

// Infers type User
const infersObjectType: UpdateFunction = (userObj, uptdObj) => {
  return { ...userObj, ...uptdObj };
};
