<template>
    <div class="heard">
       <my-heard/>
       <router-view/>
      
    </div>

</template>


<script>
import MyHeard from '@/components/MyHeard'
export default {
    components:{
        MyHeard
    }
}
</script>