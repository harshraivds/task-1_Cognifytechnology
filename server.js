const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { fname, lname, dob, mobile, email, gender, education, textArea } = req.body;
    res.json({
        message: `Thank you for submitting the form, ${fname} ${lname}. Your email address is ${email}. `
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
