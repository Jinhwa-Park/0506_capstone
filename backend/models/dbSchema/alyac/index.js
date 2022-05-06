import _ from 'lodash'
import mongoose from 'mongoose'

import alyacSchema from "./alyac";

const schemes = { alyacSchema }

const NAME_MATCH = /(.*?)Schema$/

function _discriminate(db, base, name, schema) {
    if (db.models[name]) {
        return db.models[name]
    }
    return base.discriminator(name, schema)
}

/**
 *
 * @param database
 * @returns {Dictionary<mongoose/Model>}
 */
function alyacBuildModel(database) {
    const db = database || mongoose
    const models = _.chain(schemes)
        .mapKeys((v, k) => k.match(NAME_MATCH)[1])
        .mapValues((s, k) => db.model(k, s, k))
        .value()

    return models
}

export default alyacBuildModel
