<template>

    <div class="errorList">

        <div v-for="bees in b" :key="bees.id">
        
            <div class="errorListBox">
               
                <div class="space0">
                </div>
                <div class="noOfErrors">
                    <el-button type="info" round>{{bees['id']}}</el-button>
                </div>
                <div class="space1">
              </div>

                <div class="errorClass">
                    <h4 @click="onAboutClick(bees.id)">Error {{bees['id']}}</h4>    
                </div>
                <div class="space2">
                </div>
                <div class="errorTimestamp">
                    <h4>{{bees['id']}}/{{bees['id']}}/{{bees['id']}}{{bees['id']}}{{bees['id']}} </h4>    
                </div>
                <div class="space3">
                </div>
                <div class="percentageCompletion">
                    <h4>{{bees['id']}} </h4>    
                </div>
            </div>
            <br>
        </div>

    </div>
    
    
</template>
<script setup>

import {onMounted, ref} from 'vue';

import router from '../router/index';


let b=ref(); 




const onAboutClick=(id)=>{
    router.push({ name:'errorLog', params: {errorDetails: id } })
    
}

let errId=ref(2);
  await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    b.value = data; 
  });


</script>
<style scoped>
    h2{
        
        color: black;
        font-size: large ;
        font-family: sans-serif;
    }
    .head{
        box-sizing: border-box;
        background-color: whitesmoke;
        padding: 0.3%;
        border-radius: 2px;
    }
    .errorListBox{
        font-family: sans-serif;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        background-color: white;
        border-radius: 2px;
        font-size: small;
        box-shadow: 1px 1px 5px 0px lightblue;
    }
    .space0{
        width: 4%;
    }
    .space1{
        width: 10%;
    }

    .space2{
        width: 55%;
    }
    .space3{
        width: 7%;
    }

    .noOfErrors{
        background-color: white;
        box-sizing: border-box;
        padding: 10px;
        justify-self: space-between;
        border-radius: 10px;
    }
</style>