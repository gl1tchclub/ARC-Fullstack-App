/**
 * @file Tests GET by ID for each table using seeded data
 * @author Elizabeth Minty
 */

import chai from "chai"
import chaiHttp from "chai-http"

//assertion
import { describe, it } from "mocha"
import app from "../index.js"

chai.use(chaiHttp)

describe("GET by ID /api/entity/:id", () => {
  //Colosseums
  it("should GET colosseum with ID 1", (done) => {
    chai
      .request(app)
      .get("/api/colosseums/1")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("name", "Colossal Clash Arena")
        chai.expect(res.body.data).to.have.property("country", "Poland")
        chai
          .expect(res.body.msg)
          .to.be.equal("colosseum with ID 1 successfully fetched")
        done()
      })
  })

  it("should NOT GET the colosseum by ID", (done) => {
    chai
      .request(app)
      .get("/api/colosseums/500")
      .end((err, res) => {
        console.log(res.status)
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("colosseum with ID 500 does not exist")
        done()
      })
  })

  //Events
  it("should GET event with ID 1", (done) => {
    chai
      .request(app)
      .get("/api/events/1")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("eventTitle", "Tartaros Promos")
        chai.expect(res.body.data).to.have.property("venue", "Imperial Battlegrounds")
        chai
          .expect(res.body.msg)
          .to.be.equal("event with ID 1 successfully fetched")
        done()
      })
  })

  it("should NOT GET the event by ID", (done) => {
    chai
      .request(app)
      .get("/api/event/1")
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("404 route not found")
        done()
      })
  })

  //Awards
  it("should GET award with ID 1", (done) => {
    chai
      .request(app)
      .get("/api/awards/4")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("awardTitle", "Valhalla Promotion")
        chai.expect(res.body.data).to.have.property("quantity", 1)
        chai
          .expect(res.body.msg)
          .to.be.equal("award with ID 4 successfully fetched")
        done()
      })
  })

  it("should NOT GET the award by ID", (done) => {
    chai
      .request(app)
      .get("/api/awards/790")
      .end((err, res) => {
        console.log(res.status)
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("award with ID 790 does not exist")
        done()
      })
  })

  //Teams
  it("should GET team with ID 1", (done) => {
    chai
      .request(app)
      .get("/api/teams/1")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("teamName", "Wolf Pack")
        chai.expect(res.body.data).to.have.property("eventTitle", "Tartaros Promos")
        chai
          .expect(res.body.msg)
          .to.be.equal("team with ID 1 successfully fetched")
        done()
      })
  })

  it("should NOT GET the team by ID", (done) => {
    chai
      .request(app)
      .get("/api/teams/500")
      .end((err, res) => {
        console.log(res.status)
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("team with ID 500 does not exist")
        done()
      })
  })

  //Participants
  it("should GET participant with ID 1", (done) => {
    chai
      .request(app)
      .get("/api/participants/1")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("alias", "Iver Ashpole")
        chai.expect(res.body.data).to.have.property("age", 19)
        chai
          .expect(res.body.msg)
          .to.be.equal("participant with ID 1 successfully fetched")
        done()
      })
  })

  it("should NOT GET the participant by ID", (done) => {
    chai
      .request(app)
      .get("/api/participants/500")
      .end((err, res) => {
        console.log(res.status)
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("participant with ID 500 does not exist")
        done()
      })
  })

  //Animals
  it("should GET animal with ID 1", (done) => {
    chai
      .request(app)
      .get("/api/animals/1")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("name", "Sleeping Claw")
        chai.expect(res.body.data).to.have.property("taxonomy", "MAMMAL")
        chai
          .expect(res.body.msg)
          .to.be.equal("animal with ID 1 successfully fetched")
        done()
      })
  })

  it("should NOT GET the animal by ID", (done) => {
    chai
      .request(app)
      .get("/api/animals/500")
      .end((err, res) => {
        console.log(res.status)
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("animal with ID 500 does not exist")
        done()
      })
  })
})
