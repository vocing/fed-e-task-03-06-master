/**
 * 角色相关请求模块
 */

import request from '@/utils/request'

export const getAliyunImageUploadAddressAdnAuth = () => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunImagUploadAddressAdnAuth.json'
  })
}

export const getAliyunVideoUploadAddressAdnAuth = (data: any) => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json',
    data
  })
}

export const aliyunTransCode = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/course/upload/aliyunTransCode.json',
    data
  })
}

export const getAliyunTransCodePercent = (lessonId: any) => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunTransCodePercent.json',
    params: {
      lessonId
    }
  })
}
