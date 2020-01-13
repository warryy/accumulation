## git-flow
#### git-flow 存在的五个分支的概念
1. master
    长期存在的线上稳定版本的代码仓库。任何时候都不能直接在 master 分支上修改代码，而是应该通过合并的方式新增代码。
2. develop
    长期存在的开发分支。其上面的代码提交应该是开发完毕的某一个完整的功能
3. feature
    临时存在的开发分支。从 develop 分支上切出，完成某个需求后，合并到 develop 分支并删除该 feature 分支
4. release 
    临时存在的上线分支。当 develop 分支代码都已经测试完毕，已经稳定后，需要从 develop 分支切出一个 release 分支，并用版本号的形式来命名，当该分支合并到 master 的时候，会删除自身，并且可以配置触发代码发布到线上的操作
5. hotfix
    用于快速修复想上 bug 的临时分支。从 master 分支切出，修复后直接合并到 master。