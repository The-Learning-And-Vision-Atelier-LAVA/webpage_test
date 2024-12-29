// shims-vue.d.ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// 也可以为其他类型的文件添加类似的声明
declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

// declare module '*.gif' {
//     const value: string;
//     export default value;
// }
//
// declare module '*.svg' {
//     import type { DefineComponent } from 'vue';
//     const component: DefineComponent<{}, {}, any>;
//     export default component;
// }