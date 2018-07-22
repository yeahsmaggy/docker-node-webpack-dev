<template>
   <div>

    <Navbar/>
    


     <form action="/api/pages" method="post">

      <label for="title">Title:
        <input type="text" name="title" value="">
      </label>
  

      <label for="content">Content:
        <textarea type="text" name="content" value=""></textarea>
      </label>


      <input type="submit" name="submit" value="submit">
    </form>



       <div class="container">
           <div class="row">
               <div class="col-12">
                    <p>A novel way to do a city walk</p>
               </div>
           </div>
       </div>
              <div class="container">
           <div class="row">
                <Page/>

               <div class="col-12">
                       <li v-for="map in maps">
                           {{map.name}}
                       </li>
                   </div>
           </div>
       </div>
   </div>
</template>

<script>

import api_service from "../../services/api.service.js";
// import MapList from './MapList.vue';
import Navbar from './Navbar.vue';
import Page from './Page.vue';
//https://www.thepolyglotdeveloper.com/2017/11/router-navigate-pages-vuejs-application/
//https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
//https://old.babeljs.io/learn-es2015/
//https://bootstrap-vue.js.org/
//https://vuejs.org/v2/guide/single-file-components.html#For-Users-New-to-Module-Build-Systems-in-JavaScript
export default {
    components: { Navbar, Page },
    // empty
    data() {
            return {
                maps:{}
            }
        },
    created: function(){this.getFrom()},
    methods: {
            getFrom: function () {
                api_service.show().then((responsed) => {
                    // window.localStorage.setItem('form', responsed);
                    this.maps = responsed;
                }).catch((error) => {
                    if (error.response) {
                        this.$swal({
                            type: 'error',
                            title: 'Oops...',
                            text: error.response.data.error.message
                        })
                    }
                });
            },
        },
}
</script>