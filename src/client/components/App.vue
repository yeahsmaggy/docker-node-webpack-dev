<template>
   <div>

    <Navbar/>
    
       <div class="container big-main-area">
           <div class="row">
               <div class="col-12">
                    <h2>A novel way to do a city walk</h2>

                    <b-button :size="lg" :variant="secondary-lg">
                      Make a map
                  </b-button>


               </div>
           </div>
       </div>
              <div class="container">
                <div class="row">
                <Page/>

               <div class="col-6">
              <h3>Latest map ideas</h3>
                <ul>
                  <li>Map idea 1</li>
                  <li>Map idea 2</li>
                  <li>Map idea 3</li>
                </ul>
              </div>
               <div class="col-6">

                <h3>Latest Submitted Maps</h3>
                       <li v-for="map in maps">
<!--                         {{map|$json}}
 -->                           {{map.name}}
                       </li>
              </div>

                   </div>
           </div>

        
    <div class="container">
      <div class="row">
         <div class="col-6">
                <h3>Submit a map idea</h3>
          <h4>Enter your email address</h4>
          <p>You will get a unique link to temporarily log in, so we know you are a real person.</p>
        </div>
             <div class="col-6">
                <h3>Submit a completed map</h3>
               <h4>Enter your email address</h4>
               <p>You will get a unique link to temporarily log in, so we know you are a real person.</p>
             </div>
      </div>
    </div>

       </div>




 <!-- 
 admin form for adding pages
     <form action="/api/pages" method="post">

      <label for="title">Title:
        <input type="text" name="title" value="">
      </label>
  

      <label for="content">Content:
        <textarea type="text" name="content" value=""></textarea>
      </label>


      <input type="submit" name="submit" value="submit">
    </form>
 -->

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
                api_service.show('maps').then((responsed) => {
                    // window.localStorage.setItem('form', responsed);
                    // console.log(responsed);
                    this.maps = responsed;
                }).catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        // this.$swal({
                        //     type: 'error',
                        //     title: 'Oops...',
                        //     text: error.response
                        // })
                    }
                });
            },
        },
}
</script>