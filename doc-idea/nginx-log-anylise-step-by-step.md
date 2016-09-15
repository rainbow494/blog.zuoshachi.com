# 手把手教你分析Nginx日志

最近在学习Nginx，正好到看这篇文章[Nginx日志中的金矿](http://www.infoq.com/cn/articles/nignx-log-goldmine)

于是便动手实践一把

## 环境
less[下载地址](http://gnuwin32.sourceforge.net/packages/less.htm)
http://gnuwin32.sourceforge.net/packages/gawk.htm
[Linux核心命令](http://gnuwin32.sourceforge.net/packages/coreutils.htm)
[Linux命令安装包汇总](http://gnuwin32.sourceforge.net/packages.html)
[Cygwin](http://www.cygwin.com/)

关于引号
[执行CMD时，参数加引号常见问题](http://blog.csdn.net/mostone/article/details/27478271)

---------------------------------------------------

21/Jun/2016:08:30:18
03/Sep/2016:12:36:24

// 请求总数 / 日志行数
less main.log | wc -l
469094

// 平均每秒的请求数
less main.log | awk  "{sec=substr($4,2,20);reqs++;reqsBySec[sec]++;} END{print reqs/length(reqsBySec)}" 
1.27354

// 峰值每秒请求数
less main.log | awk "{sec=substr($4,2,20);requests[sec]++;} END{for(s in requests){printf("""%s %s\n""", requests[s],s)}}" | sort -nr | head -n 3

Page Visits  Response Size  Time Spent/req  Moment
64 09/Aug/2016:16:36:53
61 09/Aug/2016:16:36:52
36 20/Jul/2016:16:44:

// 带宽使用情况
less main.log | awk "{url=$7; requests[url]++;bytes[url]+=$10} END{for(url in requests){printf("""%sMB %sKB/req %s %s\n""", bytes[url]/1024/1024, bytes[url]/requests[url]/1024, requests[url], url)}}" | sort -nr | head -n 15

549.384MB 244.808KB/req 2298 /homepage.bundle.js?v=812b8749-b557-42ee-9320-5c3fcd410ee9
548.831MB 414.457KB/req 1356 /postpage.bundle.js?v=812b8749-b557-42ee-9320-5c3fcd410ee9
397.557MB 386.242KB/req 1054 /homepage.bundle.js?v=07d3d616-a6e3-44f6-9fba-29a3d09787b4
271.012MB 373.508KB/req 743 /postpage.bundle.js?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
234.104MB 321.776KB/req 745 /homepage.bundle.js?v=20206dbc-08c0-4b24-83d8-f3c0495fa8d5
220.311MB 232.576KB/req 970 /homepage.bundle.js?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
66.9777MB 275.442KB/req 249 /homepage.bundle.js?v=f3dfc24c-9e49-4ee6-9b00-4a1c663cc69f
66.8909MB 539.341KB/req 127 /postpage.bundle.js?v=07d3d616-a6e3-44f6-9fba-29a3d09787b4
53.1583MB 351.188KB/req 155 /postpage.bundle.js?v=e20888b8-2823-467b-85aa-2b2c98eed58d
51.2064MB 14.0502KB/req 3732 /
43.2284MB 183.676KB/req 241 /homepage.bundle.js?v=fc39f021-8485-491f-869d-55c451117be2
34.7348MB 195.431KB/req 182 /homepage.bundle.js?v=1730798a-079d-473f-88b7-1205ba9d9b99
29.9134MB 237.452KB/req 129 /homepage.bundle.js?v=e20888b8-2823-467b-85aa-2b2c98eed58d
27.9683MB 307.952KB/req 93 /postpage.bundle.js?v=fc39f021-8485-491f-869d-55c451117be2
27.1295MB 128.614KB/req 216 /searchpage.bundle.js?v=812b8749-b557-42ee-9320-5c3fcd410ee9
sort: write failed: standard output: Invalid argument
sort: write error

// URL占用CPU的时间
less main.log | awk "{url=$7; times[url]++} END{for(url in times){printf("""%s %s\n""", times[url], url)}}" | sort -nr | more

5411 /main.css?v=812b8749-b557-42ee-9320-5c3fcd410ee9
3798 /read-and-process-data.js?v=812b8749-b557-42ee-9320-5c3fcd410ee9
3732 /
2617 /robots.txt
2482 /source/favicon.ico?v=812b8749-b557-42ee-9320-5c3fcd410ee9
2298 /homepage.bundle.js?v=812b8749-b557-42ee-9320-5c3fcd410ee9
1873 /main.css?v=07d3d616-a6e3-44f6-9fba-29a3d09787b4
1468 /main.css?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
1465 /read-and-process-data.js?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
1356 /postpage.bundle.js?v=812b8749-b557-42ee-9320-5c3fcd410ee9
1103 /register
1054 /homepage.bundle.js?v=07d3d616-a6e3-44f6-9fba-29a3d09787b4
970 /homepage.bundle.js?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
886 /source/favicon.ico?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
745 /homepage.bundle.js?v=20206dbc-08c0-4b24-83d8-f3c0495fa8d5
743 /postpage.bundle.js?v=7b8d52e5-97f7-4836-b010-65b9f58fe7e6
615 /arch/tag/mapping/category/newest
600 /main.css?v=20206dbc-08c0-4b24-83d8-f3c0495fa8d5
595 /arch/tag/%E6%9E%B6%E6%9E%84
536 /arch/tag/docker
496 /arch/tag/javascript
482 /arch/tag/%E5%89%8D%E7%AB%AF
474 /wp-login.php
461 /arch/tag/html5
456 /arch/tag/%E5%A4%A7%E6%95%B0%E6%8D%AE
-- More  --

// seo分析
less main.log | egrep "spider|bot" | awk "{name=$17;if(index($15,"""spider""")>0){name=$15};spiders[name]++} END{for(name in spiders){printf("""%s %s\n""",spiders[name], name)}}" | sort -nr

less main.log | egrep "spider" | awk "{name=$17;if(index($14,"""spider""")>0){name=$14};if(index($14,"""bot""")>0){name=$14};spiders[name]++} END{for(name in spiders){printf("""%s %s\n""",spiders[name], name)}}" | sort -nr | more
63975 Baiduspider/2.0;
454 256
395 spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)"
263 254

less main.log | egrep "bot" | awk "{name=$17;if(index($14,"""spider""")>0){name=$14};if(index($14,"""bot""")>0){name=$14};spiders[name]++} END{for(name in spiders){printf("""%s %s\n""",spiders[name], name)}}" | sort -nr | more
146220 Googlebot/2.1;
114222 5X
43720 MJ12bot/v1.4.5;
20756 bingbot/2.0;
2810 "-"
816 linkdexbot/2.0;


---------------------------------------------------

head -n 5 main.log
[awk入门](http://www.cnblogs.com/ggjucheng/archive/2013/01/13/2858470.html)
