// vue.config.js
let path = require('path');
let stylePath = path.resolve(__dirname, 'common.less') // common/common.less是less的路径
module.exports = {
	transpileDependencies:['@dcloudio/uni-ui'],
	css: {
		loaderOptions: {
			less: {
				globalVars: {
					"hack": `true; @import "${stylePath}"`
				}
			}
		}
	},
}