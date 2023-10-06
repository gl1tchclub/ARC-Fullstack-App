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

    //invalid route error
    it("should NOT GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participant")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Animals
    it("should GET all the animals", (done) => {
      chai.request(app)
        .get("/api/animals?filter")
        .end((err, res) => {
          console.log(res.body);
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.be.a("array");
          done();
        });
    });

    //invalid pagination
    it("should NOT GET all the animals", (done) => {
      chai.request(app)
        .get("/api/animals")
        .end((err, res) => {
          console.log(res.body.msg).to.be.equal("");
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Colosseums
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
    
    //invalid filtering
    it("should NOT GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participant")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Events
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

    //invalid filter
    it("should NOT GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participant")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Teams
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

    //invalid sorting?
    it("should NOT GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participant")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });

    //Awards
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
    
    //invalid route
    it("should NOT GET all the participants", (done) => {
      chai.request(app)
        .get("/api/participant")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(404);
          done();
        });
    });
});