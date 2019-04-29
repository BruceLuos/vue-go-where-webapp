<template>
    <div>
    <city-header>城市选择</city-header>
    <city-search></city-search>
    </div>
</template>
<<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch
    }
}
</script>


<<style lang="stylus" scoped>
    
</style>