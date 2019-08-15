import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './main.html';

Boxes = new Meteor.Collection("boxes");

function getRndColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Template.x3dom.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.x3dom.helpers({
  boxes: function () {
    return Boxes.find();
  },
});

Template.x3dom.events({
  "mouseup shape": function (e) {
    if (e.button === 1) {
      // console.log("X: ", Math.floor(e.worldX + e.normalX / 2) + 0.5, " Y : ", Math.floor(e.worldY + e.normalY / 2) + 0.5, " Z : ", Math.floor(e.worldZ + e.normalZ / 2) + 0.5);
      Boxes.insert({
        color: getRndColor(),
        x: Math.floor(e.worldX + e.normalX / 2) + 0.5,
        y: Math.floor(e.worldY + e.normalY / 2) + 0.5,
        z: Math.floor(e.worldZ + e.normalZ / 2) + 0.5
      });
    } else if (
      (e.button === 4 || e.button === 2)) {
      Boxes.remove(e.currentTarget.id);
    }
  }
});