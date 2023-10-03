/**
 * @file Tests POST for each table using seeded data
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

const notParticipant = {
  alias: "Test Name",
  age: 10,
};

describe("ARC API", () => {

    //Participants
    describe("POST /api/participants", () => {
      it("should create a participant", (done) => {
        chai.request(app)
        .post("/api/participants")
        .send(participant)
        .end((err, res) => {
          console.log(res.body)
          chai.expect(res.status).to.be.equal(201);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.msg).to.be.equal("participant successfully created");
          done();
        });
      });

      it("should NOT create a participant", (done) => {
        chai.request(app)
        .post("/api/participants")
        .send(notParticipant)
        .end((err, res) => {
          console.log(res.body)
          chai.expect(res.status).to.be.equal(400)
          chai.expect(res.body.msg).to.be.equal("\"age\" must be greater than or equal to 15");
          done();
        });
      });
    });

    
});