var round = function (text, pos) {
    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }
    if (text.length > pos) {
        for (i = 1; i < text.length; i++) {
            if (text[i] === ".") {
                i = text.length;
                if (parseFloat(text[pos], 10) >= 5) {
                    text = (setCharAt(text, pos - 1, ((parseFloat(text[pos - 1], 10)) + 1).toString(10))).substr(0, pos);
                } else {
                    text = text.substr(0, pos);
                }
            }
        }
    }
    return text;
};
var $ = jQuery.noConflict();
$(function () {
    var number = "";
    var newnumber = "";
    var operator = "";
    var memory = "0";
    var cleared = 0;
    var slid = 0;
    var testNumLength = function (number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#one").click(function () {
        number += "1";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#two").click(function () {
        number += "2";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#three").click(function () {
        number += "3";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#four").click(function () {
        number += "4";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#five").click(function () {
        number += "5";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#six").click(function () {
        number += "6";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#seven").click(function () {
        number += "7";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#eight").click(function () {
        number += "8";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#slidein").click(function () {
        $("#slide").hide('slide', {
            direction: 'left'
        }, 200);
        if (slid === 1) {
            $("#container").animate({
                "width": "330px"
            }, 250);
            $("#slide").animate({
                "margin-left": "325"
            })
        } else {
            $("#container").animate({
                "width": "548px"
            }, 250);
        }
        $("#slideout").show();
        $("#slidein").hide();
        slid--;
    });
    $("#slideout").click(function () {
        if (slid === 0) {
            $("#container").animate({
                "width": "548px"
            }, 200);
        } else {
            $("#container").animate({
                "width": "766px"
            }, 200);
            $("#slide").animate({
                "margin-left": "539"
            })
        }
        $("#slide").show('slide', {
            direction: 'left'
        }, 250);
        $("#slidein").show();
        $("#slideout").hide();
        slid++;
    });
    $("#slidein2").click(function () {
        $("#slide2").hide('slide', {
            direction: 'right'
        }, 200);
        if (slid === 1) {
            $("#container").animate({
                "width": "330px"
            }, 250);
            $("#slide").animate({
                "margin-left": "325"
            })
        } else {
            $("#container").animate({
                "width": "548px"
            }, 250);
            $("#slide").animate({
                "margin-left": "325"
            })
        }
        $("#calculator").animate({
            "margin-left": ""
        });
        $("#slideout2").show();
        $("#slidein2").hide();
        slid--;
    });
    $("#slideout2").click(function () {
        if (slid === 0) {
            $("#container").animate({
                "width": "548px"
            }, 200);
        } else {
            $("#container").animate({
                "width": "766px"
            }, 200);
            $("#slide").animate({
                "margin-left": "539"
            });
        }
        $("#calculator").animate({
            "margin-left": "213px"
        });
        $("#slide2").show('slide', {
            direction: 'right'
        }, 250);
        $("#slidein2").show();
        $("#slideout2").hide();
        slid++;
    });
    $("#nine").click(function () {
        number += "9";
        number = round(number, 9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#decimal").click(function () {
        var numOfDecs = 0;
        for (i = 0; i < number.length; i++) {
            if (number[i] === ".") {
                numOfDecs++;
            }
        }
        if (numOfDecs > 0) {
            number = number;
            number = round(number, 9);
            totaldiv.text(number);
        } else {
            number += ".";
            number = round(number, 9);
            totaldiv.text(number);
        }
        testNumLength(number);
    });
    $("#zero").click(function () {
        if (number === "") {
            number = "";
        } else {
            number += "0";
        }

        if (number.length > 0) {
            number = round(number, 9);
            totaldiv.text(number);
        } else {
            totaldiv.text("0");
        }
        testNumLength(number);
    });
    $("#plus").click(function () {
        newnumber = number;
        number = "";
        operator = "+";
        totaldiv.text("0");
    });
    $("#minus").click(function () {
        newnumber = number;
        number = "";
        operator = "-";
        totaldiv.text("0");
    });
    $("#times").click(function () {
        newnumber = number;
        number = "";
        operator = "x";
        totaldiv.text("0");
    });
    $("#divide").click(function () {
        newnumber = number;
        number = "";
        operator = "/";
        totaldiv.text("0");
    });
    $("#log").click(function () {
        newnumber = number;
        number = "";
        operator = "log";
        totaldiv.text("0");
    });
    $("#ln").click(function () {
        operator = "ln";
        $("#equals").click();
    });
    $("#Mp").click(function () {
        memory = ((parseFloat(memory, 10)) + (parseFloat(number, 10))).toString(10);
    });
    $("#Mm").click(function () {
        memory = ((parseFloat(memory, 10)) - (parseFloat(number, 10))).toString(10);
    });
    $("#MR").click(function () {
        number = memory;
        totaldiv.text(number);
    });
    $("#MC").click(function () {
        memory = "0";
    });
    $("#sq").click(function () {
        newnumber = number;
        number = "";
        operator = "sq";
        totaldiv.text("0");
    });
    $("#sqrt").click(function () {
        operator = "sqrt";
        $("#equals").click();
    });
    $("#clearall").click(function () {
        if (cleared === 0) {
            number = "";
            totaldiv.text("0");
            cleared = 1;
        } else if (cleared === 1) {
            number = "";
            newnumber = "";
            totaldiv.text("0");
            cleared = 0;
        }
    });
    $("#sind").click(function () {
        operator = "sind";
        $("#equals").click();
    });
    $("#sinr").click(function () {
        operator = "sinr";
        $("#equals").click();
    });
    $("#cosd").click(function () {
        operator = "cosd";
        $("#equals").click();
    });
    $("#cosr").click(function () {
        operator = "cosr";
        $("#equals").click();
    });
    $("#tand").click(function () {
        operator = "tand";
        $("#equals").click();
    });
    $("#tanr").click(function () {
        operator = "tanr";
        $("#equals").click();
    });
    $("#equals").click(function () {
        if (number !== "") {
            if (operator === "+") {
                number = (parseFloat(newnumber, 10) + parseFloat(number, 10)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "x") {
                number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "/") {
                number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "-") {
                number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "sqrt") {
                number = Math.sqrt(parseFloat(number, 10)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "sq") {
                number = ((Math.pow(parseFloat(newnumber, 10), parseFloat(number, 10))).toString(10));
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "sinr") {
                number = (Math.sin(number)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "sind") {
                number = (Math.sin(number * (Math.PI / 180))).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "cosr") {
                number = (Math.cos(number)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "cosd") {
                number = (Math.cos(number * (Math.PI / 180))).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "tanr") {
                number = (Math.tan(number)).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "tand") {
                number = (Math.tan(number * (Math.PI / 180))).toString(10);
                number = round(number, 9);
                totaldiv.text(number);
            } else if (operator === "ln") {
                number = Math.log(number);
                number = number.toFixed(9);
                totaldiv.text(number);
            } else if (operator === "log") {
                number = Math.log(number) / Math.log(newnumber);
                number = round(number, 9);
                totaldiv.text(number);
            }
            if (number === "NaN") {
                number = "";
                totaldiv.text("0");
            }
            testNumLength(number);
            number = round(number, 9);
            totaldiv.text(number);
            number = "";
            newnumber = "";
            cleared = 0;
        } else if (number === "" || newnumber === "") {
            totaldiv.text("0");
        }
    });
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
        } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 97) {
            $("#clearall").click();
        } else if (keycode === 99) {
            $("#clear").click();
        } else if (keycode === 13 || keycode === 61) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#times").click();
        } else if (keycode === 47) {
            $("#divide").click();
        } else if (keycode === 8) {
            if (totaldiv.html() === "Err") {
                number = "";
                newnumber = "";
                totaldiv.text("0");
            } else {
                if (number.length > 0) {
                    number = number.substr(0, number.length - 1);
                }
                totaldiv.text(number);
                if (number === "") {
                    totaldiv.text("0");
                }
            }
            return false;
        } else if (keycode === 127) {
            if (number.length > 0) {
                number = number.substr(1, number.length);
            }
            totaldiv.text(number);
            if (number === "") {
                totaldiv.text("0");
            }
        } else if (keycode === 46) {
            $("#decimal").click();
        } else if (keycode === 94) {
            $("#sq").click();
        } else if (keycode === 114) {
            $("#sqrt").click();
        } else {
            console.log(keycode);
            console.log("Thank you Nico!");
        }
    });
    $(document).keydown(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 8) {
            event.preventDefault();
            if (totaldiv.html() === "Err") {
                number = "";
                newnumber = "";
                totaldiv.text("0");
            } else {
                if (number.length > 0) {
                    number = number.substr(0, number.length - 1);
                }
                totaldiv.text(number);
                if (number === "") {
                    totaldiv.text("0");
                }
            }
            return false;
        }
        $(document).keyup(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode === 8) {
                event.preventDefault();
                if (totaldiv.html() === "Err") {
                    number = "";
                    newnumber = "";
                    totaldiv.text("0");
                } else {
                    if (number.length > 0) {
                        number = number.substr(0, number.length - 1);
                    }
                    totaldiv.text(number);
                    if (number === "") {
                        totaldiv.text("0");
                    }
                }
                return false;
            }
        });
        // Prevent the backspace key from navigating back.
        $(document).unbind('keydown').bind('keydown', function (event) {
            var doPrevent = false;
            if (event.keyCode === 8) {
                var d = event.srcElement || event.target;
                if ((d.tagName.toUpperCase() === 'INPUT' && (d.type.toUpperCase() === 'TEXT' || d.type.toUpperCase() === 'PASSWORD')) || d.tagName.toUpperCase() === 'TEXTAREA') {
                    doPrevent = d.readOnly || d.disabled;
                } else {
                    doPrevent = true;
                }
            }

            if (doPrevent) {
                event.preventDefault();
            }
        });
        $(document).unbind('keyup').bind('keyup', function (event) {
            var doPrevent = false;
            if (event.keyCode === 8) {
                var d = event.srcElement || event.target;
                if ((d.tagName.toUpperCase() === 'INPUT' && (d.type.toUpperCase() === 'TEXT' || d.type.toUpperCase() === 'PASSWORD')) || d.tagName.toUpperCase() === 'TEXTAREA') {
                    doPrevent = d.readOnly || d.disabled;
                } else {
                    doPrevent = true;
                }
            }

            if (doPrevent) {
                event.preventDefault();
            }
        });
        $(document).unbind('keypress').bind('keypress', function (event) {
            var doPrevent = false;
            if (event.keyCode === 8) {
                var d = event.srcElement || event.target;
                if ((d.tagName.toUpperCase() === 'INPUT' && (d.type.toUpperCase() === 'TEXT' || d.type.toUpperCase() === 'PASSWORD')) || d.tagName.toUpperCase() === 'TEXTAREA') {
                    doPrevent = d.readOnly || d.disabled;
                } else {
                    doPrevent = true;
                }
            }

            if (doPrevent) {
                event.preventDefault();
            }
        });
    });
});
