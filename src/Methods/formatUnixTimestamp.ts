function formatUnixTimestamp(unixTimestamp:number) {
    const date = new Date(unixTimestamp * 1000);
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const dayOfWeek = days[date.getDay()];
    const monthName = months[date.getMonth()];
  
    const formattedDate = `${dayOfWeek}, ${date.getDate()} ${monthName}, ${date.getFullYear()}`;
    
    return formattedDate;
  }

  export default formatUnixTimestamp;
  