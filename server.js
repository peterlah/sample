const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use(express.static('public'));
app.use(express.json());

app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.json({ message: `안녕하세요, ${name}님!` });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
