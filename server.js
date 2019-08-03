const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();
const port = 5000;

app.get ('/api/users', (res, req) => {
  const users = [{id: 1, name: 'nagarjun'}, {id: 2, name: 'ramesh'}];
  res.json (users);
});

app.listen (port, () => console.log (`server running on the port:${port}`));
