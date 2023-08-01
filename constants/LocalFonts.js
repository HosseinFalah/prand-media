import LocalFont from "next/font/local";

const yekanFont = LocalFont({
    src: [
        {
            path:'../public/font/YekanBakh-Light/YekanBakh-Light.woff',
            weight: '300',
            style: 'normal'
        },
        {
            path:'../public/font/YekanBakh-Regular/YekanBakh-Regular.woff',
            weight: '400',
            style: 'normal'
        },
        {
            path:'../public/font/YekanBakh-Medium/YekanBakh-Medium.woff',
            weight: '500',
            style: 'normal'
        },
        {
            path:'../public/font/YekanBakh-Bold/YekanBakh-Bold.woff',
            weight: '700',
            style: 'normal'
        },
        {
            path:'../public/font/YekanBakh-Heavy/YekanBakh-Heavy.woff',
            weight: '800',
            style: 'normal'
        },
        {
            path:'../public/font/YekanBakh-Fat/YekanBakh-Fat.woff',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: "--font-yekan",
    style: "normal",
    display: "block",

})

export default yekanFont;