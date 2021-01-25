module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                tarballDir: 'release',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: 'release/*.tgz',
            },
        ],
   	[
      	    'semantic-release-slack-bot',
            {
                notifyOnSuccess: true,
                notifyOnFail: false,
                packageName: '@eik/cli',
            }
        ],
        '@semantic-release/git',
    ],
    preset: 'angular',
    branches: [
        { name: 'master' },
        { name: 'alpha', prerelease: true },
        { name: 'beta', prerelease: true },
        { name: 'next', prerelease: true },
    ],
};
