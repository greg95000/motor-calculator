/**
  @Authors: Grégoire Masson
  @Copyrights: MIT Licence
  Sources: http://ancrobot.free.fr/fiches/pdf/index(3).pdf
**/
var MotorCalculator = /** @class */ (function () {
    function MotorCalculator(weight, maxSpeed, maxAngle, maxAcceleration, speedReducingRatio, wheelDiameter, wheelNumber) {
        // GRAVITY constant
        this.GRAVITY = 9.81;
        // Input variables
        this.weight = 0;
        this.maxSpeed = 0;
        this.maxAngle = 0;
        this.maxAcceleration = 0;
        this.speedReducingRatio = 0;
        this.wheelDiameter = 0;
        this.wheelNumber = 0;
        // Speeds
        this._wheelSpeed = 0;
        this._motorSpeed = 0;
        // Forces
        this._projectionForce = 0;
        this._motorForce = 0;
        // Couples
        this._wheelCouple = 0;
        this._motorCouple = 0;
        this._power = 0;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.maxAngle = maxAngle;
        this.maxAcceleration = maxAcceleration;
        this.speedReducingRatio = speedReducingRatio;
        this.wheelDiameter = wheelDiameter;
        this.wheelNumber = wheelNumber;
    }
    MotorCalculator.prototype.getWheelSpeed = function () {
        return this._wheelSpeed;
    };
    MotorCalculator.prototype.getMotorSpeed = function () {
        return this._motorSpeed;
    };
    MotorCalculator.prototype.getProjectionForce = function () {
        return this._projectionForce;
    };
    MotorCalculator.prototype.getMotorForce = function () {
        return this._motorForce;
    };
    MotorCalculator.prototype.getWheelCouple = function () {
        return this._wheelCouple;
    };
    MotorCalculator.prototype.getMotorCouple = function () {
        return this._motorCouple;
    };
    MotorCalculator.prototype.getPower = function () {
        return this._power;
    };
    MotorCalculator.prototype.calculateWheelSpeed = function () {
        if (this.wheelDiameter == 0) {
            this._wheelSpeed = 0;
            return;
        }
        this._wheelSpeed = Math.round((this.maxSpeed * 60) / (this.wheelDiameter * Math.PI));
    };
    MotorCalculator.prototype.calculateMotorSpeed = function () {
        if (this.wheelDiameter == 0) {
            this._motorSpeed = 0;
            return;
        }
        this._motorSpeed = Math.round((this.speedReducingRatio * this.maxSpeed * 60) /
            (this.wheelDiameter * Math.PI));
    };
    MotorCalculator.prototype.calculateProjectionForce = function () {
        this._projectionForce = this.weight * this.GRAVITY * Math.sin(this.maxAngle * (Math.PI / 180));
    };
    MotorCalculator.prototype.calculateMotorForce = function () {
        this._motorForce = this.weight * this.maxAcceleration + this._projectionForce;
    };
    MotorCalculator.prototype.calculateWheelCouple = function () {
        if (this.wheelNumber == 0) {
            this._wheelCouple = 0;
            return;
        }
        this._wheelCouple = this._motorForce * this.wheelDiameter / (2 * this.wheelNumber);
    };
    MotorCalculator.prototype.calculateMotorCouple = function () {
        if (this.wheelNumber == 0 || this.speedReducingRatio == 0) {
            this._motorCouple = 0;
            return;
        }
        this._motorCouple = this._motorForce * this.wheelDiameter /
            (2 * this.wheelNumber * this.speedReducingRatio);
    };
    MotorCalculator.prototype.calculatePower = function () {
        if (this.wheelNumber == 0) {
            this._power = 0;
            return;
        }
        this._power = this.maxSpeed * this._motorForce / this.wheelNumber;
    };
    MotorCalculator.prototype.calculateDimensions = function () {
        this.calculateWheelSpeed();
        this.calculateMotorSpeed();
        this.calculateProjectionForce();
        this.calculateMotorForce();
        this.calculateWheelCouple();
        this.calculateMotorCouple();
        this.calculatePower();
    };
    return MotorCalculator;
}());
