const request = require("supertest");
const router = require("../../routes/personsRoute");

describe("API Restful -> Boilerplate", () => {
  //   get request
  it("GET persons --> array persons", () => {
    return request(router)
      .get("/persons")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              firstName: expect.any(String),
              lastName: expect.any(String),
              age: expect.any(Number),
              gender: expect.any(String),
              occupation: expect.any(String),
              company: expect.any(String),
              salary: expect.any(Number),
              approved: expect.any(Boolean),
              minority: expect.any(Boolean),
            }),
          ])
        );
      });
  });
  //   get by id request
  it("GET --> especific persons by ID", () => {});
  //   post request
  it("POST --> array persons", () => {});
  //   patch by id request
  it("PATCH --> partially update persons", () => {});
  //   delete by id request
  it("DELETE -->  delete persons by ID", () => {});
});
