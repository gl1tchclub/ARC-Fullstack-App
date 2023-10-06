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
    date: "2027-12-12T14:00:00Z",
  },
  {
    teamName: "Wolf Pack",
    eventTitle: "Pit Fight",
    country: "England",
    city: "London",
    numMembers: 0,
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
    species: "d",
    rank: "OLYMPUS",
    ownerName: "Iver Ashpole"
  },
  {
    name: "some colosseum",
    country: "Australia",
    city: "Canberra",
    terrainType: 2,
  },
  {
    eventTitle: "some event",
    venue: "Arena of Goliaths",
    date: "7837843983",
  },
  {
    teamName: "some team name",
    country: "New Zealand",
    city: "Dunedin",
    numMembers: -1,
  },
  {
    awardTitle: "Gold",
    type: "Medal",
    quantity: "1",
    eventTitle: "Pit Fight",
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
      .send(invalidData[0])
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
      .send(invalidData[1])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.msg).to.be.equal("Species must have a minimum length of 3");
        done();
      });
    });

    //Colosseums
    it("should create a colosseum", (done) => {
      chai.request(app)
      .post("/api/colosseums")
      .send(validData[2])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("colosseum successfully created");
        done();
      });
    });

    it("should NOT create a colosseum", (done) => {
      chai.request(app)
      .post("/api/colosseums")
      .send(invalidData[2])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.msg).to.be.equal("Terrain Type should be a string");
        done();
      });
    });

    //Events
    it("should create an event", (done) => {
      chai.request(app)
      .post("/api/events")
      .send(validData[3])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("event successfully created");
        done();
      });
    });

    it("should NOT create an event", (done) => {
      chai.request(app)
      .post("/api/events")
      .send(invalidData[3])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.msg).to.be.equal("Date must be greater than 1989-12-31T11:00:00.000Z");
        done();
      });
    });

    //Teams
    it("should create a team", (done) => {
      chai.request(app)
      .post("/api/teams")
      .send(validData[4])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("team successfully created");
        done();
      });
    });

    it("should NOT create a team", (done) => {
      chai.request(app)
      .post("/api/teams")
      .send(invalidData[4])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.msg).to.be.equal("Number of Members must be at least 0");
        done();
      });
    });

    //Awards
    it("should create an award", (done) => {
      chai.request(app)
      .post("/api/awards")
      .send(validData[5])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(201);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body.msg).to.be.equal("award successfully created");
        done();
      });
    });

    it("should NOT create an award", (done) => {
      chai.request(app)
      .post("/api/awards")
      .send(invalidData[5])
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(500);
        chai.expect(res.body.msg).to.be.equal("");
        done();
      });
    });
    
});