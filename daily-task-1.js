let person = [
    {
      "_id": "640b3f17229268c82c6addcf",
      "index": 0,
      "isActive": false,
      "age": 22,
      "eyeColor": "green",
      "name": "Angeline Gates",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f17ab19ecd1b9733ea0",
      "index": 1,
      "isActive": false,
      "age": 21,
      "eyeColor": "brown",
      "name": "Cross Shelton",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3f179aba447a8730d1e2",
      "index": 2,
      "isActive": false,
      "age": 25,
      "eyeColor": "brown",
      "name": "Alisha Saunders",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f17fd828572b7856b12",
      "index": 3,
      "isActive": true,
      "age": 23,
      "eyeColor": "green",
      "name": "Ramona Griffin",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f17ae8dd730c8067edc",
      "index": 4,
      "isActive": true,
      "age": 28,
      "eyeColor": "blue",
      "name": "Patrica Mitchell",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f17a84634ac822d76f4",
      "index": 5,
      "isActive": false,
      "age": 36,
      "eyeColor": "blue",
      "name": "Winters Snider",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3f1791404b38ebe18efb",
      "index": 6,
      "isActive": false,
      "age": 33,
      "eyeColor": "green",
      "name": "Joni Barry",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3f17dae0dd740988d993",
      "index": 7,
      "isActive": false,
      "age": 36,
      "eyeColor": "green",
      "name": "Lamb Mendoza",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3f17cb974f47f10d2bc5",
      "index": 8,
      "isActive": true,
      "age": 26,
      "eyeColor": "blue",
      "name": "Clarissa Mcguire",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f17231d3b6198c90784",
      "index": 9,
      "isActive": false,
      "age": 36,
      "eyeColor": "green",
      "name": "Elvia Hall",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f17ef4f6f91a7e31cf8",
      "index": 10,
      "isActive": false,
      "age": 24,
      "eyeColor": "blue",
      "name": "Ann Wall",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3f178a5ca2a8daebb657",
      "index": 11,
      "isActive": true,
      "age": 38,
      "eyeColor": "brown",
      "name": "Theresa Barrett",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3f17beb581eba7cb6fda",
      "index": 12,
      "isActive": true,
      "age": 22,
      "eyeColor": "blue",
      "name": "Mcneil Powell",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3f1782e0b6b514af95c6",
      "index": 13,
      "isActive": true,
      "age": 39,
      "eyeColor": "brown",
      "name": "Tonya Acosta",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3f179b6364ace23ec14b",
      "index": 14,
      "isActive": true,
      "age": 22,
      "eyeColor": "blue",
      "name": "Horn Fitzgerald",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3f17a10e1369c104e67b",
      "index": 15,
      "isActive": false,
      "age": 21,
      "eyeColor": "green",
      "name": "Swanson Ross",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3f176ee1b48c2fa6a5e6",
      "index": 16,
      "isActive": false,
      "age": 23,
      "eyeColor": "brown",
      "name": "Josie Gilliam",
      "gender": "female",
      "favoriteFruit": "strawberry"
    }
  ]

// 1) print person yang suka buah apple dan warna mata nya biru
for (let i = 0; i < person.length; i++) {
    if(person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue") {
        console.log(person[i])
    }
}

// 2) print berapa person yang age nya diatas 30
let jumlah = 0

for (let i = 0; i < person.length; i++) {
  if(person[i].age > 30) {
    jumlah++
  }
}
console.log(jumlah)

//3) print person yang isActive true and gender nya female
for (let i = 0; i < person.length; i++) {
    if(person[i].isActive === true && person[i].gender === "female") {
        console.log(person[i])
    }
}

//4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
for (let i = 0; i < person.length; i++) {
  if(person[i].age > 30 || person[i].age < 25) {
    if(person[i].eyeColor === "blue") {
      console.log(person[i])
    }
  }
}

//5) print person yang mengandung huruf W di name nya
for (let i = 0; i < person.length; i++) {
  if(person[i].name.includes("W") || person[i].name.includes("w")) {
    console.log(person[i].name)
  }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25
for (let i = 0; i < person.length; i++) {
  if(person[i].isActive === false && person[i].gender === "male") {
    if(person[i].age > 25) {
      console.log(person[i])
    }
  }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
for (let i = 0; i < person.length; i++) {
  if(person[i].age < 30 || person[i].eyeColor === "brown") {
    if(person[i].favoriteFruit === "banana") {
      console.log(person[i])
    }
  }
}

// 8) print person gender male
for (let i = 0; i < person.length; i++) {
  if(person[i].gender === "male") {
    console.log(person[i])
  }
}

// 9) print person eyeColor Blue
for (let i = 0; i < person.length; i++) {
  if(person[i].eyeColor === "blue") {
    console.log(person[i])
  }
}

// 10) print person age diatas 30
for (let i = 0; i < person.length; i++) {
  if(person[i].age > 30) {
    console.log(person[i])
  }
}