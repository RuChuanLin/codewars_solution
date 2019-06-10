function alphanumeric(string){
    return /^[\da-z0-9]+$/gi.test(string)
}


alphanumeric("Mazinkaiser"), true
alphanumeric("hello world_"), false
alphanumeric("PassW0rd"), true
alphanumeric("     "), false
