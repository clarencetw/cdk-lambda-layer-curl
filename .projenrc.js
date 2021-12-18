const { awscdk, Gitpod } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'clarencetw',
  authorAddress: 'mr.lin.clarence@gmail.com',
  keywords: ['aws', 'cdk', 'curl'],
  cdkVersion: '1.136.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-lambda-layer-curl',
  description: 'For lambda layer use curl',
  repositoryUrl: 'https://github.com/clarencetw/cdk-lambda-layer-curl.git',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
  ],

  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['clarencetw'],
  },
  catalog: {
    twitter: 'Clarence_Lin',
    announce: false,
  },

  publishToPypi: {
    distName: 'cdk-lambda-layer-curl',
    module: 'cdk_lambda_layer_curl',
  },
});

new Gitpod(project, {
  prebuilds: {
    addCheck: true,
    addBadge: true,
    addLabel: true,
    branches: true,
    pullRequests: true,
    pullRequestsFromForks: true,
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.gitignore.exclude(...common_exclude);

project.synth();