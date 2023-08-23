import request from '@/utils/request'

const userApi = {
    login(data) {
        return request({
            url: '/system/login',
            method: 'post',
            data
        })
    },
    getInfo() {
        return request({
            url: '/system/userinfo',
            method: 'get'
        })
    },
    logout() {
        return request({
            url: '/system/logout',
            method: 'post'
        })
    },
}

export default userApi;