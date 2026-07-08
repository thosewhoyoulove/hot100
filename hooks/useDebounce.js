/*
 * :file description: React custom hook - debounce a value
 * :name: \hot100\useDebounce.js
 */
import { useEffect, useState } from 'react'

/**
 * 延迟更新 value，在 delay 毫秒内无新变化后才返回最新值。
 * 常用于搜索输入、窗口 resize 等高频触发场景。
 *
 * @param {*} value - 需要防抖的值
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {*} 防抖后的值
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
