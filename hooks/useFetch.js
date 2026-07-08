/*
 * :file description: React custom hook - fetch data from URL
 * :name: \hot100\useFetch.js
 */
import { useCallback, useEffect, useState } from 'react'

/**
 * 发起 HTTP 请求并管理 loading / data / error 状态。
 * url 或 options 变化时会自动重新请求；组件卸载时自动取消请求。
 *
 * @param {string | null} url - 请求地址，传 null 可暂停请求
 * @param {RequestInit} [options] - fetch 配置项（method、headers、body 等）
 * @returns {{ data: any, loading: boolean, error: Error | null, refetch: () => void }}
 */
export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(Boolean(url))
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1)
  }, [])

  const optionsKey = JSON.stringify(options)

  useEffect(() => {
    if (!url) {
      setLoading(false)
      return
    }

    const controller = new AbortController()
    const { signal } = controller

    setLoading(true)
    setError(null)

    fetch(url, { ...options, signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        return res.json()
      })
      .then((json) => {
        setData(json)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err)
        }
      })
      .finally(() => {
        if (!signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
    // optionsKey 避免 options 对象引用每次渲染变化导致重复请求
  }, [url, reloadKey, optionsKey])

  return { data, loading, error, refetch }
}
