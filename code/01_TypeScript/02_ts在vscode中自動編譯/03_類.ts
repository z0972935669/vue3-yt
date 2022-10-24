// ts中書寫js中的類，演示效果
(()=>{
    // 定義一個接口
    interface IPerson {
        firstName: string // 姓氏
        lastName: string // 名字
    }
    // 定義一個類型
    class Person {
        // 定義公共的字段(屬性)
        firstName: string // 姓氏
        lastName: string // 名字
        fullName: string // 姓名
        // 定義一個構造器函數
        constructor(firstName: string, lastName: string) {
            // 更新屬性數據
            this.firstName = firstName
            this.lastName = lastName
            // 姓名
            this.fullName = this.firstName + '_' + this.lastName
        }
    }
    // 定義個函數
    function showFullName(person: IPerson) {
        return person.firstName + '_' + person.lastName
    }

    // 實例化對象
    const person = new Person('諸葛', '孔明')
    console.log(showFullName(person));
})()