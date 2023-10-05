// /**
//  * @file Tests PUT for each table using seeded data and invalid data
//  * @author Elizabeth Minty
//  */
// import chai from "chai";
// import chaiHttp from "chai-http";
// import participantValidateData from "./data/validationData.js";

// //assertion
// import { describe, it } from "mocha";
// import app from "../index.js";

// chai.use(chaiHttp);

// const newData = {
//     alias: "Iverlia Ashpole",
//     age: 20,
// };

// describe("PUT /api/participants/:id", () => {
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

// for (let i = 0; i < participantValidateData.length; i++) {
      
    
//     it("should NOT PUT new data for the participant by ID", (done) => {
//       chai.request(app)
//         .put("/api/participants/1")
//         .send(participantValidateData[i])
//         .end((err, res) => {
//           console.log(res.body.msg)
//           chai.expect(res.status).to.be.equal(400);
//           chai.expect(res.body.msg).to.be.equal(validationMsgs[i]);
//           done();
//         });
//       });
//     };
// });