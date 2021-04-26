
//функція для зміни імені

var counter = 5;

function changeN () {
    var element = document.getElementById('Name');
    element.innerHTML = prompt("Ви бажаєте змінити ім'я, введіть нове", "Name");
    var fail = false;
    if (element.innerHTML == "" || element.innerHTML == "Name" || element.innerHTML == " " ) { //Перевірка вводу
        fail = "Ви не ввели своє ім'я";
        alert(fail);
        element.innerHTML = "Mary Toronii";
    }
}



/*$(document).ready(function(){
    $(".toggle1").click(function(){
        $("#hidden2").toggle(1000);
    });
});*/

var bool = true;
function changes (number) {  //Вікриває приховану інформацію

    $(document).ready(function(){ //відкривання схованого вікнв
            $("#hidden"+ number).toggle(1000);
    });

    var element = document.getElementById('dashboard'+ number);
    var el1 = document.getElementById('button_rotate'+ number);


    bool = !bool;

    if (bool) {
        element.style.backgroundColor = '#283f4d';  //Поворот стрілки і зміна фону
        el1.style.transform = 'rotate(0deg)';
        element.style.overflow = 'hidden';
    } else {
        element.style.backgroundColor = '#17303e';
        el1.style.transform = 'rotate(90deg)';
        element.style.overflow = 'hidden';
    }

}


function timer() {
    document.getElementById("count").innerHTML = counter; //Зворотній відлік
    counter--;
    if (counter >= 0) setTimeout("timer()", 1000);


}


function open() {
    $("#dialog").dialog("open"); //Відкриття діалового вікна
    timer();
}


function srch() {  //Фцнкція для пошукової форми

    var search = document.getElementById("Serch");
    var res = search.value;
    window.bbb = true;

    $(function () {

        $("#dialog").dialog({

            height: 230,
            width: 450,
            resizable:false,
            modal:true,
            autoOpen: false,

            buttons:{
                "Okay": function(){
                    $(this).dialog( "close" );
                    window.location = "http://google.com/search?q=" + res;
                }
            }
        });

    });

    open();
    setTimeout(function(){location.href="http://google.com/search?q="+res} , 5000);
}

function graphic() { //Перевірка чи працює форма вибору
    alert("It works");
}

 new Chartist.Line('.ct-chart ct-golden-section', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [1, 2, 3, 1, -2, 0, 1, 0],
        [-2, -1, -2, -1, -2.5, -1, -2, -1],
        [0, 0, 0, 1, 2, 2.5, 2, 1],
        [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ],
     datasets: [{
        fillColor: blue,
     }]
}, {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
        showLabel: false,
        showGrid: false
    }
});

new Chartist.Line('.ct-chart ct-golden-section', {
    labels: ['День 1', 'День 2', 'День 3', 'День 4', 'День 5'],
    series: [
        [12, 9, 3, 8, 4],
        [2, 1, 4.7, 5.5, 8]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 50
    }
});