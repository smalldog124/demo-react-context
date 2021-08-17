# วิธีใช้งาน redux
## install
```
  npm i react-redux
  npm i redux
  npm i redux-devtools-extension
  npm i redux-thunk
```

## config 
config middleware file `src/configureStore.js`
ใส่ Provider ให้ใน `src/index.js` เพื่อให้เป็น global store

## สร้างไฟล์ของ redux
src/redux/reducers.js เป็นการ combineReducers ให้
src/redux/action.js มีฟังก์ชันอะไรให้ใช้บ้าง
src/redux/reducer.js ทำงานกับค่า state
