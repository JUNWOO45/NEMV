module.exports = {
  apps : [{
    name: 'nemv',
    script: './be/bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_pr: {
      NODE_ENV: 'production',
      PORT: 80 
    }
  }],

  deploy : {
    pr : {
      user : 'root',
      host : '133.186.210.91',
      key : '~/keys/nemvKey.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:junwoo45/NEMV.git',
      path : '/var/www/nemv',
      'post-deploy' : 'yarn pm2'
    }
  }
};
