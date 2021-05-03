"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeople = void 0;
const getPeople = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getPeople = getPeople;
//# sourceMappingURL=people.js.map