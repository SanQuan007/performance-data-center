import request from '@/utils/request'

const tableApi = {
    getList(params) {
        return request({
            url: '/vue-admin-template/table/list',
            method: 'get',
            params
        })
    }
}

export default tableApi;