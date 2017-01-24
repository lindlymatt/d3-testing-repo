const express = require('express');
const app = express();

// Send all files through public.
app.use(express.static('public'));

// Send it all of the information we have from the join table.
const allInfo = require('./routes/allInfo');
app.use('/api/allInfo', allInfo);

app.listen(8000, () => {
  console.log('Server is up and accepting requests on Port 8000...');
});
