<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>欢迎</h2>
    <!--    <ul>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="https://vuejs.org"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          Core Docs-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="https://forum.vuejs.org"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          Forum-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="https://chat.vuejs.org"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          Community Chat-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="https://twitter.com/vuejs"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          Twitter-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <br>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="http://vuejs-templates.github.io/webpack/"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          Docs for This Template-->
    <!--        </a>-->
    <!--      </li>-->
    <!--    </ul>-->
    <!--    <h2>Ecosystem</h2>-->
    <!--    <ul>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="http://router.vuejs.org/"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          vue-router-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="http://vuex.vuejs.org/"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          vuex-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="http://vue-loader.vuejs.org/"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          vue-loader-->
    <!--        </a>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <a-->
    <!--          href="https://github.com/vuejs/awesome-vue"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          awesome-vue-->
    <!--        </a>-->
    <!--      </li>-->
    <!--    </ul>-->
    <el-button @click="tomain">进入主页</el-button>
  </div>
</template>

<script>
  import bus from '../assets/js/eventBus'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '',
        user: {
          'id': '',
          'username': '',
          'password': ''
        }
      }
    },
    mounted() {
      this.init();
    },
    create() {
    },
    methods: {
      init() {
        bus.$on('sendByBus', data => {
          debugger
          console.log(data);
          this.msg = data.username;
          this.user = data;
          console.log(this.msg);
        })
      },
      tomain() {
        debugger
        //bus.$emit("sendUser", this.user);
        this.$router.push({
          path: '/maincontainer/'+ new Date().getTime()
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
</style>
