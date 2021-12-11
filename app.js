$(document).ready(function () {
  console.log("[INFO] script started");
  $("#button-input").click(function (e) {
    e.preventDefault();
    $("#button-input").addClass("hide");
    $("#button-reset").removeClass("hide");
    $("#result-loading").removeClass("hide");
    var text = $("#text-input").val();
    $.ajax({
      url: "http://localhost:8080/predict",
      type: "POST",
      data: JSON.stringify({ inputs: [text] }),
      contentType: "application/json",
      complete: function (data, code) {
        data.then((data) => {
          data = JSON.parse(data);
          $("#result-loading").addClass("hide");
          if (data[0] == 1) {
            $("#result-hate").removeClass("hide");
            $("#result-not-hate").addClass("hide");
          } else {
            $("#result-not-hate").removeClass("hide");
            $("#result-hate").addClass("hide");
          }
        });
      },
    });
  });

  $("#button-reset").click(function (e) {
    e.preventDefault();
    $("#button-reset").addClass("hide");
    $("#result-hate").addClass("hide");
    $("#result-not-hate").addClass("hide");
    $("#button-input").removeClass("hide");
  });
});
