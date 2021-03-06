const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

// call connectDB
connectDB();

//Initial Middleware
app.use(express.json({ extended: false }));

// // Test route index
// app.get('/', (req, res) => {
//    res.json('API is Works!');
// });

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/room", require("./routes/api/room"));
app.use("/api/time", require("./routes/api/time"));
app.use("/api/trx", require("./routes/api/trx"));
// app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req ,res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// ;  })
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on cusss port ${PORT}`);
});
