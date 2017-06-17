var n = 500
var m = 1
var random1 = function() {
    return Math.floor(Math.random() * n) + m
}
var money = 10000
$('button').on('click', function() {
    var a = Number($('#horse1').val())
    var b = Number($('#horse2').val())
    var c = Number($('#horse3').val())
    var d = Number($('#horse4').val())
    var e = Number($('#horse5').val())
    var f = Number($('#horse6').val())
    var r = /^\d+$/
    if (r.test(a / 100) == false ||
        r.test(b / 100) == false ||
        r.test(c / 100) == false ||
        r.test(d / 100) == false ||
        r.test(e / 100) == false ||
        r.test(f / 100) == false) {
        $('div#warn').empty();
        $div = $('<div>').attr('style', 'color:red;font-weight:900').text("請以百元為單位下注!")
        $('div#warn').append($div)
    }
    if (r.test(a / 100) == true &&
        r.test(b / 100) == true &&
        r.test(c / 100) == true &&
        r.test(d / 100) == true &&
        r.test(e / 100) == true &&
        r.test(f / 100) == true) {
        money = money - a - b - c - d - e - f

        if (money < 0) {
            // document.getElementById("remain").value = "錯誤";
            $('div#warn').empty();
            $div = $('<div>').attr('style', 'color:red;font-weight:900').text("抱歉!你的錢不夠下注!!")
            $('div#warn').append($div)
            money = money + a + b + c + d + e + f
        } else {
            if (money >= 0) {

                var x = random1()
                $('div#warn').empty();
                if (x <= 12) {
                    $div = $('<div>').attr('style', 'color:#FF9800').text("馬匹6贏了!!")
                    $('div#warn').append($div)
                    money = money + f * 30
                    result = f * 30 - a - b - c - d - e - f
                    if (result >= 0) {
                        document.getElementById("winloss").innerText = "贏得";
                        document.getElementById("remain").value = result
                    }
                    if (result < 0) {
                        document.getElementById("winloss").innerText = "賠了";
                        document.getElementById("remain").value = a + b + c + d + e
                    }
                } else {
                    if (x <= 30) {
                        $div = $('<div>').attr('style', 'color:#FF9800').text("馬匹5贏了!!")
                        $('div#warn').append($div)
                        money = money + e * 10
                        result = e * 10 - a - b - c - d - e - f
                        if (result >= 0) {
                            document.getElementById("winloss").innerText = "贏得";
                            document.getElementById("remain").value = result
                        }
                        if (result < 0) {
                            document.getElementById("winloss").innerText = "賠了";
                            result = Math.abs(result);
                            document.getElementById("remain").value = a + b + c + d + f
                        }
                    } else {
                        if (x <= 60) {
                            $div = $('<div>').attr('style', 'color:#FF9800').text("馬匹4贏了!!")
                            $('div#warn').append($div)
                            money = money + d * 4
                            result = d * 4 - a - b - c - d - e - f
                            if (result >= 0) {
                                document.getElementById("winloss").innerText = "贏得";
                                document.getElementById("remain").value = result
                            }
                            if (result < 0) {
                                document.getElementById("winloss").innerText = "賠了";
                                document.getElementById("remain").value = a + b + c + e + f
                            }
                        } else {
                            if (x <= 100) {
                                $div = $('<div>').attr('style', 'color:#FF9800').text("馬匹3贏了!!")
                                $('div#warn').append($div)
                                money = money + c * 3
                                result = c * 3 - a - b - c - d - e - f
                                if (result >= 0) {
                                    document.getElementById("winloss").innerText = "贏得";
                                    document.getElementById("remain").value = result
                                }
                                if (result < 0) {
                                    document.getElementById("winloss").innerText = "賠了";
                                    document.getElementById("remain").value = a + b + d + e + f
                                }
                            } else {
                                if (x <= 200) {
                                    $div = $('<div>').attr('style', 'color:#FF9800').text("馬匹2贏了!!")
                                    $('div#warn').append($div)
                                    money = money + b * 1.8
                                    result = b * 1.8 - a - b - c - d - e - f
                                    if (result >= 0) {
                                        document.getElementById("winloss").innerText = "贏得";
                                        document.getElementById("remain").value = result
                                    }
                                    if (result < 0) {
                                        document.getElementById("winloss").innerText = "賠了";
                                        document.getElementById("remain").value = a + c + d + e + f
                                    }
                                } else {
                                    if (x <= 500) {
                                        $div = $('<div>').attr('style', 'color:#FF9800').text("馬匹1贏了!!")
                                        $('div#warn').append($div)
                                        money = money + a * 1.2
                                        result = a * 1.2 - a - b - c - d - e - f
                                        if (result >= 0) {
                                            document.getElementById("winloss").innerText = "贏得";
                                            document.getElementById("remain").value = result
                                        }
                                        if (result < 0) {
                                            document.getElementById("winloss").innerText = "賠了";
                                            document.getElementById("remain").value = b + c + d + e + f
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                var random2 = function() {
                    return Math.floor(Math.random() * 20) + 1
                }
                var y = random2()
                if (y <= 5) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:blue').text("風和日麗的一天")
                    $('div#news').append($div)
                    n = 500
                    m = 1
                }
                if (y > 5 && y <= 10) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:red;font-weight:900').text("快訊:馬匹1、2、3食物中毒，體力虛脫")
                    $('div#news').append($div)
                    n = 60
                    m = 1
                }
                if (y == 11 & 12 & 13) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:red;font-weight:900').text("預言家:馬匹1或2會獲勝")
                    $('div#news').append($div)
                    n = 400
                    m = 101
                }
                if (y == 14 & 15 & 16) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:red;font-weight:900').text("預言家:馬匹3或4會獲勝")
                    $('div#news').append($div)
                    n = 70
                    m = 31
                }
                if (y == 17 & 18) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:red;font-weight:900').text("預言家:馬匹5或6會獲勝")
                    $('div#news').append($div)
                    n = 30
                    m = 1
                }
                if (y == 19) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:red;font-weight:900').text("神諭:馬匹5會獲勝")
                    $('div#news').append($div)
                    n = 18
                    m = 13
                }
                if (y == 20) {
                    $('div#news').empty();
                    $div = $('<div>').attr('style', 'color:red;font-weight:900').text("神諭:馬匹6會獲勝")
                    $('div#news').append($div)
                    n = 12
                    m = 1
                }

                $('div#money').empty();
                $label1 = $('<label>').attr('class', 'col-5').attr('style', 'text-align: right').text("資本:");
                $label2 = $('<label>').attr('class', 'col-2').text(money);
                $label3 = $('<label>').attr('class', 'col-5').attr('style', 'text-align: left').text("元");
                $('div#money').append($label1);
                $('div#money').append($label2);
                $('div#money').append($label3)
                document.getElementById("horse1").value = "0"
                document.getElementById("horse2").value = "0"
                document.getElementById("horse3").value = "0"
                document.getElementById("horse4").value = "0"
                document.getElementById("horse5").value = "0"
                document.getElementById("horse6").value = "0"
            }
        }
    }
})