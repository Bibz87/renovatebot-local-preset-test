module.exports = {
  gitAuthor: "Self-hosted Renovate Bot <123456+self-hosted-renovate[bot]@users.noreply.github.com>",
  onboarding: false,

  repositories: [
    "Bibz87/renovatebot-local-preset-test"
  ],

  extends: [
    "local>Bibz87/renovatebot-local-preset-test//presets/foo"
  ],

  dryRun: "full",

  packageRules: [
    {
      matchManagers: ["terraform"],
      addLabels: [ "Terraform" ],
    },
  ],
};
