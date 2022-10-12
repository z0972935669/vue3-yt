// 類型註解: 是一種輕量級的為函數或者變量添加的約束
(() => {
    // str是string類型的
    function showMsg(str) {
        return '床前明月光,' + str;
    }
    // let msg = '疑是地方霜'
    // msg是一個數組
    let msg = [10, 20, 30];
    // 智能的錯誤提示信息
    console.log(showMsg(msg));
})();
