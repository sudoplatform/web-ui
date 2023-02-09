import { message } from 'antd'

export const toast = {
  info: message.info.bind(message),
  warn: message.warning.bind(message),
  error: message.error.bind(message),
  success: message.success.bind(message),
}

// eslint-disable-next-line
//   @typescript-eslint/no-unsafe-assignment,
//   @typescript-eslint/no-unsafe-member-access,
//   @typescript-eslint/no-unsafe-call
export const configToast = message.config.bind(toast)
