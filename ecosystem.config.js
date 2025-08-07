module.exports = {
  apps : [
    {
      name: 'uitfx.com',
      exec_mode: 'fork',
      //instances: '1',
      script: 'npm',
      args: 'start',
      watch: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3023,
        HOST: '192.168.0.199'
      }
    }
  ]
}
