const path = require("path");
module.exports = {
    // 我也不知道是什么，复制的
    chainWebpack: config => {
        config.plugin("define").tap(args => {
            args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
            return args;
        });
    },
    // 配置alias
    configureWebpack: () => ({
        resolve: {
            alias: {
                "@": path.resolve("./src")
            }
        }
    }),
};