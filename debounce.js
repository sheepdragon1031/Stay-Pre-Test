const debounceFunc = (func, delay) => {
    let timeout = null 
    return function() {
      const next = () => func.apply(this, arguments)
      clearTimeout(timeout)
      timeout = setTimeout(next, delay)
    }
}

const handleButton = debounceFunc((e) => {
    console.log(`${e}`);
}, 1000)
return console.log(handleButton('Yooo'))