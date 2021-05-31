
//функція для зміни імені

let counter = 5;

function changeN() {
    let element = document.getElementById('Name');
    element.innerHTML = prompt("Ви бажаєте змінити ім'я, введіть нове", "Name");
    let fail = false;
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

let bool = true;

function changes (number) {  //Вікриває приховану інформацію

    $(document).ready(function(){ //відкривання схованого вікнв
            $("#hidden"+ number).toggle(1000);
    });

    let element = document.getElementById('dashboard' + number);
    let el1 = document.getElementById('button_rotate' + number);


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

    let search = document.getElementById("Serch");
    let res = search.value;
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






var sel = $("select");

    sel.change(function() {
        let arr = [125, 28, 25, 12, 1200, 1150, 980, 720, 600];
        var str = "";
        alert(str);
        $( "select option:selected" ).each(function() {
            str += $( this ).text();
        });
        alert(str);
        let num_arr = $('span.numbers');
        switch (str) {
            case "Last 90 Day's":
                alert("info for season");
                for (let i = 0; i < 9; i++) {
                    $(num_arr.get(i)).html(arr[i] * 3);
                }
                break;}

    })
sel.trigger( "change" );


function getajax(text) {
    $.ajax({
        type:'GET',
        url: "data.json",
        dataType:'json',
        success:function(data) {

            console.log(data);
            $.each(data, function(text) {
                let num_arr = $('span.numbers');
                for (let i = 0; i < 9; i++) $(num_arr.get(i)).html(data["month_inf[i]"]);
            })   },

        error:function(){
            alert('error')
        }
    });
}

/*{

    let arr = [125, 28, 25, 12, 1200, 1150, 980, 720, 600];
    let time = $('option[name="time"]:selected').val();
    let num_arr = $('span.numbers');
    switch (time) {
        case 'season':
            alert("info for season");
            for (let i = 0; i < 9; i++) {
                $(num_arr.get(i)).html(arr[i] * 3);
            }
            break;
    }
}*/