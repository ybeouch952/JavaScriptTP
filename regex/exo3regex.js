const mac ="18:60:24:9a:04:fc"

const regex = /^(([a-z0-9][a-z0-9]:){5})([a-z0-9][a-z0-9])$/i


console.log(regex.test(mac))