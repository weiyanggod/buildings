import request from '@/utils/https.js'

export const getToken = (data) => {
  return request.post({
    url: '/buildings-server/api/getToken',
    data,
  })
}

export const getParkList = () => {
  return request.get({
    url: '/buildings-server/api/getParkList',
  })
}

export const getBuildingsList = (id) => {
  return request.post({
    url: `/buildings-server/api/buildingsList/${id}`,
  })
}

export const getBuildingsOverviewInfo = (id) => {
  return request.post({
    url: `/buildings-server/api/buildingsOverview/${id}`,
  })
}

export const getFloor = (id) => {
  return request.post({
    url: `/buildings-server/api/buildingsFloor/${id}`,
  })
}

export const getRoomInfo = (id) => {
  return request.get({
    url: `/buildings-server/api/roomInfo`,
    params: { id },
  })
}

export const getAgreementInfo = (id) => {
  return request.get({
    url: `/buildings-server/api/agreementInfo`,
    params: { id },
  })
}

export const getClientReserveInfo = (id) => {
  return request.get({
    url: `/buildings-server/api/clientReserveInfo`,
    params: { id },
  })
}
