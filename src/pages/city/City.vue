<template>
    <div>
    <city-header>城市选择</city-header>
    <city-search></city-search>
    <city-list 
    :cities="cities" 
    :hot="hotCities"
    :letter="letter"
    
    ></city-list>
    <city-alphabet 
        :cities="cities"
        @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>
<<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res = res.data
            // 如果请求成功也就是true的时候传json数据
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
            // console.log(letter)
        }
    },
    mounted() {
        this.getCityInfo()
    }
}
</script>


<<style lang="stylus" scoped>
    
</style>