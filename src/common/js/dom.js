/**
 * Created by 大白胡子 on 2017/7/20.
 */
export function getData(el, name, val) {
  const prefix = "data-";
  name = prefix + name;
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
