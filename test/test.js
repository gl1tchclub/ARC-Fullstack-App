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

  describe("Index Routes /", () => {
    it("should display all existing routes", (done) => {
      chai.request(app)
      .get("/")
      .end((err, res) => {
        console.log(res.body);
        chai.expect(res.status).to.be.equal(200);
        chai.expect(res.body).to.be.a("array");
        done();
      });
    });
  });

  //test POST route
  describe("POST /api/participants", () => {
    it("should create a participant", (done) => {
      chai.request(app)
      .post("/api/participants")
      .send(participant)
      .end((err,res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("participant successfully created");
        done();
      });
    });
  });

  //test GET route
  describe("GET /api/participants", () => {
    it("should GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participants")
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("array");
          done();
        });
    });

    it("should NOT GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participant")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(404);
          done();
        })
    });
  });

  //Test GET BY ID route
  describe("GET /api/participants", () => {
    it("should GET the participant by ID", (done) => {
      chai.request(app)
        .get("/api/participants/1")
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("object");
          done();
        });
    });

    it("should NOT GET the participant by ID", (done) => {
      chai.request(app)
        .get("/api/participant/1")
        .end((req, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });
  });

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