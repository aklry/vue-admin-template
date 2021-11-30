import Vue from 'vue'
import Message from './index.vue'

let instance = null
const Builder = Vue.extend(Message)

class GetComponent {
  constructor(options) {
      this.options = options
  }
  init() {
    instance = new Builder({
      render: (createElement) => {
        return createElement(Message, {
          props: {
            title: { ...this.options }
          }
        })
      }
    })
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    return instance
  }
  hide() {
    instance.$el.remove()
    instance = null
  }
}

const getComponent = (options) => {
  return new GetComponent(options)
}

export default {
  install(vue) {
    vue.prototype.$Message = getComponent
  }
}
