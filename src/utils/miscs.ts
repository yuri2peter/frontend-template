import { FormikProps } from 'formik';
import lodash from 'lodash';

// 连字符转驼峰
export function hyphen2Camel(str: string) {
  const re = /-(\w)/g;
  return str.replace(re, ($0, $1) => {
    return $1.toUpperCase();
  });
}

// 首字母改为大写
export function upperCaseFirst(str: string) {
  if (!str) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1, str.length);
}

// 树形图返回数据的nodeType对应的文字
export function nodeTypeToLabel(nodeType: string) {
  switch (nodeType) {
    case '1':
      return '';
    case '2':
      return '';
    default:
      return '';
  }
}

// 返回一个在当前运行时累加的id生成器
// usage: runtimeIdGenerator()();
function runtimeIdGenerator() {
  let id = 1;
  return () => {
    id += 1;
    return id;
  };
}
runtimeIdGenerator.gen = runtimeIdGenerator();

// 返回一个在当前浏览器实例累加的ID。
export function generateId() {
  return runtimeIdGenerator.gen();
}

// 针对Mui的表单组件，生成formik属性。减少样板代码
export function muiFormikPropsParser<T extends {}>(
  formik: FormikProps<T>,
  name: string,
  noDefaultStyles?: boolean
) {
  const props = {
    name,
    checked: lodash.get(formik.values, name),
    value: lodash.get(formik.values, name),
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error:
      lodash.get(formik.touched, name) &&
      Boolean(lodash.get(formik.errors, name)),
    helperText:
      lodash.get(formik.touched, name) && lodash.get(formik.errors, name),
  };
  if (!noDefaultStyles) {
    Object.assign(props, {
      fullsize: true,
      size: 'small',
    });
  }
  return props;
}

// 获取当前时间的总秒数
export function getCurrentTimeSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

// 对于小于0的数,取0
export function getZeroIfLessThanZero(num: number) {
  return num < 0 ? 0 : num;
}
