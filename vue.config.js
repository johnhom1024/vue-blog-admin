module.exports = {
  "publicPath": "/admin/",
  "devServer": {
    "historyApiFallback": {
      "rewrites": [
        {
          "from": {},
          "to": "/admin/index.html"
        }
      ]
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}