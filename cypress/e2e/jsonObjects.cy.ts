/// <reference types="cypress" />

describe("JSON Objects", () => {
  it("JSON Objects", () => {
    cy.openHomePage();

    const simpleObject = {
      "key": "value",
      "key2": "value2",
    };

    const simpleArrayOfValues = ["one", "two", "three"];

    const arrayOfObjects = [
      { "key": "value"},
      { "key2": "value2"},
      { "key3": "value3"}
    ]
  
    const typesOfData = {"string": "this is a string", "number": 100}
  
    const mix = {
      "firstName": "Kadir",
      "lastName": "Zukorlic",
      "age": 30,
      "Students": [
          {
              "firstName": "Hamza",
              "lastName": "Zukorlic", 
          },
          {
              "firstName": "Kadir",
              "lastName": "Zukorlic", 
          }
      ]
    }
  
    // ways to get values
    console.log(simpleObject.key2)
    console.log(simpleObject["key2"])
    console.log(simpleArrayOfValues[0])
    console.log(arrayOfObjects[2].key3)
    console.log(mix.Students[0].firstName)

    });
});
