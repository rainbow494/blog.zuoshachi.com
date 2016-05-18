#和时间处理相关的代码存档(Draft)

new DateRange('本周', moment().day(0), moment().day(6)),
new DateRange('上周', moment().day(-7), moment().day(-1)),
new DateRange('本月', moment().startOf('month'), moment().endOf('month')),