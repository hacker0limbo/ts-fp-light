type Mode = 'DEBUG' | 'ERROR' | 'WARN'

/**
 * 日志帮助函数
 * @param mode 模式三种
 * @param initialMessage 初始信息
 * @param errorMessage 错误信息
 * @param lineNum 行数
 */
export const loggerHelper = (mode: Mode, initialMessage: string, errorMessage: string, lineNum: number) => {
  switch(mode) {
    case 'DEBUG':
      console.debug(initialMessage, `${errorMessage} at line: ${lineNum}`)
      break
    case 'ERROR':
      console.error(initialMessage, `${errorMessage} at line: ${lineNum}`)
    case 'WARN':
      console.warn(initialMessage, `${errorMessage} at line: ${lineNum}`)
    default:
      break;
  }
}