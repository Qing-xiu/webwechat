seajs.config({
  map: [
    [ /^(.*\.(?:css|js(?:on)?))(.*)$/i, '$1?{{$TIME_STAMP}}' ]
    //[ /^(.*\.(?:css|js(?:on)?))(.*)$/i, '$1?'+ Math.random() ]
  ]
});
