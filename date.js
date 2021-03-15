document.write(getDate());

function getDate(){
    let date = new Date();
    return date.toLocaleString('default', { month: 'short' })+" "
            +date.getDate+" "+date.getFullYear+","+date.toLocaleString("default", { weekday: "long" })+
            " "+date.getHours+":"+date.getMinutes
            ;

}
