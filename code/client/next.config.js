const typescriptsFileExtensions = /.tsx|.ts/

module.exports = {
    distDir: "dist",
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: typescriptsFileExtensions,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            })
        }
        return config
    },
    future: {
        webpack5: true,
    },
}