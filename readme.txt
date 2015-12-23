这次的任务我运用的事nodejs的express框架以及jade模版进行渲染，在逻辑方面用的jquery的事件代理机制.

准备工作:安装全局的node
		安装全局的ruby并且install sass模块
		由于我的样式表用的是sass预编译机制，所以在sass文件夹下打开终端运行sass 1.scss index.css  将编译成css格式(这里我已经编译成功)
		
在根目录‘知乎笔试题’下运行node express命令,打开浏览器的localhost:8000端口即可运行
模拟初始数据的文件在data／目录下  jade视图在view／目录下    样式表在sass/目录下