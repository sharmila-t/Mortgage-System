/**
 * PersonalInfo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
    name:{
        type : 'string',
        required: true
    },
    mortgage_value:{
        type:'string',
        required: true
    },
    MISID:{
        type:'string',
        required: true
    },
    Employer_name:{
        type:'string',
        required: true
    },
    Password:{
        type:'string',
        required: true
    },
    // RE_status:{
    //     type:'string',
    //     defaultsTo: "Pending"
    // },
    employeer_status:{
        type:'string',
        defaultsTo: "Pending"
    },
    insurance_value:{
        type:'string',
        defaultsTo: "Pending"
    },
    deduct_value:{
        type:'string',
        defaultsTo: "Pending"
    }
}
};