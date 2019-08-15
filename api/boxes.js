import {
  Mongo
} from 'meteor/mongo';

export const Boxes = new Meteor.Collection("boxes");

if (Meteor.isServer) {
  Meteor.methods({
    clearBoxes: function () {
      Boxes.remove({});
    }
  });
}