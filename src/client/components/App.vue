<template>
   <div>

    <Navbar/>
    
       <div class="container">
           <div class="row">
               <div class="col-12">
                    <p>A novel way to do a city walk</p>
               </div>
           </div>
       </div>
              <div class="container">
           <div class="row">
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

import form_services from "../../services/form.service.js";
// import MapList from './MapList.vue';
import Navbar from './Navbar.vue';

export default {
    components: { Navbar },
    // empty
    data() {
            return {
                maps:{}
            }
        },
    created: function(){this.getFrom()},
    methods: {
            getFrom: function () {
                form_services.show().then((responsed) => {
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