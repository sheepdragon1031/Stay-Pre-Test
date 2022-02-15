Stay Pre-Test

  測驗內容
  以下測驗內容請使用 JavaScript ES5+ 實作。
*   實作 Fibonacci number (費式數列)
  建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci
  sequence 中的第幾個數字的值。
```javascript
fibonacci(0) // 0
fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3
```
* 使用 Linked List 實作 Stack
  實作需包含以下方法。
  push() : 添加新元素。
  pop()：移除元素並返回被移除的元素。
  size()：返回所有元素數量。
  ```javascript
  const myStack = new Stack()
  myStack.push(1)
  myStack.push(2)
  myStack.push(3)
  myStack.pop() // 3
  myStack.size() // 2
  ```
* 實作 Data Transformer
  將下列輸入資料整合成期望的輸出結果。
  輸入資料：
  
```javascript
const userIds = [‘U01’, ‘U02’, ‘U03’]
const orderIds = [‘T01’, ‘T02’, ‘T03, ‘T04’]
const userOrders = [
{ userId: ‘U01’, orderIds: [‘T01’, ‘T02’] },
{ userId: ‘U02’, orderIds: [] },
{ userId: ‘U03’, orderIds: [‘T03’] },
]
const userData = { ‘U01’: ‘Tom’, ‘U02’: ‘Sam’, ‘U03’: ‘John’ }
const orderData = {
‘T01’: { name: ‘A’, price: 499 },
‘T02’: { name: ‘B’, price: 599 },
‘T03’: { name: ‘C’, price: 699 },
‘T04’: { name: ‘D’, price: 799 },
}
輸出結果：
const result = [
{
user: { id: ‘U01’, name: ‘Tom’ },
orders: [
{ id: ‘T01’, name: ‘A’, price: 499 },
{ id: ‘T02’, name: ‘B’, price: 599 },
],
},
...,
]
```
* 擇一實作 Debounce 或 Throttle
  debounce 是在delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。
  throttle 在觸發後的 timeout 時間內只會執行一次。
  建立函式 debounce 或 throttle 帶入參數如下範例：
  ```javascript
  const debounceFunc = debounce(func, delay)
  const throttleFunc = throttle(func, timeout)
  ```
* 實作 React Custom hook
  使用 Create React App 架設，請依照下列登入畫面範例完成userForm 實作。
  當有 errors 時 handleSubmit 要被 by pass。
