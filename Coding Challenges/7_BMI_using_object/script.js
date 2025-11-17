const mark = {
  fullName: "Mark Miller",
  mass: 78, // in kg
  height: 1.69, // in m
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92, // in kg
  height: 1.95, // in m
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(
  `${mark.fullName}'s BMI ${mark.calcBMI()} is ${
    mark.calcBMI() > john.calcBMI() ? "higher" : "lower"
  } than ${john.fullName}'s ${john.calcBMI()}!`
);
