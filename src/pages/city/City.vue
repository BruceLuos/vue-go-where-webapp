<template>
    <div>
    <city-header>城市选择</city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
            hotCities: []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res = res.data
            // 如果接收到请求也就是true的时候传json数据
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        }
    },
    mounted() {
        this.getCityInfo()
    }
}
</script>


<<style lang="stylus" scoped>
    
</style>