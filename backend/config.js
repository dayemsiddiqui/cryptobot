module.exports = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/woxcut',
  port: process.env.PORT || 3000,
}