export default {
    // component里的data是一个函数，以returt的形式返回
    data() {
        return {
            count: 122
        };
    },
    methods: {
        fn: function() {
            alert('aaa');
        }
    },
    template: '<div>买家:{{count}}<button type="button" name="button" @click="fn">提交</button></div>'
}
