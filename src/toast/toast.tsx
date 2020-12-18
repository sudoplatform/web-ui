import { message } from 'antd'

export const toast = {
  info: message.info.bind(message),
  warn: message.warn.bind(message),
  error: message.error.bind(message),
  success: message.success.bind(message),
}

export const configToast = message.config.bind(message)
