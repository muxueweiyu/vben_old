<template>
  <div class="web_monitor p-4 w-full h-full flex flex-col"> </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { defHttp } from '@/utils/http/axios';

  async function fetchData(url, params, processData) {
    try {
      const res = await defHttp.post({ url, params });
      processData(res);
    } catch (error) {
      console.log('err', error);
    }
  }

  function getData() {
    fetchData('/api/web_monitor_home_mock', {}, (res) => {
      console.log(res);
    });
  }
  const loading = ref(true);

  onMounted(() => {
    getData();
  }),
    setTimeout(() => {
      loading.value = false;
    }, 1500);
</script>
