/**
 * @file Tests the index GET
 * @author Elizabeth Minty
 */
import chai from "chai"
import chaiHttp from "chai-http"

//assertion
import { describe, it } from "mocha"
import app from "../index.js"

chai.use(chaiHttp)

//test index route to display all existing routes
describe("Index Routes /", () => {
  it("should display all existing routes", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        console.log(res.body)
        chai.expect(res.status).to.be.equal(200)
        chai.expect(res.body).to.be.a("array")
        done()
      })
  })
})
