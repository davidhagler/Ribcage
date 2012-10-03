define(['app', 'views/index_view'], function (IndexView) {
  function simpleSoap(options)
	  // user underscore template to make XML resource.
	  var soapMessage = _.template([
		  '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">',
		  '<soap:Body>',
		  '<<%=functionCall%> xmlns="<%=xmlNS%>">',
		  '<% _.each(arguments, function(argumentValue, argumentKey) { %>',
			  '<<%=argumentKey%>><%=argumentValue%></<%=argumentKey%>>',
		  '<% } %>',
		  '</SaveProduct>',
		  '</soap:Body>',
		  '</soap:Envelope>'].join(''));
	  $.ajax({
		  url: options.url,
		  type: "POST",
		  dataType: "xml",
		  data: soapMessage(options.arguments),
		  complete: options.callback,
		  contentType: "text/xml; charset=\"utf-8\""
	  });
	  return false;
  }
});
