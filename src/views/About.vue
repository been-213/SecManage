<template>
  <div class="about">
    <ul>
      <li v-for="(item,index) in List" :key="index">{{item.name}} - {{item.id}} - {{item.age}}</li>
    </ul>
    <span>{{count}}</span>
    <ul>
      <li v-for="(item,index) in doneTodos" :key="index">{{item.id}}-{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'About',
  beforeMount() {
    this.getInit();
  },
  methods: {
    getInit() {
      this.$store.dispatch('about/getMockList');
    },
  },
  computed: {
    ...mapState('about', ['count', 'List']),
    ...mapGetters('about', ['doneTodos']),
  },
};
</script>
