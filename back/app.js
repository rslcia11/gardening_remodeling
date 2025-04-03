var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
// Importar el paquete cors
var cors = require("cors")
var formRouter = require("./routes/form")

var app = express()

// Configurar CORS - IMPORTANTE: debe ir antes de otras configuraciones de middleware
// para manejar correctamente las solicitudes preflight OPTIONS
app.use(
  cors({
    // Permitir solicitudes desde el frontend
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    // Métodos HTTP permitidos
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // Cabeceras permitidas
    allowedHeaders: ["Content-Type", "Authorization"],
    // Permitir cookies en solicitudes cross-origin
    credentials: true,
  }),
)

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use("/form", formRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app

