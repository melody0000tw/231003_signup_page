# 231003_signup_page

兩頁式註冊與登入頁面

1. 輸入帳號密碼進行註冊
![image](https://github.com/melody0000tw/231003_signup_page/assets/141668860/8a07a399-bdcc-4e54-a10a-9f9da678cbce)

2. 註冊完成後，提交sign up，瀏覽器會透過axios向hexschool的伺服器比對輸入內容格式是否正確
     a. 若輸入正確，則顯示「帳號註冊完成」，並跳轉至登入頁面
    ![image](https://github.com/melody0000tw/231003_signup_page/assets/141668860/ccef3ea3-d66a-4b2a-af94-509de51121a8)
    b. 若帳號已被使用，則顯示「帳號已被使用」
   ![image](https://github.com/melody0000tw/231003_signup_page/assets/141668860/90992717-eba7-4d47-85b2-230717df44b9)
   
3. 進入登入頁面，輸入註冊的帳號密碼，瀏覽器會透過axios提交輸入內容，與前面的註冊內容進行比對
     a. 若正確則會跳出「登入成功」
     ![image](https://github.com/melody0000tw/231003_signup_page/assets/141668860/8e12b986-2d5c-4cb9-a1e9-c5bef235e0cd)
     b. 若錯誤則會跳出
    ![image](https://github.com/melody0000tw/231003_signup_page/assets/141668860/f879ccef-54ec-4e3e-ac71-62e13d668aeb)
   
4. 同時也可利用右邊的轉換按鈕轉換登入與註冊介面
