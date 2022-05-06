
export default class AlyacDBManager {
    constructor(container) {
        this.Alyac = container.get('alyac.dbModel.alyac')
    }

    async getAlyacInfoList() {
        let alyacList
        try {
            alyacList = await this.Alyac.find().exec()
        } catch (e) {
            console.log(e)
        }

        return alyacList
    }

    async getAlyacInfoByNum(num) {
        let alyacInfo
        try {
            alyacInfo = await this.Alyac.findOne({num}).exec()
        } catch (e) {
            console.log(e)
        }

        return alyacInfo
    }
}
