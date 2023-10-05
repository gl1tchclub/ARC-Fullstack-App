// /**
//  * @file Tests participant CRUD using seeded data
//  * @author Elizabeth Minty
//  */
// import chai from "chai";
// import chaiHttp from "chai-http";
// import

// //assertion
// import { describe, it } from "mocha";
// import app from "../index.js";

// chai.use(chaiHttp);

// const participant = {
//     alias: "Iver Ashpole",
//     age: 19,
// };

// const notParticipant = {
//   alias: "Test Name",
//   age: 10,
// };

// const newData = {
//   alias: "Iverlia Ashpole",
//   age: 20,
// };

// describe("ARC API - Participants", () => {

//   //test POST route #1
//   describe("POST /api/participants", () => {
//     it("should create a participant", (done) => {
//       chai.request(app)
//       .post("/api/participants")
//       .send(participant)
//       .end((err, res) => {
//         console.log(res.body)
//         chai.expect(res.status).to.be.equal(201);
//         chai.expect(res.body).to.be.a("object");
//         chai.expect(res.body.msg).to.be.equal("participant successfully created");
//         done();
//       });
//     });

//     //#2
//     it("should NOT create a participant", (done) => {
//       chai.request(app)
//       .post("/api/participants")
//       .send(notParticipant)
//       .end((err, res) => {
//         console.log(res.body)
//         chai.expect(res.status).to.be.equal(400)
//         chai.expect(res.body.msg).to.be.equal("\"age\" must be greater than or equal to 15");
//         done();
//       });
//     });
//   });

//   //test GET route #3
//   describe("GET /api/participants", () => {
//     it("should GET all the participants", (done) => {
//       chai.request(app)
//         .get("/api/participants")
//         .end((err, res) => {
//           console.log(res.body);
//           chai.expect(res.status).to.be.equal(200);
//           chai.expect(res.body).to.be.a("object");
//           chai.expect(res.body.data).to.be.a("array");
//           done();
//         });
//     });

//     //#4
//     it("should NOT GET all the participants", (done) => {
//       chai.request(app)
//         .get("/api/participant")
//         .end((err, res) => {
//           chai.expect(res.status).to.be.equal(404);
//           done();
//         })
//     });
//   });

//   //Test GET BY ID route #5
//   describe("GET /api/participants/:id", () => {
//     it("should GET the participant by ID", (done) => {
//       chai.request(app)
//         .get("/api/participants/1")
//         .end((err, res) => {
//           console.log(res.body);
//           chai.expect(res.status).to.be.equal(200);
//           chai.expect(res.body).to.be.a("object");
//           chai.expect(res.body.data).to.be.a("object");
//           chai.expect(res.body.data).to.have.property('alias', "Iver Ashpole")
//           done();
//         });
//     });

//     //#6
//     it("should NOT GET the participant by ID", (done) => {
//       chai.request(app)
//         .get("/api/participants/500")
//         .end((err, res) => {
//           console.log(res.status);
//           console.log(res.body.msg);
//           chai.expect(res.status).to.be.equal(404);
//           chai.expect(res.body.msg).to.be.equal("participant with ID 500 does not exist");
//           done();
//         });
//     });
//   });

//   //test PUT route #7
//   describe("PUT /api/participants/:id", () => {
//     it("should PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(newData)
//         .end((err, res) => {
//           console.log(res.body)
//           chai.expect(res.status).to.be.equal(200);
//           chai.expect(res.body).to.be.a("object");
//           chai.expect(res.body.data).to.have.property('alias', "Iverlia Ashpole");
//           chai.expect(res.body.data).to.have.property('age', 20);
//           chai.expect(res.body.msg).to.be.equal("participant with the id: 1 successfully updated");
//           done();
//         });
//     });

//     //#8
//     it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       //#9
//       it("should NOT PUT new data for the participant by ID", (done) => {
//         chai.request(app)
//           .put("/api/participants/1")
//           .send(putValidateData[1])
//           .end((err, res) => {
//             console.log(res.body.msg)
//             chai.expect(res.status).to.be.equal(400);
//             chai.expect(res.body.msg).to.be.equal("Alias cannot be empty");
//             done();
//           });
//         });
      
