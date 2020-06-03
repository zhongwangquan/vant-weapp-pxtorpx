# vant-weapp-pxtorpx

>将vant weapp 小程序 ui组件库中将px单位转换成rpx，并且保留其他文件
> git clone https://github.com/youzan/vant-weapp.git
> git checkout master

> cd dist (dist下组件则为需要转换的组件)

>src: 未转换的组件

>dist: 转换后的组件

执行：npm run dev


```javascript
示例： wxss文件中
{
  font-size: 2px;
}

转换后： 
{
  font-size: 4rpx;
}
```

