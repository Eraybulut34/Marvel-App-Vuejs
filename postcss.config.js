module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-media': {
            importFrom: [{
                    customMedia: { '--p': '(min-width: 980px)' }
                },
                {
                    customMedia: { '--t': '(min-width: 1270px)' }
                }
            ]
        }
    }
}