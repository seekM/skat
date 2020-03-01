// https://stackoverflow.com/a/6274381/1219728
function shuffle(array) 
{
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) 
		{
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

function cartesianProduct(array1, array2)
{
	array3 = [];
	
	for (var i = 0; i < array1.length; i++) 
	{
		for (var j = 0; j < array2.length; j++) 
		{
			array3.push(array1[i] + '_' + array2[j]);
		}
	}
	
	return array3;
}

function getSubStringBeforeUnderscore(string)
{
	return string.substr(0, string.indexOf('_'));
}

function getValueOfCard(card)
{
	var valueString = getSubStringBeforeUnderscore(card);
	
	switch(valueString) 
	{
		case "ace":
			return 11;
		case "7":
			return 0;
		case "8":
			return 0;
		case "9":
			return 0;
		case "10":
			return 10;
		case "jack":
			return 2;
		case "queen":
			return 3;
		case "king":
			return 4;
	} 
}  

// https://stackoverflow.com/a/39914235/1219728
function sleep(ms) 
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

// https://stackoverflow.com/a/831060/1219728
function getGETParameter(name)
{
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		return decodeURIComponent(name[1]);
}

function isNumber(arg)
{
	return !isNaN(arg)
}

function isNumberOfPlayersValid(nrOfPlayers)
{
	return (nrOfPlayers == 1 || nrOfPlayers == 2)
}

function isIntervalInSecondsValid(intervallInSeconds)
{
	return (intervallInSeconds >= 0.5 && intervallInSeconds < 10)
}

function coinFlip() 
{
  return (Math.floor(Math.random() * 2) == 0);
}

function getElementByXpath(path, xml) 
{
  return xml.evaluate(path, xml, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}