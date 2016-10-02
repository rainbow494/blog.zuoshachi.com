var myViewModel = {
    obSummary: ko.observableArray([]),
    obTitle: ko.observable(),
    obDescription: ko.observable()
};
ko.applyBindings(myViewModel);

var init = function() {
    initBase();
    initSummary();
}

function initBase() {
    myViewModel.obTitle(title);
    myViewModel.obDescription(description);
}

function initSummary() {
    articles = articles.map(function(article) {
        article.arch = "#" + article.title;
        return article;
    })
    myViewModel.obSummary(articles);

    $('_summary').map(function(idx, articleSummary) {
        var $articleSummary = $(articleSummary);
        $articleSummary.html($articleSummary.html().replace(/\n/g, "<br>"));
    });
}

var title = "大尾巴狼的自留地";
var description = "简单设计，复杂功能";
var articles = [{
    title: "目前状态",
    date: "",
    summary: "现就职于校车管理软件公司<a href='http://transfinder.com/'> transfinder </a> 从事web版管理系统开发",
    imgUrl: "url(assets/images/laptop-chrome.svg)"
}, {
    title: "学习笔记",
    date: "",
    summary: "平时学习过程中的<a href='https://github.com/rainbow494/blog.zuoshachi.com/blob/master/README.md'> 所思所想 </a>记录于此",
    imgUrl: "url(assets/images/pencil-js.svg)"
}, {
    title: "下班后",
    date: "",
    summary: "完善<a href='http://jiagou.io'> 架构.IO </a>架构文章搜索引擎",
    imgUrl: "url(assets/images/1448501262_heart.svg)"
}, {
    title: "语言学习",
    date: "",
    summary: "架构文章<a href='https://github.com/aaronz/arch'> 博文翻译</a>（合作项目）",
    imgUrl: "url(assets/images/github-notebook.svg)"
}]
init();