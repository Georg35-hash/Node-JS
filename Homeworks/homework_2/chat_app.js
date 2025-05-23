

///Для логирование можешь юзануть
const EventEmitter = require('events');
const emitter = new EventEmitter()

function changeUserState(newState, emitter){
    emitter.emit('stateChange', newState)

}
emitter.on('stateChange',(state)=>{
 console.log('New User Status', state);
    })

    changeUserState('online', emitter)
    changeUserState('AFK', emitter)
    changeUserState('hidden', emitter)