import React from 'react';
import './App.css';
import InputField from './components/InputField';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number,string];

//let x: unknown;

let printName: (name: string)  => never; // => void

//printName('Yolo');

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: 'Yolo',
// };

// let lotsOfPeople: Person[];

interface Person {
  name: string;
  age?: number;
}

// interface Guy extends Person {
//   profession: string;
// }

type X = Person & {
  a: string;
  b: number;
};

// type Y = X & {
//   c: string;
//   d: number;
// };

// let y: Y = {
//   c: 'efda',
//   d: 42,
// };

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField />
    </div>
  ); 
};

export default App;
