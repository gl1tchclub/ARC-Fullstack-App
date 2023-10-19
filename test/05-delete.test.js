// /**
//  * @file Tests DELETE by ID for each table using seeded data
//  * @author Elizabeth Minty
//  */

// import chai from "chai";
// import chaiHttp from "chai-http";

// //assertion
// import { describe, it } from "mocha";
// import app from "../index.js";

// chai.use(chaiHttp);

// describe("DELETE /api/entity/:id", () => {
//   //Animal
//   it("should DELETE a animal by ID", (done) => {
//     chai
//       .request(app)
//       .delete("/api/animals/1")
//       .end((err, res) => {
//         console.log(res.body)
//         chai.expect(res.status).to.be.equal(200)
//         chai
//           .expect(res.body.msg)
//           .to.be.equal("animal with the id: 2 successfully deleted")
//         done()
//       })
//   })

//   it("should NOT DELETE a animal that doesn't exist", (done) => {
//     chai
//       .request(app)
//       .delete("/api/animals/441")
//       .end((err, res) => {
//         console.log(res.body)
//         chai.expect(res.status).to.be.equal(404)
//         chai
//           .expect(res.body.msg)
//           .to.be.equal("No animal with the id: 441 found")
//         done()
//       })
//   })

//   //Participant
//   it("should DELETE a participant by ID", (done) => {
//     chai
//       .request(app)
//       .delete("/api/participants/2")
//       .end((err, res) => {
//         console.log(res.body)
//         chai.expect(res.status).to.be.equal(200)
//         chai
//           .expect(res.body.msg)
//           .to.be.equal("participant with the id: 2 successfully deleted")
//         done()
//       })
//   })

//   it("should NOT DELETE a participant that doesn't exist", (done) => {
//     chai
//       .request(app)
//       .delete("/api/participants/")
//       .end((err, res) => {
//         console.log(res.body)
//         chai.expect(res.status).to.be.equal(404)
//         chai
//           .expect(res.body.msg)
//           .to.be.equal("404 route not found")
//         done()
//       })
//   })

//     //Team
//     it("should DELETE a team by ID", (done) => {
//         chai
//           .request(app)
//           .delete("/api/teams/2")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(200)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("team with the id: 2 successfully deleted")
//             done()
//           })
//       })
    
//       it("should NOT DELETE a team that doesn't exist", (done) => {
//         chai
//           .request(app)
//           .delete("/api/teams/80")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(404)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("No team with the id: 80 found")
//             done()
//           })
//       })

//     //Award
//     it("should DELETE a award by ID", (done) => {
//         chai
//           .request(app)
//           .delete("/api/awards/2")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(200)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("award with the id: 2 successfully deleted")
//             done()
//           })
//       })
    
//       it("should NOT DELETE a award that doesn't exist", (done) => {
//         chai
//           .request(app)
//           .delete("/api/award/3")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(404)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("404 route not found")
//             done()
//           })
//       })

//     //Event
//     it("should DELETE a event by ID", (done) => {
//         chai
//           .request(app)
//           .delete("/api/events/2")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(200)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("event with the id: 2 successfully deleted")
//             done()
//           })
//       })
    
//       it("should NOT DELETE an event from route that does not exist", (done) => {
//         chai
//           .request(app)
//           .delete("/api/event/3")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(404)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("404 route not found")
//             done()
//           })
//       })

//     //Colosseum
//     it("should DELETE a colosseum by ID", (done) => {
//         chai
//           .request(app)
//           .delete("/api/colosseums/2")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(200)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("colosseum with the id: 2 successfully deleted")
//             done()
//           })
//       })
    
//       it("should NOT DELETE a colosseum that doesn't exist", (done) => {
//         chai
//           .request(app)
//           .delete("/api/colosseum/341414")
//           .end((err, res) => {
//             console.log(res.body)
//             chai.expect(res.status).to.be.equal(404)
//             chai
//               .expect(res.body.msg)
//               .to.be.equal("404 route not found")
//             done()
//           })
//       })
// })
