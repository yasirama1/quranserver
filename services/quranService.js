const Api = require('../services/ApiQuran')

module.exports = (no) => {
		return Api().get('surah/'+ no)
}

// module.exports = () => {
// 	function getSurahList () {
// 		return Api().get('surah')
// 	}

// 	function getSurah(no) {
// 		return Api().get('surah/'+ no)
// 	}
// }
