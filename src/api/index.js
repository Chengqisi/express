var {
    StudentModel
} = require("../db/model.js");

const successData = {
    code: 0,
    msg: "success",
};
const errData = {
    code: 404,
    msg: "error",
};
var addStudent = async (params) => {
    try {
        var res = await StudentModel.create({
            ...params,
        });
        return {
            ...res,
            ...successData,
        };
    } catch (err) {
        return {
            ...err,
            ...errData,
        };
    }
};
var getStudent = async (params) => {
    const page = params.page;
    const limit = params.limit;
    delete params.page;
    delete params.limit;
    try {
        var res = await StudentModel.findAndCountAll({
            where: {
                ...params,
            },
            offset: (parseInt(page) - 1) * parseInt(limit),
            limit: parseInt(limit),
        });
        return {
            ...successData,
            ...res,
        };
    } catch (err) {
        return {
            ...err,
            ...errData,
        };
    }
};

var delStudent =async (params) => {
    console.log(params);
    try {
        var res = await StudentModel.destroy({
            where: {
                ...params,
            },
        });
        return {
            ...res,
            ...successData,
        };
    } catch (err) {
        return {
            ...err,
            ...errData,
        };
    }
};

var updateStudent = async (params) => {
    let id = params.id;
    delete params.id;
    try {
        var res = await StudentModel.update({
            ...params,
        }, {
            where: {
                id: id,
            },
        });
        return {
            ...res,
            ...successData,
        };
    } catch (err) {
        return {
            ...err,
            ...errData,
        };
    }
};
module.exports = {
    addStudent,
    getStudent,
    delStudent,
    updateStudent,
};