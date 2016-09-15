docker学习


- 进入容器内（同时在内部启用bash命令）
> sudo docker exec -it 157d19ab0e73 /bin/bash
> 157d19ab0e73为容器id

- 查看所有docer
> docker ps -a
> docker ps

- 查看所有image
> docker images

## 查看端口映射
> iptables -t nat -nL

## 参考
[Docker 端口映射问题解决](http://www.cnblogs.com/zhenyuyaodidiao/p/4691232.html)

[docker详细的基础用法](http://www.open-open.com/lib/view/open1410568733492.html)
[docker中如何删除image](http://yaxin-cn.github.io/Docker/how-to-delete-a-docker-image.html)
[如何进入 Docker 容器](http://www.oschina.net/translate/enter-docker-container)