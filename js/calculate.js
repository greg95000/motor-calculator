(function() {
  let variables = {
    "wheel-number": $("#wheel-number").val(),
    "weight": $("#weight").val(),
    "max-speed": $("#max-speed").val(),
    "max-angle": $("#max-angle").val(),
    "speed-reducing-ratio": $("#speed-reducing-ratio").val(),
    "max-acceleration": $("#max-acceleration").val(),
    "wheel-diameter": $("#wheel-diameter").val()
  };

  let motorCalculator = new MotorCalculator(variables["weight"],
      variables["max-speed"], variables["max-angle"], variables["max-acceleration"],
      variables["speed-reducing-ratio"], variables["wheel-diameter"],
      variables["wheel-number"]);
  motorCalculator.calculateDimensions();
  $("#motor-couple").val(motorCalculator.getMotorCouple());
  $("#power").val(motorCalculator.getPower());
  $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  $(`#wheel-number`)
    .on("change", function () {
      motorCalculator.wheelNumber = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });

  $(`#weight`)
    .on("change", function () {
      motorCalculator.weight = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });

  $(`#max-speed`)
    .on("change", function () {
      motorCalculator.maxSpeed = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });

  $(`#max-angle`)
    .on("change", function () {
      motorCalculator.maxAngle = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });

  $(`#speed-reducing-ratio`)
    .on("change", function () {
      motorCalculator.speedReducingRatio = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });

  $(`#max-acceleration`)
    .on("change", function () {
      motorCalculator.maxAcceleration = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });

  $(`#wheel-diameter`)
    .on("change", function () {
      motorCalculator.wheelDiameter = $(this).val();
      motorCalculator.calculateDimensions();
      $("#motor-couple").val(motorCalculator.getMotorCouple());
      $("#power").val(motorCalculator.getPower());
      $("#motor-rpm").val(motorCalculator.getMotorSpeed());
  });
})();
