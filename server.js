const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();
const port = 5000;

mongoose.connect (
  'mongodb://nagarjun:oneplus5@ds157857.mlab.com:57857/mydatabase'
);
mongoose.connection.once ('open', () => {
  console.log (`database is connected!`);
});

app.get ('/api/users', (req, res) => {
  const users = [{id: 1, name: 'nagarjun'}, {id: 2, name: 'ramesh'}];
  res.send (users);
});

app.listen (port, () => console.log (`server running on the port:${port}`));
