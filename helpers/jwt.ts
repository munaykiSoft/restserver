import jwt from 'jsonwebtoken';

export const generateJWT = ( uid: string ) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign( payload, process.env.JWT_SECRET || 'Qdqwerwq32asdqa34ewadf3443t', { expiresIn: '12h'}, (err, token) => {
            if (err) {
                reject('No se pudo generar JWT')
            } else {
                resolve(token)
            }
        })
    })
}

