'use strict';

var Dog = function (name, age) {
  if (!(this instanceof Dog)) return new Dog (name, age);

  this.name = name;
  this.age  = age;
}

Dog.prototype.ageInYears = function() {
  return this.age;
};

Dog.prototype.ageInDays = function() {
  return this.age * 365;
};

Dog.prototype.ageInDogYears = function() {
  return this.age * 7;
};

// module.exports = Dog;
