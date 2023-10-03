/**
 * @file Tests GET by ID for each table using seeded data
 * @author Elizabeth Minty
 */

import chai from "chai";
import chaiHttp from "chai-http";

//assertion
import { describe, it } from "mocha";
import app from "../index.js";

chai.use(chaiHttp);

describe("PUT /api/participants/:id", () => {
    it("should PUT new data for the participant by ID", (done) => {
      chai.request(app)
        .put("/api/participants/1")
        .send(newData)
        .end((err, res) => {
          console.log(res.body)
          chai.expect(res.status).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.data).to.have.property('alias', "Iverlia Ashpole");
          chai.expect(res.body.data).to.have.property('age', 20);
          chai.expect(res.body.msg).to.be.equal("participant with the id: 1 successfully updated");
          done();
        });
    });

    it("should NOT GET the participant by ID", (done) => {
        chai.request(app)
          .get("/api/participants/500")
          .end((err, res) => {
            console.log(res.status);
            console.log(res.body.msg);
            chai.expect(res.status).to.be.equal(404);
            chai.expect(res.body.msg).to.be.equal("participant with ID 500 does not exist");
            done();
        });
    });
});