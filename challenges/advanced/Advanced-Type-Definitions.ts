/* 

Challenge 1: Advanced Type Definitions

Create a type that represents a generic JSON object with nested structures. 
Ensure that the type definition allows for deep nesting and properly captures the 
structure of the JSON.

*/


// Resolução 1

// Tipo UserJson
// Define 2 tipos genericos TAddress e TContacts
// Os 2 tem um valor padrão atribuido
// Caso não seja passado um tipo para UserJson, isso será como TS ira tipar TAddress e TContacts
// extends object -> tipo passado para TAddress, TContacts deve ser um objeto

type UserJson<
  TAddress extends object = {street: string, city: string, zipCode: string}, 
  TContacts extends object = {email: string, phone: string},
> = {
  name: string
  age: number
  address: TAddress
  contacts: TContacts[]
}

// Quando utilizando Tipos que possuem um ou mais tipos como parâmetros
// Criamos um type para ficar mais fácil de ler o código
// Readonly -> não é possível alterar o valor de jsonNested, apenas ler
// Nesse caso eu  não alterei nada, então poderia deixar simplemente Readonly<UserJson>

type UserJsonEasyToRead = Readonly<
  UserJson<
    // passando um tipo para TAddress
    {
      street: string,
      city: string, 
      zipCode: string,
    },
    // passando um tipo para TContacts
    {
      email: string,
      phone: string,
    }
  >
>

// UserJson está utilizando os tipos padrões

const jsonNested: UserJson = {
  name: "John Doe",
  age: 30,
  address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345",
  },
  contacts: [
      {
          email: "john.doe@example.com",
          phone: "555-1234",
      },
      {
          email: "j.doe@example.com",
          phone: "555-5678",
      },
  ],
}
