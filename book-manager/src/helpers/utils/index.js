import { message } from "ant-design-vue";

export const result = (response, authShowErrorMsg = true) => {
  const { data } = response;

  if (data.code === 0 && authShowErrorMsg) {
    message.error(data.msg);
  }

  return {
    success(cb) {
      if (data.code !== 0) {
        cb(data, response);
      }

      return this;
    },
    fail(cb) {
      if (data.code === 0) {
        cb(data, response);
      }

      return this;
    },
    finally(cb) {
      cb(data, response);

      return this;
    },
  };
};

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const tsPadStart = (str) => {
  str = String(str);

  return str.padStart(2, "0");
};

export const formatTimestamp = (ts) => {
  const date = new Date(Number(ts));

  const YYYY = date.getFullYear(); //年
  const MM = tsPadStart(date.getMonth() + 1); //月
  const DD = tsPadStart(date.getDate()); //日

  const hh = tsPadStart(date.getHours()); // 时
  const mm = tsPadStart(date.getMinutes()); // 分
  const ss = tsPadStart(date.getSeconds()); //秒

  return `${YYYY}/${MM}/${DD} ${hh}:${mm}:${ss}`;
};
