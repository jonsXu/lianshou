import Vue from 'vue'

Vue.prototype.util = {
     deepCopy(p, c) {
　　　　var c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
                //对于数组的处理也到位了
                //for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
                Vue.prototype.util.deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　},
}