//       //#10
//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[2])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//         chai.request(app)
//           .put("/api/participants/1")
//           .send(putValidateData[0])
//           .end((err, res) => {
//             console.log(res.body.msg)
//             chai.expect(res.status).to.be.equal(400);
//             chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//             done();
//           });
//         });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//         chai.request(app)
//           .put("/api/participants/1")
//           .send(putValidateData[0])
//           .end((err, res) => {
//             console.log(res.body.msg)
//             chai.expect(res.status).to.be.equal(400);
//             chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//             done();
//           });
//         });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//         chai.request(app)
//           .put("/api/participants/1")
//           .send(putValidateData[0])
//           .end((err, res) => {
//             console.log(res.body.msg)
//             chai.expect(res.status).to.be.equal(400);
//             chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//             done();
//           });
//         });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//         chai.request(app)
//           .put("/api/participants/1")
//           .send(putValidateData[0])
//           .end((err, res) => {
//             console.log(res.body.msg)
//             chai.expect(res.status).to.be.equal(400);
//             chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//             done();
//           });
//         });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//         chai.request(app)
//           .put("/api/participants/1")
//           .send(putValidateData[0])
//           .end((err, res) => {
//             console.log(res.body.msg)
//             chai.expect(res.status).to.be.equal(400);
//             chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//             done();
//           });
//         });

//       it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(putValidateData[0])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal("Alias should be a string");
//           done();
//         });
//       });
//   });

//   //test DELETE route


//   // it("should create participant", async(done) => {
//   //     await chai.request(app)
//   //     .post("/api/participants")
//   //     .send(participant)
//   //     .end((err, res) => {
//   //       // console.log(res.body) //for testing

//   //       chai.expect(res.status).to.be.equal(201);
//   //       chai.expect(res.body).to.be.a("object");
//   //       chai
//   //         .expect(res.body.msg)
//   //         .to.be.equal("Participant successfully created");
//   //         done();
//   //     });
//   // });
// });

// // it("should get all participants", (done) => {
// //     chai
// //       .request(app)
// //       .get("/api/participants")
// //       .end((req, res) => {
// //         console.log(res) // This is useful for debugging

// //         chai.expect(res.status).to.be.equal(200);
// //         chai.expect(res.body).to.be.a("object");
// //         chai.expect(res.body.data).to.be.a("array");
// //         done();
// //       });
// //   });

// //   //more for filtering and pagination

// //   it("should get participant by id", (done) => {
// //     chai
// //       .request(app)
// //       .get("/api/participants/1")
// //       .end((req, res) => {
// //         console.log(res) // This is useful for debugging

// //         chai.expect(res.status).to.be.equal(200);
// //         chai.expect(res.body).to.be.a("object");
// //         chai.expect(res.body.data).to.be.a("object");
// //         done();
// //       });
// //   });

// //   it("should update participant by id", (done) => {
// //     chai
// //       .request(app)
// //       .put("/api/participants/1")
// //       .send(participant)
// //       .end((req, res) => {
// //         console.log(res) // This is useful for debugging

// //         chai.expect(res.status).to.be.equal(200);
// //         chai.expect(res.body).to.be.a("object");
// //         chai
// //           .expect(res.body.msg)
// //           .to.be.equal("Participant with the id: 1 successfully updated");
// //         done();
// //       });
// //   });

// //   it("should delete participant by id", (done) => { 
// //     chai
// //       .request(app)
// //       .delete("/api/participants/1")
// //       .end((req, res) => {
// //         console.log(res) // This is useful for debugging

// //         chai.expect(res.status).to.be.equal(200);
// //         chai.expect(res.body).to.be.a("object");
// //         chai
// //           .expect(res.body.msg)
// //           .to.be.equal("Participant with the id: 1 successfully deleted");
// //         done();
// //       });
// //   });