const express = require('express') // express 모듈을 가져옴
const app = express() // 새 앱을 만듦
const port = 5000 // 백 서버 포트 설정

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://YUZ:<mongo123>@myboilerplate.p9iqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => { // 루트 디렉토리에
  res.send('Hello World!') // 출력
})

app.listen(port, () => { // 포트(5000)에서 실행
  console.log(`Example app listening on port ${port}`)
})