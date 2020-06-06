$(document).ready(function(){
    $("#courseTable").empty();

    $("#courseTable").append(
        "<tr><th>日期</th><th>假期</th></tr>"
    );

    $("#date-button").click(function(){
        $("#courseTable").empty();

    $("#courseTable").append(
        "<tr><th>日期</th><th>假期</th></tr>"
    );
        let StartDate = $("#StartDate").val();
        let EndDate = $("#EndDate").val();
        if(StartDate==""){
            alert("起始日不能為空");
        }
        else if(EndDate==""){
            alert("結束日不能為空");
        }
        else if(EndDate<StartDate){
            alert("結束日不能早於起始日");
        }
        else{
            let splitText = StartDate.split("-");
            setMonthAndDay(splitText[1],splitText[2],0);
            splitText = EndDate.split("-");
            setMonthAndDay(splitText[1],splitText[2],1);
            while(holiday[x][0]<StartDate){
                x++;
            }
            splitText = holiday[x][0].split("-");
            setMonthAndDay(splitText[1],splitText[2],2);
            setTable(); 
        }
    });
});

function setTable(){
    //資料列
    let oneDayMilliseconds = 24*60*60*1000;
    while(currentDate<=endDate || Sunday<=endDate){
        let trSpecial = "<tr>";
        if(currentDate>Sunday){
            $("#courseTable").append(
                trSpecial+
                "<td>"+ Sunday.toLocaleDateString() 
                +"</td><td>星期日</td></tr>"
            );
            Sunday=new Date(Sunday.getTime()+7*oneDayMilliseconds);
        }
        else{
            trSpecial = "<tr style='background-color:lightyellow'>";
            $("#courseTable").append(
                trSpecial+
                "<td>"+ currentDate.toLocaleDateString() +"</td>"+
                "<td>"+ holiday[x][1] +"</td>"+
                "</tr>"
            );
            x++;
            splitText = holiday[x][0].split("-");
            setMonthAndDay(splitText[1],splitText[2],2);
        }
    }
}
