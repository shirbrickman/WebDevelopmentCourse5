


function replace(dogNum) {
    document.getElementById('dog1').src = "images/" + dogNum + ".png";
    if (dogNum == 1) {

        //ברירת מחדל
        document.getElementById('p1').innerText = "בחרו את השלב המתאים לכם כמגדלי גורי נחייה כדי להתחיל";
        document.getElementById('h11').hidden = false;
        document.getElementById('p1').style.marginTop = "0";
        document.getElementById('p1').style.marginLeft = "0";

        $('#bone').removeClass('dog-icons-hover');
        $('#food').removeClass('dog-icons-hover');
        $('#home').removeClass('dog-icons-hover');
        $('#collar').removeClass('dog-icons-hover');
        $('#arrow1').removeClass('dog-icons-hover');
        $('#arrow2').removeClass('dog-icons-hover');
        $('#arrow3').removeClass('dog-icons-hover');
        $('#arrow4').removeClass('dog-icons-hover');
    }

    if (dogNum == 2) {
        //עברו עצם
        document.getElementById('p1').innerText = "אז אתם רוצים לגדל אחד כמוני? בואו נראה אם אתם מתאימים!";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "30px";
        document.getElementById('p1').style.marginLeft = "20px";
        $('#food').addClass('dog-icons-hover');
        $('#home').addClass('dog-icons-hover');
        $('#collar').addClass('dog-icons-hover');
        $('#arrow2').addClass('dog-icons-hover');
        $('#arrow3').addClass('dog-icons-hover');
        $('#arrow4').addClass('dog-icons-hover');

    }

    if (dogNum == 3) {
        //עברו אוכל
        document.getElementById('p1').innerText = "החלטתם לאמץ? מזל טוב! כמה דברים שחשוב שתדעו לפני שאני מגיע אליכם";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "30px";
        $('#bone').addClass('dog-icons-hover');
        $('#home').addClass('dog-icons-hover');
        $('#collar').addClass('dog-icons-hover');
        $('#arrow1').addClass('dog-icons-hover');
        $('#arrow3').addClass('dog-icons-hover');
        $('#arrow4').addClass('dog-icons-hover');
    }

    if (dogNum == 4) { //עברו מלונה 

        document.getElementById('p1').innerText = "אנחנו ידועים כאכלנים לא קטנים, ואף פעם לא נאמר לא לאוכל ולממתקים. כדאי שתזכרו את זה!";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "20px";
        $('#bone').addClass('dog-icons-hover');
        $('#food').addClass('dog-icons-hover');
        $('#collar').addClass('dog-icons-hover');
        $('#arrow1').addClass('dog-icons-hover');
        $('#arrow2').addClass('dog-icons-hover');
        $('#arrow4').addClass('dog-icons-hover');
    }

    if (dogNum == 5) { //עברו קולר
        document.getElementById('p1').innerText = "אתם חמודים והכל, אבל הגיע הזמן שאתחיל למלא את תפקידי נאמנה!";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "20px";
        $('#bone').addClass('dog-icons-hover');
        $('#food').addClass('dog-icons-hover');
        $('#home').addClass('dog-icons-hover');
        $('#arrow1').addClass('dog-icons-hover');
        $('#arrow2').addClass('dog-icons-hover');
        $('#arrow3').addClass('dog-icons-hover');
    }

}

var num = 108; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');

    } else {
        $('.menu').removeClass('fixed');
    }
});


