export default{
    // component里的data是一个函数，以returt的形式返回
    data() {
        return {
            count: 555
        };
    },
    methods: {
        fn: function() {
            alert('bbb');
        }
    },
    template: '<div>卖家:{{count}}<input type="button" value="提交" @click="fn" /></div>'
}
