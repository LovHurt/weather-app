interface WeatherList {
    dt:number,
    main:{
        temp:number,
        feels_like:number,
        temp_min:number,
        temp_max:number,
        humidity:number
    },
    weather:[
        {
            main:string,
            description: string
        }
    ],
    wind:{
        speed:number
    },
    pop:number,
    sys:{
        pod:string
    }
}

export default WeatherList;