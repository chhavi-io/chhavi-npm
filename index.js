module.exports = chhavi

function chhavi(url = '', params = {}){
    if(!url)
      return ' '
    url = url.replace('?', '')

    if(typeof(params) !== 'object')
        return url
    var ext = url.split(".")
    ext = ext[ext.length - 1].toLowerCase()

    var allowedExtension = ["jpeg", "jpg", "png", "js"];
    if(allowedExtension.indexOf(ext) == -1 || ext == 'js')
        return url

    process.stdout.write(_http_buildquery(params, ext))
    return url + "?" + _http_buildquery(params, ext)
}

function _http_buildquery(params, ext){
    if(!Object.keys(params).length > 0)
        return

    var allowedParams = {
                        "width": {"type": "integer", "default": '', "checkType": true, "allowedValue": []},
                        "height":{"type": "integer", "default": '', "checkType": true, "allowedValue": []},
                        "no-transform": {"type": "int", "default": '',  "checkType": true, "allowedValue": []},
                        "rotate": {"type": "integer", "default": 0, "checkType": true, "allowedValue": [90, 180, 270, 360]}
                    };

    var queryParams = {}
    for (var key in params) {
      if(allowedParams[key] != undefined)
        queryParams[key] = params[key]
    }
    var query = Object.keys(queryParams)
        .map(function(k) {return encodeURIComponent(k) + '=' + encodeURIComponent(queryParams[k])})
        .join('&');
    return query
}
