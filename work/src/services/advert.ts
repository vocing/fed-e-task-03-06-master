/**
 * 广告相关请求模块
 */

import request from '@/utils/request'

export const getAdList = (params: any) => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdList',
    params
  })
}

export const updateStatus = (params: any) => {
  return request({
    method: 'GET',
    url: '/front/ad/updateStatus',
    params
  })
}

export const getAllSpaces = () => {
  return request({
    method: 'GET',
    url: '/front/ad/space/getAllSpaces'
  })
}

export const getAdById = (id: number | string) => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdById',
    params: {
      id
    }
  })
}

export const saveOrUpdateAvert = (data: any) => {
  return request({
    method: 'POST',
    url: '/front/ad/saveOrUpdate',
    data
  })
}
