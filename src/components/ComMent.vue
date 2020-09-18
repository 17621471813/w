<template>
    <div class="ComMent">
          <div class="conRight">
           <ul>
               <li>
                   <span>服务态度</span>
                   <span>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   </span>
                   <span>4.1</span>
                   </li>
               <li>
                   <span>商品评分</span>
                   <span>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   <li class= 'el-icon-star-off'></li>
                   </span>
                   <span>4.3</span>
                   </li>
               <li>
                   <span>送达时间 </span><span>38分钟</span>
               </li>
           </ul>
       </div>
       <div class="conLeft">
           <dl>
               <dt>4.2</dt>
               <dd>综合评分</dd>
                <dd>高于周边商家69.2%</dd>
           </dl>
       </div>
       <div class="conBot">
           <div class="grey"></div>
           <div class="button">
                 <el-button class='butCor' :class="{'blue': index == cor }"
                  @click='butCor(index)' v-for="( item, index) in botList" :key='index' size="mini">
                     <router-link class="rouLin"  :to="{name: item.to}" >{{ item.name }}<span>{{ item.num }}</span></router-link>
                 </el-button>
                  

                     
           </div>
           <div class="select" @click='select' >
               <li  :class="{'green': liCor }" class='el-icon-circle-check'></li>
               <span>只看有内容评论</span>
           </div>
            
       </div>
       <div class="selCon">
           <router-view/>
       </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return{
            liCor: false,
            cor: null,

            botList:[
                {
                    name: '全部',
                    num: 24,
                    to: 'ConSelect'
                },
                {
                    name: '满意',
                    num: 18,
                    to: 'ConGood'
                },
                {
                    name: '不满意',
                    num: 6,
                    to: "ConBad"
                }
            ]
        }
    },
    methods:{
        butCor (index) {
                      this.cor = index;
        },
        select () {
                   this.liCor = !this.liCor;
        }
    },
     created () {
            this.cor = 0;
        } 
}
</script>

<style lang="less">
 @import '../assets/less/ComMent.less';
</style>