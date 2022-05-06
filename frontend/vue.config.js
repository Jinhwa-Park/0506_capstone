const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // api 요청이 있을 때 어디에서 처리할지 설정
    proxy: {
      '/api': {
        target: 'localhost:5000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    outputDir: '../public',
    // 배포 파일의 위치
  }
}