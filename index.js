const express = require('express') // express 모듈을 가져옴
const app = express() // 새 앱을 만듦
const port = 5000 // 백 서버 포트 설정

const bodyParser = require('body-parser');
const { User } = require("./models/User"); // 유저 모델 가져오기 (회원가입을 위함)

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); // 바디파서가 클라이언트에서 오는 정보를 분석해서 가져올 수 있도록

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://YUZ:mongo123@myboilerplate.p9iqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => { // 루트 디렉토리에 라우트
  res.send('Hello World!~~안녕하세요 ~ 야호~ 8강까지 했음') // 출력
})


// 회원가입 라우트
app.post('/register', (req, res) => {

    // 회원가입 시 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다


    const user = new User(req.body) // json 객체가 들어 있음 (bodyparser 이용)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})



app.listen(port, () => { // 포트(5000)에서 실행
  console.log(`Example app listening on port ${port}`)
})