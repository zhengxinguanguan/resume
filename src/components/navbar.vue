<template>
  <div class="nav">
    <ul>
      <router-link to="/page1" tag="li" active-class="active"><a href="javascript:;" >ECharts</a></router-link>
      <router-link to="/page2" tag="li" active-class="active"><a href="javascript:;" >page2</a></router-link>
      <router-link to="/resume" tag="li" active-class="active"><a href="javascript:;" >个人简历</a></router-link>
    </ul>
  </div>
</template>

<style scoped>
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
.nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
.nav ul li{width:1.46rem;height:0.6rem; float:left;}
.nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
.nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}
</style>
