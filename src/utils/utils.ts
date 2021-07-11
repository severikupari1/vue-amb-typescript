import { Notification } from 'element-ui'
import { NotifyObj } from '@/interfaces/NotifyObj'

function notify(data: NotifyObj) {
  Notification({
    title: data.title,
    message: data.message,
    type: data.type,
    offset: 100,
    duration: 5000
  })
}

export { notify }
