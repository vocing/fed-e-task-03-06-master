/**
 * 广告位相关请求模块
 */

import request from '@/utils/request'

export const getAllSpaces = (params: any) => {
  return request({
    method: 'GET',
    url: '/front/ad/space/getAllSpaces',
    params
  })
}

export const getAdById = (id: number | string) => {
  return request({
    method: 'GET',
    url: '/front/ad/space/getSpaceById',
    params: {
      id
    }
  })
}

export const saveOrUpdateAvertSpace = (data: any) => {
  return request({
    method: 'POST',
    url: '/front/ad/space/saveOrUpdate',
    data
  })
}
