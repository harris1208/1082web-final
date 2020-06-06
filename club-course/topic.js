let holiday = [
    ["2020-01-01","元旦"],
    ["2020-01-25","農曆年初一"],
    ["2020-01-27","農曆年初三"],
    ["2020-01-28","農曆年初四"],
    ["2020-04-04","清明節"],
    ["2020-04-10","耶穌受難節"],
    ["2020-04-11","耶穌受難節翌日"],
    ["2020-04-13","復活節星期一"],
    ["2020-04-30","佛誕"],
    ["2020-05-01","勞動節"],
    ["2020-06-25","端午節"],
    ["2020-07-01","香港特別行政區成立紀念日"],
    ["2020-10-01","國慶日"],
    ["2020-10-02","中秋節翌日"],
    ["2020-10-26","重陽節翌日"],
    ["2020-12-25","聖誕節"],
    ["2020-12-26","聖誕節後第一個周日"]
];

let startDate = new Date();
let endDate = new Date();
let currentDate = new Date();
let Sunday;
let x =0;

function setMonthAndDay(startMonth , startDay, check){
    if(check==0){
        startDate.setMonth(startMonth-1, startDay);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        Sunday=startDate;
        while(Sunday.getDay()!=0){
            Sunday=new Date(Sunday.getTime()+24*60*60*1000);
        }
    }
    else if(check==1){
        endDate.setMonth(startMonth-1, startDay);
        endDate.setHours(0);
        endDate.setMinutes(0);
        endDate.setSeconds(0); 
    }
    else{
        currentDate.setMonth(startMonth-1, startDay);
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0); 
    }
}