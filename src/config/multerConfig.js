import multer from 'multer';
import { resolve, extname} from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000 )

export default {
    storage: multer.diskStorage({
        filerFilter: (req, file, cb) => {
            if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg'){
                return cb(new multer.MulterError('Arquivo precisa ser PNG OU JPG'));
            }
            
            return cb(null, true);
        },
        destination: (req, file, cb) => {
        cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'))        
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
        },
        }),
    };