# NEMV
I'll use NEMV(Node.js, Express.js, MongoDB, Vue.js) to create the entire website!


# front
fe> yarn serve
localhost:8081

# back
be> npm start
localhost:3000

## config 파일 세팅 방법
```javascript
module.exports = {
    dbUrl: 'mongod://localhost:27017/nemv'
}

```
이런식으로 디비 연결 문자열을 작성해야 웹서버가 정상 구동됨!
