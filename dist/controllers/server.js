"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServer = void 0;
const getServer = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getServer = getServer;
//# sourceMappingURL=server.js.map