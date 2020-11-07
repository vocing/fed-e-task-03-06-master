/**
 * 资源相关请求模块
 */

import request from '@/utils/request'

export const getResourcePages = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}

export const saveOrUpdate = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/saveOrUpdate',
    data
  })
}

export const deleteResource = (id: string | number) => {
  return request({
    method: 'DELETE',
    url: `/boss/resource/${id}`
  })
}
