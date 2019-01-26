const joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}];

const userInput = { 
    personalInfo: {
        streetAddress : 'my address',
        city: 'Ljubljana',
        state: 'SI'
    },
    preferences : arrayString,
    examples : arrayObjects
};

const personalInfoSchema = joi.object().keys({
    streetAddress : joi.string().trim().required(),
    city : joi.string().trim().required(),
    state : joi.string().trim().length(2).required()
});

const preferencesSchema = joi.array().items(joi.string());

const examplesSchema = joi.array().items(joi.object().keys({
    example : joi.string().trim().required()
}))

const schema = joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema,
    examples : examplesSchema
});

joi.validate(userInput, schema, (err, result) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Input is valid');
        console.log(result);
    }
})