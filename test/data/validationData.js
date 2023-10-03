const participantValidationMsgs = [
    "Alias should be a string",
    "Alias cannot be empty",
    "Alias should have a minimum length of 2",
    "Age must be a number",
    "Age cannot be empty",
    "Age must be minimum 15",
    "MemberOf should be a string",
    "MemberOf cannot be empty",
    "MemberOf must have a minimum length of 2",
]
const participantValidateData = [
    //ALIAS VALIDATION
    {
      alias: 1, //must be a string
    },
    {
      alias: "", //must NOT be empty
    },
    {
      alias: "w", //must be min 2
    },
    //AGE VALIDATION
    {
      age: 1, //must be min 15
    },
    {
      age: "", //must be integer
    },
    //MEMBEROF VALIDATION
    {
      memberOf: "",
    },
    {
      memberOf: "g", //must be min 2
    },
    {
      memberOf: 1, //must be string
    },
    //ANIMALS VALIDATION
    {
      //can only have max 6
      animals: {
        create: [
          {
            name: "animalOne",
            taxonomy: MAMMAL,
            species: "Wolf",
            rank: OLYMPUS,
          },
          {
            name: "animalTwo",
            taxonomy: INSECT,
            species: "Centipede",
            rank: OLYMPUS,
          },
          {
            name: "animalThree",
            taxonomy: MAMMAL,
            species: "Cat",
            rank: TARTAROS,
          },
          {
            name: "animalFour",
            taxonomy: MAMMAL,
            species: "Blue Whale",
            rank: UNDYING,
          },
          {
            name: "animalFive",
            taxonomy: MAMMAL,
            species: "Shark",
            rank: ELYSIUM,
          },
          {
            name: "animalSix",
            taxonomy: INSECT,
            species: "Spider",
            rank: EMPIRE,
          },
          {
            name: "animalSeven",
            taxonomy: DINOSAUR,
            species: "T-rex",
            rank: EMPIRE,
          },
        ]
      },
    },
    {
      //must have at least one animal
      animals: [],
    },
  ];

  export default participantValidateData;