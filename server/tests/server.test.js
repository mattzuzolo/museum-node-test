const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Click } = require("./../models/click");

//add seed data for testing
const seedClicks = [{
  _id: new ObjectID(),
  xLocation: -1,
  yLocation: -1,
}, {
  _id: new ObjectID(),
  xLocation: -2,
  yLocation: -2,
}];

//testing lifecycle method
beforeEach((done) => {
  Click.remove({}).then(() => {
    Click.insertMany(seedClicks);
  }).then(() => done());
});


describe("POST /clicks", () => {
  it("should create a new click", (done) => {
    let xLocation = -5;
    let yLocation = -6;

    request(app)
      .post("/clicks")
      .send({xLocation, yLocation})
      .expect(200)
      .expect((response) => {
        expect(response.body.xLocation).toBe(xLocation);
        expect(response.body.yLocation).toBe(yLocation);
      })
      .end((error,response) => {
        if (error) {
          return done(error);
        }

        Click.find({xLocation, yLocation}).then((clicks) => {
          expect(clicks[0].xLocation).toBe(xLocation);
          expect(clicks[0].yLocation).toBe(yLocation);
          done();
        }).catch((error) => done(error));
      });
  });

  // it("should not create click with invalid body data", (done) => {
  //   request(app)
  //     .post("/clicks")
  //     .send({})
  //     .expect(400)
  //     .end((error,response) => {
  //       if (error) {
  //         return done(error);
  //       }
  //
  //       Click.find().then((clicks) => {
  //         done();
  //       }).catch((error) => done(error));
  //     });
  // });
});
