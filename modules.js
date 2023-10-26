//OS module=>for interacting with server and operationg system
const { log } = require('console');
const os=require('os')
///info about current user
const user=os.userInfo();
log(user)

//method return the system uptime in seconds
log(os.uptime())

const currentOS={
 name:os.type(),
 release:os.release(),
 totalMem:os.totalmem(),
 freememory:os.freemem()
}
log(currentOS)