<template>
    <div class="footer">
      
        <div class="content">
              <!-- 内容详情 -->
             
           <div  class="conti" v-if= 'show'>
               <div  class='cont'>{{ cont }}</div>
           <div class="wrapper">
                <dl  class='details' v-for='(itsh, index) in show.children' :key= 'index' >
        
                <dd >
                    <ul >
                   
                        <li ref='name' >{{ itsh.name}}</li>
                        <li ref='flavor' class='fontCor' >{{ itsh.flavor}}</li>
                        <li  ref='sell'  class = 'fontCor'><span>月售{{itsh.sell}}份</span> <span>好评率{{ itsh.hegtOP }} %</span> </li>
                        <li ref='money' >￥{{ itsh.money}}</li>
                    </ul>
                     <div class='add' > 
                          <li ref='cla'  class='el-icon-remove-outline' @click='Cut(index)'></li>
                    <span ref='da'></span>
                          <li class='el-icon-circle-plus-outline' @click='Add(index)'></li></div>
                    <img :src= 'itsh.img' alt="">
                    
                </dd>
            </dl>
      </div>
           </div>
           <!-- 选择套餐 -->
            <dl class='kind'  v-for="(kin, index) in kindlist" :key='index' @click='changShow(kin, index)' >
                <dd :class="{ 'kindCor': index == isShow }"><div>{{ kin.tittle }}</div></dd>
            </dl>
          
        </div>
        <div class="settlement " :class="{ 'but': but}">
            <div  v-if='settle1' class="start">￥{{ dsb }}元起送</div>
            <div @click ='alert' v-if='settle2' class="settle"> 去结算</div>
             <div class="money">
                <span>￥{{ money }}</span>     
                <span>另需配送费￥4元</span>
               
            </div>
            <div v-if ='alShow' class="alert">
                <div>  本次消费{{ money }}元</div>
                <button @click='cancle'>确定</button>
            </div>
           <div class="shopping">
                    <li  class='el-icon-shopping-cart-full'></li>
                    <span v-if='Nub' >{{ Nub }}</span>
                </div>
        </div>
    </div>
</template>


<script>

