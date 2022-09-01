async function schemaValidation(response, schema) {
    if (!response || !schema) throw new Error('An API response and contract are required');
    const options = { abortEarly: false };
    try {
        const value = await schema.validateAsync(response, options);
        return value
    }
    catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    schemaValidation
}
