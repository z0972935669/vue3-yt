// ts中書寫js中的類，演示效果
(() => {
    // 定義一個類型
    class Person {
        // 定義一個構造器函數
        constructor(firstName, lastName) {
            // 更新屬性數據
            this.firstName = firstName;
            this.lastName = lastName;
            // 姓名
            this.fullName = this.firstName + '_' + this.lastName;
        }
    }
    // 定義個函數
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 實例化對象
    const person = new Person('諸葛', '孔明');
    console.log(showFullName(person));
})();
