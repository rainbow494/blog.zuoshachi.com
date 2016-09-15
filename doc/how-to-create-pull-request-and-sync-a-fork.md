# 如何同步github上其他分支的代码到当前分支

## 为本地代码选择远程分支
```
git remote -v
git remote add upstream https://github.com/aaronz/arch.git
git remote -v
```

## 将远程分支代码合并到当前分支
```
git fetch upstream
git checkout master
git merge upstream/master
```

## 参考资料
[configuring-a-remote-for-a-fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
[syncing-a-fork](https://help.github.com/articles/syncing-a-fork/)