export default {
 
    data () {
        return{
            alShow: false,
            settle1: true,
            settle2:false,
            dsb: 20,
            money: 0,
            numb: null,
            cut: null,
            but: null,
            isCor: null,
            isShow: 0,
            show:null,
            Nub: null,
            color: 'rout',
         
          porten: [
              {
                  name: '商品',
                  to: '/'
              },
              {
                  name: '评论',
                  to: '/Comment'
              },
              {
                  name: '商家',
                  to: 'Commodity'
              }
          ],
        
          kindlist:[{
               tittle: '热销榜',
               children: [
                   {
                   
                       img: require('../assets/picture/rexiao/pidan.jpg'),
                       name: '皮蛋瘦肉粥',
                       flavor: '咸粥',
                       sell: 229,
                       hegtOP: '100',
                       money: '10'
                   }, {
                       img: require('../assets/picture/rexiao/biandm.jpg'),
                       name: '扁豆焖面',
                       sell: '188',
                       hegtOP: '96',
                       money: '14'
                   }, {
                       img: require('../assets/picture/rexiao/conghuab.jpg'),
                       name: '葱花饼',
                       sell: '124',
                       hegtOP: '85',
                       money: '10'
                   }, {
                       img: require('../assets/picture/rexiao/niurb.jpg'),
                       name: '牛肉馅饼',
                       sell: '114',
                       hegtOP: '91',
                       money: '14'
                   }, {
                       img: require('../assets/picture/rexiao/pigtie.jpg'),
                       name: '招牌猪肉白菜锅贴/10个',
                       sell: '101',
                       hegtOP: '78',
                       money: '17'
                   }, {
                       img: require('../assets/picture/rexiao/nanguaz.jpg'),
                       name: '南瓜粥',
                       flavor: '甜粥',
                       sell: '91',
                       hegtOP: '100',
                       money: '9'
                   }, {
                       img: require('../assets/picture/rexiao/hongdouz.jpg'),
                       name: '红豆薏米美肤粥',
                       flavor: '甜粥',
                       sell: '86',
                       hegtOP: '100',
                       money: '12'
                   },{
                       img: require('../assets/picture/rexiao/babaoj.jpg'),
                       name: '八宝酱菜',
                       sell: '84',
                       hegtOP: '100',
                       money: '4'
                   }
               ]
          },{
             tittle: '单人精彩套餐',
              children: [
                   {
                   
                       img: require('../assets/picture/onePeople/redDates.jpg'),
                       name: '红枣山药粥套餐',
                       sell: 17,
                       hegtOP: '100',
                       money: '10',
                       hMoney: 36,
                   }]
          },{
            tittle: '冰爽特品限时特惠',
              children: [
                   {
                       img: require('../assets/picture/iceDrink/vcO.jpg'),
                       name: 'VC无限果汁',
                       sell: 17,
                       hegtOP: 100,
                       money: 10,
                       hMoney: 36,
                   }]
          },{
             tittle: '精选热菜',
              children: [
                   {
                       img: require('../assets/picture/hot/fishYellow.jpg'),
                       name: '香酥黄金鱼/3条',
                       sell: 15,
                       hegtOP: 100,
                       money: 11
                   }, 
                   {
                       img: require('../assets/picture/hot/shoushi.jpg'),
                       name: '手撕包菜',
                       sell: 29,
                       hegtOP: '100',
                       money: 16
                   },
                    {
                       img: require('../assets/picture/hot/wwc.jpg'),
                       name: '娃娃菜炖豆腐',
                       sell: 43,
                       hegtOP: '92',
                       money: 17
                   }]
          },{
             tittle: '爽口凉菜'
             ,
             children: [
                   {
                       img: require('../assets/picture/coldDish/babao.jpg'),
                       name: '八宝酱菜',
                       sell: 84,
                       hegtOP: 100,
                       money: 4
                   },
                    {
                       img: require('../assets/picture/coldDish/Cucumber.jpg'),
                       name: '拍黄瓜',
                       sell: 28,
                       hegtOP: 100,
                       money: 9
                   }]
          },{
            tittle: '精选套餐',
            children: [
                   {
                       img: require('../assets/picture/jingxuan/pidan.jpg'),
                       name: '皮蛋瘦肉粥套餐',
                       sell: 12,
                       hegtOP: 100,
                       money: 37
                   },
                    {
                       img: require('../assets/picture/jingxuan/redBean.jpg'),
                       name: '红豆薏米粥套餐',
                       sell: 3,
                       hegtOP: 100,
                       money: 37
                   }]
          },{
            tittle: '果拼果汁',
            children: [
                   {
                       img: require('../assets/picture/fruitDrink/jiadb.jpg'),
                       name: '加多宝',
                       sell: 7,
                       hegtOP: 100,
                       money: 6
                   },
                    {
                       img: require('../assets/picture/fruitDrink/migua.jpg'),
                       name: '蜜瓜圣女萝莉杯',
                       sell: 1,
                       hegtOP: 100,
                       money: 6
                   },
                    {
                       img: require('../assets/picture/fruitDrink/vc.jpg'),
                       name: 'VC无限橙果汁',
                       sell: 15,
                       hegtOP: 100,
                       money: 8,
                       hMoney: 10,
                   }]
          },{
            tittle: '小吃主食',
            children: [
                   {
                   
                       img: require('../assets/picture/srteetFood/huta.jpg'),
                       name: '糊塌子',
                       sell: 80,
                       hegtOP: 93,
                       money: '10'
                   }, {
                       img: require('../assets/picture/srteetFood/biandm.jpg'),
                       name: '扁豆焖面',
                       sell: '188',
                       hegtOP: '96',
                       money: '14'
                   }, {
                       img: require('../assets/picture/srteetFood/conghuab.jpg'),
                       name: '葱花饼',
                       sell: '124',
                       hegtOP: '85',
                       money: '10'
                   }, {
                       img: require('../assets/picture/srteetFood/niurb.jpg'),
                       name: '牛肉馅饼',
                       sell: '114',
                       hegtOP: '91',
                       money: '14'
                   }, {
                       img: require('../assets/picture/srteetFood/pigtie.jpg'),
                       name: '招牌猪肉白菜锅贴/10个',
                       sell: '101',
                       hegtOP: '78',
                       money: '17'
                   }
               ]
          }
          ,{
            tittle: '特色粥品',
            children:[
                {
                       img: require('../assets/picture/tesezhou/hongdouz.jpg'),
                       name: '红豆薏米美肤粥',
                       flavor: '甜粥',
                       sell: '86',
                       hegtOP: '100',
                       money: '12'
                },
                 {
                       img: require('../assets/picture/tesezhou/hongzhao.jpg'),
                       name: '红枣山楂糙米粥',
                       sell: 81,
                       hegtOP: 91,
                       money: 10
                },
                 {
                       img: require('../assets/picture/tesezhou/nanguaz.jpg'),
                       name: '南瓜粥',
                       flavor: '甜粥',
                       sell: 91,
                       hegtOP: '100',
                       money: 9
                },
                 {
                       img: require('../assets/picture/tesezhou/pidan.jpg'),
                       name: '皮蛋瘦肉粥',
                       flavor: '咸粥',
                       sell: 229,
                       hegtOP: '100',
                       money: 10
                },
                 {
                       img: require('../assets/picture/tesezhou/tianyuan.jpg'),
                       name: '田园蔬菜粥',
                       flavor: '咸粥',
                       sell: 33,
                       hegtOP: '100',
                       money: 10
                },
                 {
                       img: require('../assets/picture/tesezhou/xianshu.jpg'),
                       name: '鲜蔬菌菇粥',
                       flavor: '咸粥',
                       sell: '56',
                       hegtOP: '100',
                       money: 11
                }
            ]
          }
          ]
        }
    },

    methods:{
       
        changShow(kin,index) {
             this.show = kin,
             this.cont = kin.tittle,
             this.isShow = index
        },
        Cut(index) {
            this.indexShow = index;
          this.Nub --;
           const firstMoney=  Number(this.$refs.money[index].innerText.slice(1,3)),
            lastMoney = Number( this.money);
              this.money = lastMoney - firstMoney;
           this.$nextTick(function () {
             let z =  Number(this.$refs.da[index].innerText) - 1;
             this.$refs.da[index].innerText = z ;
              this.numb = z;
              
             if(this.numb == 0){
                  this.$refs.da[index].innerText = '';
           this.$refs.cla[index].className =  'el-icon-remove-outline'
              
             }
          });
           if(this.money< 20){
              this.settle1 = true;
              this.settle2  = false;
            this.dsb = 20 - this.money;
          }
        },
        Add(index) {
            this.Nub ++;  
            const firstMoney=  Number(this.$refs.money[index].innerText.slice(1,3)),
            lastMoney = Number( this.money);
              this.money = firstMoney +lastMoney;
          this.$nextTick(function () {
             let z =  Number(this.$refs.da[index].innerText) + 1;
             this.$refs.da[index].innerText = z ;
             this.numb = z;
          if(this.numb){
           this.$refs.cla[index].className = 'cut' +' '+ 'el-icon-remove-outline'
         
     }
          });
       
          if(this.dsb > this.money){
              this.dsb -= this.money
          }else{
              this.settle1 = false;
              this.settle2  = true;
          }
        },
        alert () {
            this.alShow = true;
        },
        cancle () {
            this.alShow = false;
        }
      
    },
    created() {
        this.show = this.kindlist[0],
        this.cont = '热销榜'
       this.but = this.$store.state.name;
    },
  
   
   
   
}
</script>

<style lang="less">
  @import '../assets/less/content.less';
</style>
