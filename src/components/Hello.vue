<template>
  <transition name="fade">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to='/bar'>go to bar</router-link>
      <router-link to='/foo/1'>go to foo</router-link>
      <router-link to='/product'>go to product</router-link>
    </p>
    <button v-on:click='show = !show'>Toggle</button>
    <transition name="custom-classes-transition" 
    enter-active-class="animated tad" 
    leave-active-class="animated bounceOutRight">
      <p v-if="show">Hello</p>
    </transition>
    <div class="post">
      <div class="loading" v-if="loading">
        loading ...
      </div>
      <div class="error" v-if="error">
        {{error}}
      </div>
      <div class="content">
      content:{{content.body.data}}
      url:{{content.url}}
      </div>
    </div>
    <div>{{fetch}}</div>
    <router-view></router-view>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      loading: false,
      post: null,
      error: null,
      fetch: '',
      content: ''
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function () {
      this.error = this.post = null
      this.loading = true
      this.$http.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312').then(response => {
        console.log(response.data)
        this.content = response
        console.log(this.content)
      }, response => {
        // error callback
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.router-link-active {
  color: red !important;;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
