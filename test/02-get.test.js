/**
 * @file Tests GET for each table using seeded data
 * @author Elizabeth Minty
 */
import chai from "chai"
import chaiHttp from "chai-http"

//assertion
import { describe, it } from "mocha"
import app from "../index.js"

chai.use(chaiHttp)

let sortBy = "alias"
let sortOrder = "desc"

describe("GET /api/", () => {
  //Participants
  it("should GET all the participants that are age 40, sorted by name in descending order", (done) => {
    chai
      .request(app)
      .get(
        `/api/participants?filters={\"age\":40}&sortBy=${sortBy}&sortOrder=${sortOrder}`
      )
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.msg).to.be.equal("participants successfully fetched")
        chai.expect(res.body.data).to.be.a("array")
        done()
      })
  })

  it("should NOT GET all the participants", (done) => {
    chai
      .request(app)
      .get('/api/participants?filters={"alias":"fhfhfhfh"}')
      .end((err, res) => {
        console.log(res.status)
        chai.expect(res.body.msg).to.be.equal("No participants found")
        chai.expect(res.status).to.be.equal(404)
        done()
      })
  })

  //Animals
  it("should GET all the animals where taxonomy is mammal, pagesize 4, page 2", (done) => {
    chai
      .request(app)
      .get('/api/animals?filters={"taxonomy":"MAMMAL"}&pageSize=4&page=2')
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body.msg).to.be.equal("animals successfully fetched")
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.be.a("array")
        done()
      })
  })

  it("should NOT GET all animals and paginate them", (done) => {
    chai
      .request(app)
      .get("/api/animal")
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        done()
      })
  })

  //Colosseums
  it("should GET all the colosseums in China on page 2 where page size is 2", (done) => {
    chai
      .request(app)
      .get('/api/colosseums?filters={"country":"China"}&pageSize=2&page=2')
      .end((err, res) => {
        console.log(res.body.data)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.msg).to.be.equal("colosseums successfully fetched")
        chai.expect(res.body.data).to.be.a("array")
        done()
      })
  })

  it("should NOT GET all the colosseums", (done) => {
    chai
      .request(app)
      .get('/api/colosseums?filters={"name":"Tibabjffdjkjh"}')
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("No colosseums found")
        done()
      })
  })

  //Events
  let sortByEvents = "eventTitle"
  it("should GET all the events, sorted by event title in descending order", (done) => {
    chai
      .request(app)
      .get(`/api/events?sortBy=${sortByEvents}&sortOrder=${sortOrder}`)
      .end((err, res) => {
        console.log(res.body.data)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body.msg).to.be.equal("events successfully fetched")
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.be.a("array")
        done()
      })
  })

  it("should NOT GET all the events", (done) => {
    chai
      .request(app)
      .get("/api/event")
      .end((err, res) => {
        console.log(res.body.msg)
        chai.expect(res.status).to.be.equal(404)
        chai.expect(res.body.msg).to.be.equal("404 route not found")
        done()
      })
  })

  //Teams
  it("should GET all the teams", (done) => {
    chai
      .request(app)
      .get("/api/teams")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("object")
        chai.expect(res.body.data).to.be.a("array")
        done()
      })
  })

  it("should NOT GET all the teams", (done) => {
    chai
      .request(app)
      .get("/api/team")
      .end((err, res) => {
        console.log(res.status)
        chai.expect(res.status).to.be.equal(404)
        done()
      })
  })

  // //Awards
  // it("should GET all the awards", (done) => {
  //   chai.request(app)
  //     .get("/api/awards")
  //     .end((err, res) => {
  //       console.log(res.body);
  //       chai.expect(res.status).to.be.equal(200);
  //       chai.expect(res.body).to.be.a("object");
  //       chai.expect(res.body.data).to.be.a("array");
  //       done();
  //     });
  // });

  // //invalid route
  // it("should NOT GET all the awards", (done) => {
  //   chai.request(app)
  //     .get("/api/award")
  //     .end((err, res) => {
  //       chai.expect(res.status).to.be.equal(404);
  //       done();
  //     });
  // });
})
