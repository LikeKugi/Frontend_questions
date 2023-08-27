# Be able to loop through Object keys

Для простых объектов доступны следующие методы:

- Object.keys(obj) – возвращает массив ключей.
- Object.values(obj) – возвращает массив значений.
- Object.entries(obj) – возвращает массив пар [ключ, значение].

## Для перебора всех свойств объекта используется цикл `for..in`.

```JavaScript
const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true
};

// iterate over the user object

for (const key in user) {

    console.log(`${key}: ${user[key]}`);
}

// name: John Doe

// email: john.doe@example.com

// age: 25

// dob: 08/02/1989

// active: true

for (const key in user) {

    if (user.hasOwnProperty(key)) {

        console.log(`${key}: ${user[key]}`);
    }
}
```

## Object.keys(obj)

```JavaScript
const courses = {
    java: 10,

    javascript: 55,

    nodejs: 5,

    php: 15
};

// convert object to key's array

const keys = Object.keys(courses);

// print all keys

console.log(keys);

// [ 'java', 'javascript', 'nodejs', 'php' ]

// iterate over object

keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});

// java: 10

// javascript: 55

// nodejs: 5

// php: 15
```

## Object.values()

```JavaScript
const animals = {
    tiger: 1,

    cat: 2,

    monkey: 3,

    elephant: 4
};

// iterate over object values

Object.values(animals).forEach(val => console.log(val));

// 1
// 2
// 3
// 4
```

## Object.entries()

```JavaScript
const animals = {
    tiger: 1,

    cat: 2,

    monkey: 3,

    elephant: 4
};

const entries = Object.entries(animals);
console.log(entries);

// [ [ 'tiger', 1 ],

//   [ 'cat', 2 ],

//   [ 'monkey', 3 ],

//   [ 'elephant', 4 ] ]
```
