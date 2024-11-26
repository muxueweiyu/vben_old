<template>
  <div class="web_monitor p-4 w-full h-full flex flex-col">
    <div class="flex">
      <Input class="mr-2" :allow-clear="true" v-model:value="str_text" placeholder="请输入内容" />
      <a-button type="primary" @click="getData" :loading="loading"> {{ '查询' }} </a-button>
    </div>
    <div>
      <div v-for="item in ds_card" :key="item">
        <img :src="item['img']" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { Input } from 'ant-design-vue';
  import { defHttp } from '@/utils/http/axios';

  const str_text = ref('');
  const ds_card = ref([]);
  //async function fetchData(url, params, processData) {
  //  try {
  //    const res = await defHttp.post({ url, params });
  //    processData(res);
  //  } catch (error) {
  //    console.log('err', error);
  //  }
  //}

  async function fetchData_get(url, params, processData) {
    try {
      const res = await defHttp.get({ url, params });
      processData(res);
    } catch (error) {
      console.log('err', error);
    }
  }
  function getData() {
    var url = `/api/v1/link?url=${str_text.value}`;
    console.log(url);

    fetchData_get(url, {}, (res) => {
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
