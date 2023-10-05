// /**
//  * @file Tests GET for each table using seeded data
//  * @author Elizabeth Minty
//  */
// import chai from "chai";
// import chaiHttp from "chai-http";

// //assertion
// import { describe, it } from "mocha";
// import app from "../index.js";

// chai.use(chaiHttp);

// describe("GET /api/participants", () => {
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