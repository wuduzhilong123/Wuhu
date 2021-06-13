/**
 * webpack打包配置文件
 * name:qqqqq
 * 2021-6-12
*/
const path=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
//自动清除dist 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
   //五大概念
   //入口
   entry:{
    index:'./src/page/index.html',
    login:'./src/page/login.html'
   },
   //出入
   output:{
       path:path.resolve(__dirname,'dist'),
       filename:'js/[name].js',
       publicPath:"./"
   },
   //loader解释器
   module:{
       rules:[
           //使用什么loader 对什么样的文件 进行解释
       {test:/\.css$/,use:[{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
    },'css-loader']},
       {test:/\.less$/,use:[{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
    },'css-loader','less-loader']},
       {    test:/\.(jpg|png|gif)$/,
            loader:'url-loader',
            options:{
                //hash随机32为字符，ext获取文件后缀
                name:'[hash:16].[ext]',
                //小于20kb base64压缩 大于20kb 不进行压缩
                limit:20*1024,
                esModule: false,
                outputPath:'img'
            },
           
       },
       {test:/\.html$/,loader:'html-loader'},
       {
        test:/\.(eot|svg|ttf|woff|woff2)$/, //配置iconfont文件打包
        loader:'file-loader',
        options:{
            outputPath:'fonts'
                }
         },
       {
        test: /\.js$/,
        loader: 'babel-loader',    // loader 编译es6为es5
        exclude: /node_modules/  // 排除
    }
       ]
   },
   //plugins 插件
   plugins:[
        new HtmlWebpackPlugin({
                template:'./src/page/index.html'   ,
                filename:'index.html',
                chunks:['index'] 
             }) ,
        new HtmlWebpackPlugin({
                template:'./src/page/login.html'   ,
                filename:'login.html',
                chunks:['login'] 
             }) ,
         new MiniCssExtractPlugin({
            filename: 'css/[name].css' // 输出到css文件夹里
         }),
         new OptimizeCssAssetsWebpackPlugin(),
         new CleanWebpackPlugin()
   ],
   //mode环境
   //development 本地开发环境
   //production线上生产环境 
   mode:'development',
   




    //开发服务配置
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // 启动服务器目录
        compress: true, // 启动gzip
        port: 8081,  // 端口  8080 80  8081 8082
        open: true, // 自动打开服务
        publicPath: '/', // 静态资源查找路径
        openPage: 'index.html', // 打开的页面
    },
    target: 'web', // 目标是浏览器
    
}