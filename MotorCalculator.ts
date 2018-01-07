/**
  @Authors: Grégoire Masson
  @Copyrights: MIT Licence
  Sources: http://ancrobot.free.fr/fiches/pdf/index(3).pdf
**/
class MotorCalculator {

  // GRAVITY constant
  readonly GRAVITY: number = 9.81;

  // Input variables
  weight: number = 0;
  maxSpeed: number = 0;
  maxAngle: number = 0;
  maxAcceleration: number = 0;
  speedReducingRatio: number = 0;
  wheelDiameter: number = 0;
  wheelNumber: number = 0;

  // Speeds
  private _wheelSpeed: number = 0;
  private _motorSpeed: number = 0;

  // Forces
  private _projectionForce: number = 0;
  private _motorForce: number = 0;

  // Couples
  private _wheelCouple: number = 0;
  private _motorCouple: number = 0;

  private _power: number = 0;

  constructor(weight: number, maxSpeed: number, maxAngle: number, maxAcceleration: number,
    speedReducingRatio: number, wheelDiameter: number, wheelNumber: number) {
      this.weight = weight;
      this.maxSpeed = maxSpeed;
      this.maxAngle = maxAngle;
      this.maxAcceleration = maxAcceleration;
      this.speedReducingRatio = speedReducingRatio;
      this.wheelDiameter = wheelDiameter;
      this.wheelNumber = wheelNumber;
  }

  public getWheelSpeed(): number {
    return this._wheelSpeed;
  }

  public getMotorSpeed(): number {
    return this._motorSpeed;
  }

  public getProjectionForce(): number {
    return this._projectionForce;
  }

  public getMotorForce(): number {
    return this._motorForce;
  }

  public getWheelCouple(): number {
    return this._wheelCouple;
  }

  public getMotorCouple(): number {
    return this._motorCouple;
  }

  public getPower(): number {
    return this._power;
  }

  private calculateWheelSpeed() {
    if(this.wheelDiameter == 0) {
      this._wheelSpeed = 0;
      return;
    }
    this._wheelSpeed = Math.round((this.maxSpeed * 60) / (this.wheelDiameter * Math.PI));
  }

  private calculateMotorSpeed() {
    if(this.wheelDiameter == 0) {
      this._motorSpeed = 0;
      return;
    }
    this._motorSpeed = Math.round((this.speedReducingRatio * this.maxSpeed * 60) /
     (this.wheelDiameter * Math.PI));
  }

  private calculateProjectionForce() {
    this._projectionForce = this.weight * this.GRAVITY * Math.sin(this.maxAngle * (Math.PI / 180));
  }

  private calculateMotorForce() {
    this._motorForce = this.weight * this.maxAcceleration + this._projectionForce;
  }

  private calculateWheelCouple() {
    if(this.wheelNumber == 0) {
      this._wheelCouple = 0;
      return;
    }
    this._wheelCouple = this._motorForce * this.wheelDiameter / (2 * this.wheelNumber);
  }

  private calculateMotorCouple() {
    if(this.wheelNumber == 0 || this.speedReducingRatio == 0) {
      this._motorCouple = 0;
      return;
    }
    this._motorCouple = this._motorForce * this.wheelDiameter /
      (2 * this.wheelNumber * this.speedReducingRatio);
  }

  private calculatePower() {
    if(this.wheelNumber == 0) {
      this._power = 0;
      return;
    }
    this._power = this.maxSpeed * this._motorForce / this.wheelNumber;
  }

  public calculateDimensions() {
    this.calculateWheelSpeed();
    this.calculateMotorSpeed();
    this.calculateProjectionForce();
    this.calculateMotorForce();
    this.calculateWheelCouple();
    this.calculateMotorCouple();
    this.calculatePower();
  }

}
