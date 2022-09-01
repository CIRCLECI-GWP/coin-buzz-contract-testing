const Joi = require('joi');

const currencyObject = Joi.object({
    code: Joi.string().required(),
    symbol: Joi.string().optional(),
    rate: Joi.string().required(),
    description: Joi.string().required(),
    rate_float: Joi.number().required()
}).required();

const BPIContract = Joi.object({
    time: Joi.object({
        updated: Joi.string().required(),
        updatedISO: Joi.string().required(),
        updateduk: Joi.string().optional(),
    }).required(),
    disclaimer: Joi.string().required(),
    chartName: Joi.string().optional(),
    bpi: Joi.object().keys({
        USD: currencyObject.required(),
        CNY: currencyObject.required()
    }).required(),
}).required();

module.exports = {
    BPIContract,
    currencyObject
}
