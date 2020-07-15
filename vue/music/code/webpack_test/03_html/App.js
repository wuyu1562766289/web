import imgSrc from './myGir.jpg';
var app = {
    template: `
        <div>
            <img :src="imgSrc" />
        </div>
    `,
    data() {
        return {
            imgSrc: imgSrc
        }
    },
};

export default app;