import _ from 'lodash'
import Router from '../router'

class ApiAlyacRouter extends Router {
    // eslint-disable-next-line no-useless-constructor
    constructor(getRouterList, postRouterList, putRouterList, deleteRouterList) {
        super(getRouterList, postRouterList, putRouterList, deleteRouterList)
    }
}

export default function apiAlyacRouter(container) {
    const alyacDBManager = container.get('alyac.dbManager.AlyacDBManager')

    async function getAlyacInfoList(req, res) {

        const list = await alyacDBManager.getAlyacInfoList()
        res.status(200).send(list)
    }

    async function getAlyacInfoByNum(req, res) {
        const {num} = JSON.parse(JSON.stringify(req.params))

        const alyac = await alyacDBManager.getAlyacInfoByNum(num)
        return res.status(200).send(alyac)
    }

    const getRouterList = [
        ['/alyac', getAlyacInfoList],
        ['/alyac/:num', getAlyacInfoByNum],
    ]

    const postRouterList = [
        [],
    ]

    const putRouterList = [
        [],
    ]

    const deleteRouterList = [
        [],
    ]

    return new ApiAlyacRouter(
        getRouterList,
        postRouterList,
        putRouterList,
        deleteRouterList,
    ).initialize()
}
