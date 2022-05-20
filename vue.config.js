module.exports = {
    devServer: {
      proxy: {
        "/api": {
          target: 'https://waba-sandbox.360dialog.io/',
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
  }
  
  //in store actions account.js


/*
Vue.http.headers.common['Access-Control-Allow-Origin'] = true;
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.options.emulateJSON = true;

Vue.http.options.credentials = true;
Vue.http.options.emulateHTTP = true;
*/