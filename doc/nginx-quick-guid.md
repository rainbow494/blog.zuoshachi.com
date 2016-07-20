# Nginx学习笔记

1. 常用命令
2. 文件路径
3. 配置方法
4. 其它

## Linux
1. 常用命令
    - 重启服务
    ```
    /etc/init.d/nginx restart
    ```
    
    - 校验配置文件
    ```
    nginx -c /etc/nginx/nginx.conf -t
    sudo nginx -t
    ```

    - 查看进程
    ```
    ps  -ef | grep nginx  
    ```

    - 找到所有Nginx相关文件
    ```
    find . -name 'nginx*',找找它的文件
    ```

2. 默认 文件/文件夹 路径

    - 配置文件

    ```
    /etc/nginx/nginx.conf
    /etc/nginx/sites-available/
    ```
    **注意 Nginx可使用嵌套配置，Nginx.conf中有一段指明内部sever配置实用/sites-available/下的default文件？？？？？？？？？？？？？？？？？？？？？**

    - HTML文件 [相关资料](http://stackoverflow.com/questions/10674867/nginx-default-public-www-location)
    ```
    /usr/share/nginx/html
    ```

    - 日志文件
    ```
    /var/log/nginx
    ```

3. 配置方法
    - [官方站点](http://nginx.org/en/docs/)
    - [Nginx配置入门](http://www.nginx.cn/591.html)

4. 其它

    - 清除缓存 [相关资料](http://stackoverflow.com/questions/6236078/how-to-clear-the-cache-of-nginx)
    ```
    clear cache
    ```


## Windows
1. 常用命令
```
taskkill /F /IM nginx.exe

cmd /k cd /d F:\bitbucket\nginx

start nginx -c F:\bitbucket\JGIO\src\deploy\nginx\nginx.conf
```