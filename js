const mapper = (obj, mapFn) => Object.keys(obj).reduce((result, key) => {
                result[key] = mapFn(obj)[key];
                return result;
            }, {});

var newImages = mapper(images, (value) => value);
