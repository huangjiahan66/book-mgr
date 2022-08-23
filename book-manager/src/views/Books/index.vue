<template>
  <div>
    <a-card>
      <h2>图书列表</h2>
      <a-divider></a-divider>
      <SpaceBetWeen>
        <div class="search">
          <a-input-search placehoolder="根据书名搜索" enter-button></a-input-search>
          <a-button @click="show = true">添加一条</a-button>
        </div>
      </SpaceBetWeen>
      <a-divider></a-divider>

      <a-table :dataSource="list" :columns="columns"> </a-table>
    </a-card>

    <add-one v-model:show="show" />
  </div>
</template>

<script>
import SpaceBetWeen from "@/components/SpaceBetWeen/index.vue";
import { ref, onMounted } from "vue";
import AddOne from "./AddOne/index.vue";
import { book } from "@/servies";
import { result, formatTimestamp } from "@/helpers/utils";
export default {
  components: { SpaceBetWeen, AddOne },
  setup() {
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
      },
    ];
    const columns = [
      {
        title: "书名",
        dataIndex: "name",
      },
      {
        title: "作者",
        dataIndex: "author",
      },
      {
        title: "出版日期",
        dataIndex: "publishDate",
        customRender: (data) => {
          return formatTimestamp(data.record.publishDate);
        },
      },
      {
        title: "分类",
        dataIndex: "classify",
      },
      {
        title: "价格",
        dataIndex: "price",
      },
    ];

    const show = ref(false);
    const list = ref([]);
    onMounted(async () => {
      const res = await book.list();

      result(res).success(({ data }) => {
        list.value = data;
      });
    });
    return { columns, show, list, formatTimestamp };
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
}
</style>
