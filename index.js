const express = require('express');
const app = express();
app.use(express.json());

let students = [];


app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id === parseInt(id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.send('Student added successfully');
});


app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if (studentIndex === -1) return res.status(404).send('Student not found');
    students[studentIndex] = req.body;
    res.send('Student updated successfully');
});

app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    students = students.filter(s => s.id !== parseInt(id));
    res.send('Student deleted successfully');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/*

ex1:website

<!Doctype html> 
<html> 
<head> 
<title> 
www.first exercis.com 
</title> 
</head> 
<body style="background-color:powderblue;"> 
<font color="#0000FF" size="5"> 
</font> 
<br> 
<font face = "Regular 400" size="5"> 
<img src="" width="100px"> 
</font> 
<font face="cinzel" size="4"> 
<a href="#">Home</a> 
<a href="#">videos</a> 
<a href="#">Blog</a> 
<a href="#">About</a> 
</font> 
<br><br><br><br> 
<br> 
<br> 
<h1 align="center"> 
<font color="#F0B27A" size="9"> 
Welcome to Webpage<br/> 
</font> 
Simple Web Page 
</h1> 
<h3 align="center"> 
<font face="Lato" color="red" size="3"> 
Only Using Simple HTML code 
</font> 
<br><br><br><br> 
<div style="padding-left:600px"> 
<table> 
<tr> 
<th>views</th> 
</tr> 
<tr> 
<td>100000</td> 
</tr> 
</table> 
</div> 
<marquee> 
<b><i> 
Thanks for Watching 
</i><b> 
</marquee> 
<hr width="1500px"> 
<center> 
<b> 
<font face="cinzel" size="4"> 
<a href="#">About us| 
<a href="#">Contact us| 
<a href="#">Privacy Policy| 
<a href="#">Terms| 
<a href="#">Sitemap| 
<a href="#">Report a Bug| 
<a href="#">FAQ Partners| 
<a href="#">Consultant| 
<a href="#">Ideas| 
<a href="#">Certifications|</a> 
<br/><br/> 
<font color="#FF0000"> 
Copyrights Reserved @2023 
</font> 
</font> 
</b> 
</center> 
</body> 
</html>

ex2:tables
<table border="4" > 
<caption>Student Records</caption> 
<tr> 
<th >Name</th> 
<th>Roll No</th> 
<th>Age</th> 
<th>WAD marks</th> 
<th>CN marks</th> 
<th colspan="2">Total</th> 
</tr> 
<tr> 
<td>Kumar</td> 
<td>1</td> 
<td>25</td> 
<td>95</td> 
<td>99</td> 
<td>194</td> 
<td>92.0</td> 
</tr> 
<tr> 
<td>Banu</td> 
<td>2</td> 
<td>35</td> 
<td>75</td> 
<td>90</td> 
<td>165</td> 
<td>77.5</td> 
</tr> 
<tr> 
<td>Sri</td> 
<td>3</td> 
<td>18</td> 
<td>95</td> 
<td>100</td> 
<td>195</td> 
<td>72.5</td> 
</tr> 
</table> 
</body> 
</html>

ex3:form

<!Doctype> 
<html> 
<head> 
<title>Cake Order Page</title> 
</head> 
<body> 
<form> 
<lable>Name</lable> 
<input type="text" name="Name" size="20"/> 
<br><br> 
<lable>Phone no:</lable> 
<input type="text" name="Phone no" size="10"/> 
<br><br> 
<lable>Delivery Mode</lable><br><br> 
<input type="radio" name="delivery mode"/>Door Delivery<br><br> 
<input type="radio" name="delivery mode"/>Pick up<br><br> 
<lable>Address</lable><br> 
<textarea cols="80" rows="5" value="address">

*/