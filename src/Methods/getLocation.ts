//Geolocation API


const getLocation = (): Promise<{ usersLatitude: number; usersLongitude: number }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const usersLatitude = position.coords.latitude;
          const usersLongitude = position.coords.longitude;
          console.log("Latitude:", usersLatitude);
          console.log("Longitude:", usersLongitude);
          resolve({ usersLatitude, usersLongitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    } else {
      const error = new Error("Geolocation is not supported by this browser.");
      console.error(error.message);
      reject(error);
    }
  });
};

export default getLocation;
