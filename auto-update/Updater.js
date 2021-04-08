const { autoUpdate: { branch, enabled } } = require('../config.json');
const { exec } = require('child_process');
const UPDATER = '[Updater]';

function handleExec(err, stdout, stderr) {
  if(stderr) return console.log(stderr);
  if(stdout) return console.log(stdout);
}

if (enabled) {
  exec('git fetch --force', handleExec);
  exec(`git reset --hard origin/${branch}`, handleExec);
  exec('npm install', handleExec);
  exec('npm audit fix', handleExec);
  console.log(UPDATER, 'Updated to new commit from Github!')
} else {
  console.log(UPDATER, 'AutoUpdate is disabled!');
}
