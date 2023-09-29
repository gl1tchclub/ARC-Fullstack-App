/**
 * @file Tests each table's CRUD using seeded data
 * @author Elizabeth Minty
 */
import chai from "chai";
import chaiHttp from "chai-http";

//assertion
import { describe, it } from "mocha";
import app from "../index.js";

chai.use(chaiHttp);

const participant = {
    alias: "Iver Ashpole",
    age: 19,
};

describe("ARC API - Participants", () => {

  //test GET route
  describe("GET /api/participants", async() => {
    it("It should GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participants")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eq(1);
          done();
        });
    });
  });

  //test GETID route


  //test POST route


  //test PUT route


  //test DELETE route


  // it("should create participant", async(done) => {
  //     await chai.request(app)
  //     .post("/api/participants")
  //     .send(participant)
  //     .end((res) => {
  //       // console.log(res.body) //for testing

  //       chai.expect(res.status).to.be.equal(201);
  //       chai.expect(res.body).to.be.a("object");
  //       chai
  //         .expect(res.body.msg)
  //         .to.be.equal("Participant successfully created");
  //         done();
  //     });
  // });
});

// it("should get all participants", (done) => {
//     chai
//       .request(app)
//       .get("/api/participants")
//       .end((req, res) => {
//         console.log(res) // This is useful for debugging

//         chai.expect(res.status).to.be.equal(200);
//         chai.expect(res.body).to.be.a("object");
//         chai.expect(res.body.data).to.be.a("array");
//         done();
//       });
//   });

//   //more for filtering and pagination

//   it("should get participant by id", (done) => {
//     chai
//       .request(app)
//       .get("/api/participants/1")
//       .end((req, res) => {
//         console.log(res) // This is useful for debugging

//         chai.expect(res.status).to.be.equal(200);
//         chai.expect(res.body).to.be.a("object");
//         chai.expect(res.body.data).to.be.a("object");
//         done();
//       });
//   });

//   it("should update participant by id", (done) => {
//     chai
//       .request(app)
//       .put("/api/participants/1")
//       .send(participant)
//       .end((req, res) => {
//         console.log(res) // This is useful for debugging

//         chai.expect(res.status).to.be.equal(200);
//         chai.expect(res.body).to.be.a("object");
//         chai
//           .expect(res.body.msg)
//           .to.be.equal("Participant with the id: 1 successfully updated");
//         done();
//       });
//   });

//   it("should delete participant by id", (done) => { 
//     chai
//       .request(app)
//       .delete("/api/participants/1")
//       .end((req, res) => {
//         console.log(res) // This is useful for debugging

//         chai.expect(res.status).to.be.equal(200);
//         chai.expect(res.body).to.be.a("object");
//         chai
//           .expect(res.body.msg)
//           .to.be.equal("Participant with the id: 1 successfully deleted");
//         done();
//       });
//   });