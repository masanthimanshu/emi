function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

function emiCalculator() {
  var principle = 0;
  principle = $("#principle").val();
  $("#principleValue").html(thousands_separators(principle));

  var interest = $("#interest").val();
  $("#interestValue").html(interest);

  var time = $("#time").val();
  $("#timeValue").html(time);

  var r = (interest / 12) / 100;
  var n = time * 12;

  var num_one = Math.pow(1 + r, n);
  var final = num_one / (num_one - 1);

  var emi = Math.round((principle * r) * final);
  $("#emiValue").html(thousands_separators(emi));

  var total_payment = emi * n;
  $("#totalPayment").html(thousands_separators(total_payment));

  var interest_payment = total_payment - principle;
  $("#interestPayble").html(thousands_separators(interest_payment));
}
