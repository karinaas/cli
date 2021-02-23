'use strict';

const { join } = require('path');
const json = require('../../../../utils/json');
const Task = require('./task');

module.exports = class SaveMetaFile extends Task {
    async process(response) {
        const { log, cwd } = this;
        const { out } = this.config;
        const filepath = join(out, 'integrity.json');
        log.debug('Saving integrity file');
        log.debug(`  ==> ${filepath}`);
        try {
            await json.write(response, { cwd, filename: filepath });
        } catch (err) {
            throw new Error(
                `Unable to save integrity file [${filepath}]: ${err.message}`,
            );
        }
    }
};
