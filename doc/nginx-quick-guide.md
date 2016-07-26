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

2. 文件/文件夹路径 (默认)

    - 配置文件

    ```
    /etc/nginx/nginx.conf
    /etc/nginx/sites-available/default
    ```
    ```
    ** 注意 Nginx可使用嵌套配置 ** 
    
    例如：linux的nginx.conf的默认配置下可见如下两行

    > include /etc/nginx/conf.d/*.conf;
    > include /etc/nginx/sites-enabled/*;

    表明nginx.conf将会从这两个目标文件夹下读取 server节点的配置
    ```    
    
    - Html文件 [(相关资料)](http://stackoverflow.com/questions/10674867/nginx-default-public-www-location)
       
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
    - 请在 *管理员* 模式下打开CMD窗口并执行相应命令

    - 停止Http服务（防止80端口被占用）
    ```
    net stop http
    ```

    - 杀死所有nginx进程
    ```
    taskkill /F /IM nginx.exe
    ```

    - 快速打开ngixn.exe所在文件夹
    ```
    cmd /k cd /d F:\bitbucket\nginx
    ```

    - 读取指定文件配置启动nginx
    ```    
    start nginx -c F:\bitbucket\JGIO\src\deploy\nginx\nginx.conf
    ```

    - 查看帮助
    ```    
    nginx -h
    ```