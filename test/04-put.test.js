/**
 * @file Tests PUT for each table using seeded data and invalid data
 * @author Elizabeth Minty
 */
import chai from "chai"
import chaiHttp from "chai-http"

//assertion
import { describe, it } from "mocha"
import app from "../index.js"

chai.use(chaiHttp)

describe("PUT /api/entity/:id", () => {
  //Colosseum
  it("should PUT new data for the colosseum by ID", (done) => {
    chai
      .request(app)
      .put("/api/colosseums/1")
      .send({name: "Test Colosseum"})
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("name", "Test Colosseum")
        chai.expect(res.body.data).to.have.property("country", "Poland")
        chai
          .expect(res.body.msg)
          .to.be.equal("colosseum with the id: 1 successfully updated")
        done()
      })
  })

  it("should NOT PUT new data for the colosseum by ID", (done) => {
    chai
      .request(app)
      .put("/api/colosseums/1")
      .send({name: 3333})
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(400)
        chai.expect(res.body.msg).to.be.equal("Name should be a string")
        done()
      })
  })

  //Participant
  it("should PUT new data for the event by ID", (done) => {
    chai
      .request(app)
      .put("/api/events/1")
      .send({eventTitle: "Testing Event"})
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("eventTitle", "Testing Event")
        chai.expect(res.body.data).to.have.property("date", "2024-12-05T11:00:00.000Z")
        chai
          .expect(res.body.msg)
          .to.be.equal("event with the id: 1 successfully updated")
        done()
      })
  })

  it("should NOT PUT new data for the event by ID", (done) => {
    chai
      .request(app)
      .put("/api/events/15555")
      .send({eventTitle: "Hello"})
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("No event with the id: 15555 found")
        done()
      })
  })

  //Award
  it("should PUT new data for the award by ID", (done) => {
    chai
      .request(app)
      .put("/api/awards/1")
      .send({awardTitle: "Testing Award"})
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("awardTitle", "Testing Award")
        chai
          .expect(res.body.msg)
          .to.be.equal("award with the id: 1 successfully updated")
        done()
      })
  })

  it("should NOT PUT new data for the award by ID", (done) => {
    chai
      .request(app)
      .put("/api/awards/1")
      .send({name: "Hello"})
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(400)
        chai.expect(res.body.msg).to.be.equal("\"name\" is not allowed")
        done()
      })
  })

  //Team
  it("should PUT new data for the team by ID", (done) => {
    chai
      .request(app)
      .put("/api/teams/1")
      .send({teamName: "Testing Team"})
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("teamName", "Testing Team")
        chai
          .expect(res.body.msg)
          .to.be.equal("team with the id: 1 successfully updated")
        done()
      })
  })

  it("should NOT PUT new data for the team by ID", (done) => {
    chai
      .request(app)
      .put("/api/teams/1")
      .send({teamName: ""})
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(400)
        chai.expect(res.body.msg).to.be.equal("Team Name cannot be empty")
        done()
      })
  })

  //Participant
  it("should PUT new data for the participant by ID", (done) => {
    chai
      .request(app)
      .put("/api/participants/1")
      .send({age: 42})
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("age", 42)
        chai
          .expect(res.body.msg)
          .to.be.equal("participant with the id: 1 successfully updated")
        done()
      })
  })

  it("should NOT PUT new data for the team by ID", (done) => {
    chai
      .request(app)
      .put("/api/participants/1")
      .send({age: 14})
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(400)
        chai.expect(res.body.msg).to.be.equal("\"age\" must be greater than or equal to 15")
        done()
      })
  })

  //Animal
  it("should PUT new data for the animal by ID", (done) => {
    chai
      .request(app)
      .put("/api/animals/1")
      .send({name: "Testing Animal"})
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.have.property("name", "Testing Animal")
        chai
          .expect(res.body.msg)
          .to.be.equal("animal with the id: 1 successfully updated")
        done()
      })
  })

  it("should NOT PUT new data for the animal by ID", (done) => {
    chai
      .request(app)
      .put("/api/animals/1")
      .send({name: 2000000})
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(400)
        chai.expect(res.body.msg).to.be.equal("Name should be a string")
        done()
      })
  })
})
