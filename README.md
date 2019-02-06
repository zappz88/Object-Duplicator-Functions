# Object-Duplicator-Functions

Going to address other method regarding new object creation to avoid modifying original object (and reassignment appears to still be necessary in order to avoid accidentally creating an array as output). These functions use arrow syntax and are if you simply want to create a new mirror object for future use.

const mapper = (obj, mapFn) => Object.keys(obj).reduce((result, key) => {
                result[key] = mapFn(obj)[key];
                return result;
            }, {});

var newImages = mapper(images, (value) => value);

The way these functions work is like so:

mapFn takes the function to be added later (in this case (value) => value) and simply returns whatever is stored there as a value for that key (or multiplied by two or whatever if you change the return value) in mapFn(obj)[key],

and then redefines the original value associated with the key in result[key] = mapFn(obj)[key]

and returns the operation performed on result (the accumulator located in the brackets initiated at the end of the .reduce function).

All of this is being performed on the chosen object and STILL there CANNOT be an implicit request for a returned array and only works when reassigning values as far as I can tell. This requires some mental gymnastics but reduces the lines of code needed as can be seen above. Output is exactly the same as can be seen below:

{snow: "https://www.trbimg.com/img-5aa059f5/turbine/bs-   
md-weather-20180305", sunny: "http://www.cubaweather.org/images/weather-
photos/l…morning-east-Matanzas-city-Cuba-20170131-1080.jpg", rain: 
"https://i.pinimg.com/originals/23/d8
/ab/23d8ab1eebc72a123cebc80ce32b43d8.jpg"}
