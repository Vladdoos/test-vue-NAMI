<template>
  <section>
    <div class="block-first">
      <div class="item"><p>1</p> <button @click="visible = !visible">8</button></div>
      <div :class="{itemShow: visible }" class="item hide-item"><p>2</p></div>
    </div>
    <div class="block-second">
      <div :class="{itemShow: visible }" class="item hide-item"><p>3</p></div>
      <div :class="{itemShow: visible }" class="item hide-item"><p>4</p></div>
    </div>
    <div class="block-third">
      <div class="item"><p>5</p></div>
      <div class="item">
        <div class="content" v-for="post in allPosts" :key="post.id">
          <h1>{{post.title}}</h1>
          <p>{{post.body}}</p>
        </div>
      </div>
    </div>
    <div class="item"><p>7</p></div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      visible: false
    }
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    }
  },
  mounted() {
    if (localStorage.getItem('NAME_TEST_DATA')) {
      let storedData = localStorage.getItem('NAME_TEST_DATA');
      this.$store.commit('updatePosts', JSON.parse(storedData));
      this.$store.dispatch('fetchPosts');
    } else {
      this.$store.dispatch('fetchPosts');
    }
  },
}
</script>
