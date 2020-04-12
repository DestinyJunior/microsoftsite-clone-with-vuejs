<template>
    <div>
        <img v-if="img" :src="require(`../assets/img/${imgSrc}`)"  alt="title" />
        <h3><slot>{{title}}</slot></h3>
        <p>
            <slot>{{content}}</slot>
        </p>
        <a href="#"> {{btnText}} <i class="fas fa-chevron-right"></i></a>
    </div>
</template>

<script>
export default {
    name: 'mycards',
    data(){
        return {
            baseUrl: '@/assets/img/',
            img: Boolean,
        }
    },
    props: {
        // img: {
        //     type: Boolean,
        //     default: false,
        // },
        imgSrc: {
            type: String,
            required: true
        },
        title: {
             type: String,
            required: true  
        },
        content: {
            type: String,
            required: true  
        },
        btnText: {
            type: String,
            required: true
        }
    },
    created(){        
        console.log(this.imgSrc.toString());
    },
    mounted() {
        // if(this.imgSrc != null){
        //          var Img = document.getElementById('img');
        //         Img.src = '../assets/img/card1.png';
        // }
       
    },
}
</script>

<style scoped>
    
</style>