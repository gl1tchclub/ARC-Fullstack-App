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

const validData = [
  {
    alias: "Iver Ashpole",
    age: 19,
    memberOf: "Wolf Pack",
  },
  {
    name: "Doggy",
    taxonomy: "MAMMAL",
    species: "Wolf Dog",
    rank: "ELYSIUM",
    ownerName: "Iver Ashpole",
  },
  {
    name: "Arena of Goliaths",
    country: "South Korea",
    city: "Seoul",
    terrainType: "Urban",
  },
  {
    eventTitle: "Pit Fight",
    venue: "Arena of Goliaths",
    date: "12-12-2026T14:00:00",
  },
  {
    teamName: "Wolf Pack",
    eventTitle: "Pit Fight",
    country: "England",
    city: "London",
    numMembers: 1,
  },
  {
    awardTitle: "Pit Champion",
    type: "Title",
    quantity: 1,
    eventTitle: "Pit Fight",
  },
];

const invalidData = [
  {
    alias: "Invalid person",
    age: 10,
  },
  {
    name: "invalid animal",
    taxonomy: "MAMMAL",
    species: "dog",
    rank: "INVALID",
    ownerName: "Iver Ashpole"
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
];

describe("POST /api", () => {

    //Participants
    it("should create a participant", (done) => {
      chai.request(app)
      .post("/api/participants")
      .send(validData[0])
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

    //Animals
    it("should create an animal", (done) => {
      chai.request(app)
      .post("/api/animals")
      .send(validData[1])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("animal successfully created");
        done();
      });
    });

    it("should NOT create an animal", (done) => {
      chai.request(app)
      .post("/api/animals")
      .send(validData[])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("animal successfully created");
        done();
      });
    });

    //Colosseums
    it("should create a colosseum", (done) => {
      chai.request(app)
      .post("/api/animals")
      .send(validData[])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("animal successfully created");
        done();
      });
    });

    it("should NOT create a colosseum", (done) => {
      chai.request(app)
      .post("/api/animals")
      .send(validData[])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("animal successfully created");
        done();
      });
    });
    
});