// 終端機: tsc 第一次的ts.ts可轉變成js
(function () {
    // str這個參數是string類型的
    function sayHi(str) {
        return '您好啊' + str;
    }
    var text = '小甜甜';
    console.log(sayHi(text));
})();
// 總結:ts的文件中如果直接書寫js語法的代碼，那麼在html文件中直接引入ts文件，在谷歌的瀏覽器中是可以直接使用的
// 如果ts文件中有了ts的語法代碼，那麼就需要把這個ts文件編譯成js文件，在html文件中引入js的文件來使用
// ts文件中的函數中的形參，如果使用了某個類型進行修飾，那麼最終在編譯的js文件中是沒有這個類型的
