import path from 'path';
import fs from 'fs-extra';

global.P = (dir, rootDir) => {
    if (dir.substring(0, 1) === '/') {
        return path.resolve(dir);
    } else {
        if (rootDir) {
            return path.resolve(`${rootDir}/${dir}`);
        } else {
            return path.resolve(`${APP_DIR}/${dir}`);
        }

    }
};

global.PROP = (target, field, options) => {
    Object.defineProperty(target, field, {
        ...{
            enumerable: false,
            configurable: false,
            writable: true,
            value: false
        },
        ...options
    });
};

global.FOLDERSYNC = function (folder) {
    if (fs.existsSync(folder)) {
        const dir = fs.readdirSync(folder);
        return dir;
    }
};
