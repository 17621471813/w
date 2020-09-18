<template>
    <div class="heard">
<div class="heaTop">
       <img src="../assets/picture/rexiao/top.jpg" alt="">
        <ul>
            <li><span>品牌</span><span>粥品香坊</span></li>
             <li>蜂鸟专送30分钟送达</li>
              <li>在线支付满28减5</li>
        </ul> 
     
       <div class="heaRig" >5个 <li class='el-icon-arrow-right'></li></div>
       
</div>
<div class="heaBut">
    <span>公告</span><span> 粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
   <li class='el-icon-arrow-right'></li>
</div>
<div class="conTop" >
           <div ref='fsl'  @click='fontCor(index)'  v-for= "(item, index) in porten" :key= "index" ><router-link   class='rout' :class="{ 'conCor': index == isCor }" 
           :to= "{path: item.to}">{{ item.name}}</router-link></div>
        </div>
       
       <router-view/>
      
    </div>

</template>


<script>
 
export default {

    data () {
          return{
            
             isCor: null,
                color: 'rout',
             porten:[
              {
                  name: '商品',
                  to: '/'
              },
              {
                  name: '评论',
                  to: '/ComMent'
              },
              {
                  name: '商家',
                  to: '/Store'
              }
          ]
          }
      },
   methods:{
        fontCor (index) {

            this.isCor = index;
            this.bottom = true;
        
        
        }
   }
  
}
</script>
<style lang="less">
@import '../assets/less/heard.less';
</style>