<template>
  <div class="homeContainer">
    <!-- header -->
    <HeaderContainer></HeaderContainer>

    <!-- homeLeft -->
    <HomeLeftContainer></HomeLeftContainer>

    <!-- homeRight -->
    <HomeRightContainer></HomeRightContainer>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderContainer from '@/components/header/header.vue'
import HomeLeftContainer from '@/components/home/homeLeft.vue'
import HomeRightContainer from '@/components/home/homeRight.vue'

export default {
  name: 'Home',
  components: {
    HeaderContainer, HomeLeftContainer, HomeRightContainer
  }
}
</script>


<style scoped lang="less" >
.homeContainer {
  height: 100%;
 
}
</style>
