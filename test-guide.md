
#### map test when ip is not localhost

1. updated __local_setting.js__
```
var APIServer = "http://localhost/RoutefinderApi";
```
to
```
var APIServer = "http://192.168.31.127/RoutefinderApi";
```

1. update __index.html__
 ```
 <script src="//maps.googleapis.com/maps/api/js?client=xxxyyxz" type="text/javascript"></script>
```
to
```
<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyDlzM5l9RTisnn7x05Qpgm64E3UiNj6Yhg" type="text/javascript"></script>
```
