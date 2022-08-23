<template>
  <div>
    <a-modal title="添加书籍" :visible="props.show" @ok="submit" @cancel="close">
      <a-form :model="formState" :label-col="{ span: 6 }">
        <a-form-item label="书名">
          <a-input v-model:value="addForm.name" />
        </a-form-item>
        <a-form-item label="价格">
          <a-input-number :min="0" :max="9999" v-model:value="addForm.price" />
        </a-form-item>
        <a-form-item label="作者">
          <a-input v-model:value="addForm.author" />
        </a-form-item>
        <a-form-item label="出版日期">
          <a-date-picker v-model:value="addForm.publishDate" />
        </a-form-item>
        <a-form-item label="分类">
          <a-input v-model:value="addForm.classify" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { book } from "@/servies";
import { result, clone } from "@/helpers/utils";
import { message } from "ant-design-vue";
export default {
  props: {
    show: Boolean,
  },
  setup(props, context) {
    const defaultFormData = {
      name: "",
      price: 0,
      author: "",
      publishDate: 0,
      classify: "",
    };
    const addForm = reactive(clone(defaultFormData));
    const submit = async () => {
      const form = clone(addForm); //复制一份表单
      form.publishDate = addForm.publishDate.valueOf(); //时间变成时间戳
      const res = await book.add(form);
      result(res).success((d, { data }) => {
        Object.assign(addForm, defaultFormData);
        message.success(data.msg);
      });
    };

    const close = () => {
      context.emit("update:show", false);
    };
    return {
      addForm,
      submit,
      close,
      props,
    };
  },
};
</script>

<style lang="scss" scoped></style>
