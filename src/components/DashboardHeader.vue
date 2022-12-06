<template>
    <div class="header">

       
            <el-col justify="space-evenly">

                    <template #icon />

            <template #title>
      <h1>
   
      </h1>
        </template>
            <template #content>
                <div class="text"><h2>Dashboard</h2></div>
            </template>
            
        <!-- </el-page-header> -->

            </el-col>
    </div>
  </template>

<script>
export default{
data () {
    return {
      expand: true
    }
  },
  methods: {
    open: function() {
      this.expand = !this.expand

    },
  }
}
</script>

<style scoped>

.header{
    background-color: #409EFF;
    height: 90px;
    border-radius: 2px;
}
.text{
    color: white;
}

.el-row{
margin: 30px;
}

.el-page-header{
    font-family: sans-serif;
    font-weight: bold;
}

.el-col{
    padding: 10px;
    margin: 10px;
}

</style>