var $window = $(window);
$window.on("scroll", function (e) {


    if ($window.scrollTop() > $("#doifitDiv").offset().top) {
        //document.getElementById("doifitLi").style.backgroundColor = "#424564";//צבוע
        //document.getElementById("doifitA").style.color = "white";

        //document.getElementById("beforeAdoptingLi").style.backgroundColor = "white"; 
        //document.getElementById("beforeAdoptingA").style.color = "black";

        //document.getElementById("duringLi").style.backgroundColor = "white";
        //document.getElementById("duringA").style.color = "black";

        //document.getElementById("afterLi").style.backgroundColor = "white";
        //document.getElementById("afterA").style.color = "black";

        //document.getElementById("contactLi").style.backgroundColor = "white";
        //document.getElementById("contactA").style.color = "black";

        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('unActiveAndHover');
        $('#doifitA').addClass('activeAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    else {
        //document.getElementById("doifitLi").style.backgroundColor = "white";
        //document.getElementById("doifitA").style.color = "black";

        //document.getElementById("beforeAdoptingLi").style.backgroundColor = "white";
        //document.getElementById("beforeAdoptingA").style.color = "black";

        //document.getElementById("duringLi").style.backgroundColor = "white";
        //document.getElementById("duringA").style.color = "black";

        //document.getElementById("afterLi").style.backgroundColor = "white";
        //document.getElementById("afterA").style.color = "black";

        //document.getElementById("contactLi").style.backgroundColor = "white";
        //document.getElementById("contactA").style.color = "black";
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#beforeAdoptingDiv").offset().top) {
        //document.getElementById("beforeAdoptingLi").style.backgroundColor = "#424564"; //צבוע
        //document.getElementById("beforeAdoptingA").style.color = "white";

        //document.getElementById("duringLi").style.backgroundColor = "white";
        //document.getElementById("duringA").style.color = "black";

        //document.getElementById("afterLi").style.backgroundColor = "white";
        //document.getElementById("afterA").style.color = "black";

        //document.getElementById("contactLi").style.backgroundColor = "white";
        //document.getElementById("contactA").style.color = "black";

        //document.getElementById("doifitLi").style.backgroundColor = "white";
        //document.getElementById("doifitA").style.color = "black";

        $('#beforeAdoptingA').removeClass('unActiveAndHover');
        $('#beforeAdoptingA').addClass('activeAndHover');
        $('#duringA').removeClass('activeAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').removeClass('activeAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#duringDiv").offset().top) {
        //document.getElementById("doifitLi").style.backgroundColor = "white";
        //document.getElementById("doifitA").style.color = "black";

        //document.getElementById("beforeAdoptingLi").style.backgroundColor = "white";
        //document.getElementById("beforeAdoptingA").style.color = "black";

        //document.getElementById("duringLi").style.backgroundColor = "#424564"; //צבוע
        //document.getElementById("duringA").style.color = "white";

        //document.getElementById("afterLi").style.backgroundColor = "white";
        //document.getElementById("afterA").style.color = "black";

        //document.getElementById("contactLi").style.backgroundColor = "white";
        //document.getElementById("contactA").style.color = "black";
        $('#beforeAdoptingA').removeClass('activeAndHover');
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').removeClass('unActiveAndHover');
        $('#duringA').addClass('activeAndHover');
        $('#afterA').removeClass('activeAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#afterDiv").offset().top) {
        //document.getElementById("doifitLi").style.backgroundColor = "white";
        //document.getElementById("doifitA").style.color = "black";

        //document.getElementById("beforeAdoptingLi").style.backgroundColor = "white";
        //document.getElementById("beforeAdoptingA").style.color = "black";

        //document.getElementById("duringLi").style.backgroundColor = "white"; 
        //document.getElementById("duringA").style.color = "black";

        //document.getElementById("afterLi").style.backgroundColor = "#424564";//צבוע
        //document.getElementById("afterA").style.color = "white";

        //document.getElementById("contactLi").style.backgroundColor = "white";
        //document.getElementById("contactA").style.color = "black";
        $('#beforeAdoptingA').removeClass('activeAndHover');
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').removeClass('activeAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').removeClass('unActiveAndHover');
        $('#afterA').addClass('activeAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#contactDiv").offset().top) {
        //document.getElementById("doifitLi").style.backgroundColor = "white";
        //document.getElementById("doifitA").style.color = "black";

        //document.getElementById("beforeAdoptingLi").style.backgroundColor = "white";
        //document.getElementById("beforeAdoptingA").style.color = "black";

        //document.getElementById("duringLi").style.backgroundColor = "white"; 
        //document.getElementById("duringA").style.color = "black";

        //document.getElementById("afterLi").style.backgroundColor = "#424564";//צבוע
        //document.getElementById("afterA").style.color = "white";

        //document.getElementById("contactLi").style.backgroundColor = "white";
        //document.getElementById("contactA").style.color = "black";
        $('#beforeAdoptingA').removeClass('activeAndHover');
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').removeClass('activeAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').removeClass('activeAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('unActiveAndHover');
        $('#contactA').addClass('activeAndHover');
    }
});

