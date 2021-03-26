export function convertTimeToStore(value){
    return{
        time: value,
    }
}

export  function convertTimeToView(time){
    return {
        days: Math.floor( time/(1000*60*60*24) ),
        hours: Math.floor( (time/(1000*60*60)) % 24 ),
        minutes: Math.floor( (time/1000/60) % 60 ),
        seconds :  Math.floor( (time/1000) % 60 ),
    }
}

