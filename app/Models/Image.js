'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {

    static get Serializer() {
        return use('App/Models/Serializers/JsonSerializer')
    }

    product() {
        return this.belongsToMany('App/Models/Product').pivotTable('product_images')
    }

}

module.exports = Image
