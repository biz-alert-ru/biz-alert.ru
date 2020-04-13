import Vue from 'vue'
import MessageBox from 'element-ui/lib/message-box' // +
import Notification from 'element-ui/lib/notification' // +
import Message from 'element-ui/lib/message' // +
import ElButton from 'element-ui/lib/button' // +
import ElInput from 'element-ui/lib/input' // +
import ElInputNumber from 'element-ui/lib/input-number' // +
import ElOption from 'element-ui/lib/option' // +
import ElSelect from 'element-ui/lib/select' // +
import ElForm from 'element-ui/lib/form' // +
import ElFormItem from 'element-ui/lib/form-item' // +
import ElCollapse from 'element-ui/lib/collapse'
import ElCollapseItem from 'element-ui/lib/collapse-item'
import Loading from 'element-ui/lib/loading'

import "element-ui/packages/theme-chalk/src/input-number.scss"
import "element-ui/packages/theme-chalk/src/button.scss"
import "element-ui/packages/theme-chalk/src/input.scss"
import "element-ui/packages/theme-chalk/src/message-box.scss"
import "element-ui/packages/theme-chalk/src/message.scss"
import "element-ui/packages/theme-chalk/src/notification.scss"
import "element-ui/packages/theme-chalk/src/option.scss"
import "element-ui/packages/theme-chalk/src/select.scss"
import "element-ui/packages/theme-chalk/src/form.scss"
import "element-ui/packages/theme-chalk/src/form-item.scss"
import "element-ui/packages/theme-chalk/src/loading.scss"
import "element-ui/packages/theme-chalk/src/icon.scss"
import "element-ui/packages/theme-chalk/src/collapse-item.scss"
import "element-ui/packages/theme-chalk/src/collapse.scss"

Vue.component('ElButton', ElButton)
Vue.component('ElInput', ElInput)
Vue.component('ElOption', ElOption)
Vue.component('ElSelect', ElSelect)
Vue.component('ElForm', ElForm)
Vue.component('ElFormItem', ElFormItem)
Vue.component('ElInputNumber', ElInputNumber)
Vue.component('ElCollapse', ElCollapse)
Vue.component('ElCollapseItem', ElCollapseItem)
Vue.use(Loading)

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
