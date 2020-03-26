module.exports = [
    { regex: /\/abc/, dist: '/user/login' },
    { regex: /\/public(.*)/, dist: null },  // dist:null则使用.*的内容
    { src: '/', dist: '/user/login' }
]