/**
 * @file Tests GET for each table using seeded data
 * @author Elizabeth Minty
 */
import chai from "chai";
import chaiHttp from "chai-http";

//assertion
import { describe, it } from "mocha";
import app from "../index.js";

chai.use(chaiHttp);

const sortBy = "eventTitle";
const sortOrder = "desc";

describe("GET /api/", () => {

    //Participants
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
          console.log(res.status);
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Animals
    it("should GET all the animals", (done) => {
      chai.request(app)
        .get("/api/animals?filters={\"taxonomy\":\"MAMMAL\"}&pageSize=4&page=2")
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("array");
          done();
        });
    });

    it("should NOT GET all the animals", (done) => {
      chai.request(app)
        .get("/api/animal?pageSize=4&page=2")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Colosseums
    it("should GET all the colosseums", (done) => {
      chai.request(app)
        .get("/api/colosseums?filters={\"country\":\"China\"}&pageSize=3")
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("array");
          done();
        });
    });
    
    it("should NOT GET all the colosseums", (done) => {
      chai.request(app)
        .get("/ap/colosseums?filters={\"name\":\"Imperial Battlegrounds\"}")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Events
    it("should GET all the events", (done) => {
      chai.request(app)
        .get(`/api/events?sortBy=${sortBy}&sortOrder=${sortOrder}`)
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("array");
          done();
        });
    });

    it("should NOT GET all the events", (done) => {
      chai.request(app)
        .get("/api/event")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Teams
    it("should GET all the teams", (done) => {
      chai.request(app)
        .get("/api/teams")
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("array");
          done();
        });
    });

    it("should NOT GET all the teams", (done) => {
      chai.request(app)
        .get("/api/team")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

//     //Awards
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
    
//     //invalid route
//     it("should NOT GET all the participants", (done) => {
//       chai.request(app)
//         .get("/api/participant")
//         .end((err, res) => {
//           chai.expect(res.status).to.be.equal(404);
//           done();
//         });
//     });
});