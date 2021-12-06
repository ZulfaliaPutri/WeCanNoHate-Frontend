$(document).ready(function () {
  console.log("[INFO] script started");
  $("#button-input").click(function (e) {
    e.preventDefault();
    var text = $("#text-input").val();
    console.log(text);
    $.ajax({
      url: "http://localhost:8080/predict",
      type: "POST",
      data: JSON.stringify({ inputs: [text] }),
      contentType: "application/json",
      complete: function (data, code) {
        data.then((data) => {
          data = JSON.parse(data);
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
});
