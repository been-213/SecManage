<template>
  <div class="about">
    <ul>
      <li
      v-for="(item,index) in List"
      :key="index">
      {{item.name}} - {{item.id}} - {{item.age}}
      </li>
    </ul>
  </div>
</template>
<script>
import { get } from '../service/http';

export default {
  name: 'About',
  data() {
    return {
      List: [],
    };
  },
  beforeMount() {
    this.getInit();
  },
  methods: {
    getInit() {
      const that = this;
      get('/mock/test').then((res) => {
        that.List = res.user;
      });
    },
  },
};
</script>
