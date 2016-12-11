<<<<<<< HEAD
$(function () {
    getInfo();
});

function getInfo() {
    $.ajax({
        url: '/webproject/scripts/information.json',
        dataType: "json",
        success: function (data) {
            console.log(data);
            var christmasHistory = data.history.christmas;
            $('#christmasHistory').text(christmasHistory);
            var origin = data.history.meaning;
            $('#origin').text(origin);
            var christmasSymbols = data.history.symbols;
            $('#symbols').text(christmasSymbols);
            var boxingDay = data.history.boxingday;
            $('#boxingDay').text(boxingDay);
            var santaFacts = data.biographies.santa;
            console.log(santaFacts);
            var output = "<li>";
            var i = 1;
            for (i in santaFacts) {
                if (i < 15) {
                    output += santaFacts[i] + "</li><br><li>";
                } else {
                    output += santaFacts[i] + "</li>";
                }
            }
            $('#santaFacts').html(output);
            var rudolphFacts = data.biographies.rudolph;
            console.log(rudolphFacts);
            var newOutput = "<li>";
            var j = 1;
            for (j in rudolphFacts) {
                if (j < 5) {
                    newOutput += rudolphFacts[j] + "</li><br><li>";
                } else {
                    newOutput += rudolphFacts[j] + "</li>";
                }
            }
            $('#rudolphFacts').html(newOutput);
        }
    });
}
=======
$(function () {
    getInfo();
});

function getInfo() {
    $.ajax({
        url: '/webproject/scripts/information.json',
        dataType: "json",
        success: function (data) {
            console.log(data);
            var christmasHistory = data.history.christmas;
            $('#christmasHistory').text(christmasHistory);
            var origin = data.history.meaning;
            $('#origin').text(origin);
            var christmasSymbols = data.history.symbols;
            $('#symbols').text(christmasSymbols);
            var boxingDay = data.history.boxingday;
            $('#boxingDay').text(boxingDay);
            var santaFacts = data.biographies.santa;
            console.log(santaFacts);
            var output = "<li>";
            var i = 1;
            for (i in santaFacts) {
                if (i < 15) {
                    output += santaFacts[i] + "</li><br><li>";
                } else {
                    output += santaFacts[i] + "</li>";
                }
            }
            $('#santaFacts').html(output);
            var rudolphFacts = data.biographies.rudolph;
            console.log(rudolphFacts);
            var newOutput = "<li>";
            var j = 1;
            for (j in rudolphFacts) {
                if (j < 5) {
                    newOutput += rudolphFacts[j] + "</li><br><li>";
                } else {
                    newOutput += rudolphFacts[j] + "</li>";
                }
            }
            $('#rudolphFacts').html(newOutput);
        }
    });
}
>>>>>>> origin/master
