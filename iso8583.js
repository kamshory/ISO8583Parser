function ISO8583(message)
{
this.fields = {
"1":["b", 64, "Bit Map Extended", false],
"2":["n", 19, "Primary account number (PAN)", true],
"3":["n", 6, "Processing code", false],
"4":["n", 12, "Amount, transaction", false],
"5":["n", 12, "Amount, Settlement", false],
"6":["n", 12, "Amount, cardholder billing", false],
"7":["n", 10, "Transmission date &amp; time", false],
"8":["n", 8, "Amount, Cardholder billing fee", false],
"9":["n", 8, "Conversion rate, Settlement", false],
"10":["n", 8, "Conversion rate, cardholder billing", false],
"11":["n", 6, "Systems trace audit number", false],
"12":["n", 6, "Time, Local transaction (hhmmss)", false],
"13":["n", 4, "Date, Local transaction (MMDD)", false],
"14":["n", 4, "Date, Expiration", false],
"15":["n", 4, "Date, Settlement", false],
"16":["n", 4, "Date, conversion", false],
"17":["n", 4, "Date, capture", false],
"18":["n", 4, "Merchant type", false],
"19":["n", 3, "Acquiring institution country code", false],
"20":["n", 3, "PAN Extended, country code", false],
"21":["n", 3, "Forwarding institution country code", false],
"22":["n", 3, "Point of service entry mode", false],
"23":["n", 3, "Application PAN number", false],
"24":["n", 3, "Function code(ISO 8583:1993)/Network International identifier (NII)", false],
"25":["n", 2, "Point of service condition code", false],
"26":["n", 2, "Point of service capture code", false],
"27":["n", 1, "Authorizing identification response length", false],
"28":["n", 8, "Amount, transaction fee", false],
"29":["n", 8, "Amount settlement fee", false],
"30":["n", 8, "Amount, transaction processing fee", false],
"31":["n", 8, "Amount, settlement processing fee", false],
"32":["n", 11, "Acquiring institution identification code", true],
"33":["n", 11, "Forwarding institution identification code", true],
"34":["n", 28, "Primary account number, extended", true],
"35":["z", 37, "Track 2 data", true],
"36":["n", 104, "Track 3 data", true],
"37":["an", 12, "Retrieval reference number", false],
"38":["an", 6, "Authorization identification response", false],
"39":["an", 2, "Response code", false],
"40":["an", 3, "Service restriction code", false],
"41":["ans", 16, "Card acceptor terminal identification", false],
"42":["ans", 15, "Card acceptor identification code", false],
"43":["ans", 40, "Card acceptor name/location", false],
"44":["an", 25, "Additional response data", true],
"45":["an", 76, "Track 1 Data", true],
"46":["an", 999, "Additional data – ISO", true],
"47":["an", 999, "Additional data – National", true],
"48":["an", 999, "Additional data – Private", true],
"49":["a", 3, "Currency code, transaction", false],
"50":["an", 3, "Currency code, settlement", false],
"51":["a", 3, "Currency code, cardholder billing", false],
"52":["b", 16, "Personal Identification number data", false],
"53":["b", 18, "Security related control information", false],
"54":["an", 120, "Additional amounts", true],
"55":["ans", 999, "Reserved ISO", true],
"56":["ans", 999, "Reserved ISO", true],
"57":["ans", 999, "Reserved National", true],
"58":["ans", 999, "Reserved National", true],
"59":["ans", 999, "Reserved for national use", true],
"60":["an", 7, "Advice/reason code (private reserved)", true],
"61":["ans", 999, "Reserved Private", true],
"62":["ans", 999, "Reserved Private", true],
"63":["ans", 999, "Reserved Private", true],
"64":["b", 16, "Message authentication code (MAC)", false],
"65":["b", 64, "Bit map, tertiary", false],
"66":["n", 1, "Settlement code", false],
"67":["n", 2, "Extended payment code", false],
"68":["n", 3, "Receiving institution country code", false],
"69":["n", 3, "Settlement institution county code", false],
"70":["n", 3, "Network management Information code", false],
"71":["n", 4, "Message number", false],
"72":["ans", 999, "Data record (ISO 8583:1993)/n 4 Message number, last(?)", true],
"73":["n", 6, "Date, Action", false],
"74":["n", 10, "Credits, number", false],
"75":["n", 10, "Credits, reversal number", false],
"76":["n", 10, "Debits, number", false],
"77":["n", 10, "Debits, reversal number", false],
"78":["n", 10, "Transfer number", false],
"79":["n", 10, "Transfer, reversal number", false],
"80":["n", 10, "Inquiries number", false],
"81":["n", 10, "Authorizations, number", false],
"82":["n", 12, "Credits, processing fee amount", false],
"83":["n", 12, "Credits, transaction fee amount", false],
"84":["n", 12, "Debits, processing fee amount", false],
"85":["n", 12, "Debits, transaction fee amount", false],
"86":["n", 15, "Credits, amount", false],
"87":["n", 15, "Credits, reversal amount", false],
"88":["n", 15, "Debits, amount", false],
"89":["n", 15, "Debits, reversal amount", false],
"90":["n", 42, "Original data elements", false],
"91":["n", 1, "File update code", false],
"92":["n", 2, "File security code", false],
"93":["n", 5, "Response indicator", false],
"94":["an", 7, "Service indicator", false],
"95":["an", 42, "Replacement amounts", false],
"96":["an", 8, "Message security code", false],
"97":["n", 16, "Amount, net settlement", false],
"98":["ans", 25, "Payee", false],
"99":["n", 11, "Settlement institution identification code", true],
"100":["n", 11, "Receiving institution identification code", true],
"101":["ans", 17, "File name", false],
"102":["ans", 28, "Account identification 1", true],
"103":["ans", 28, "Account identification 2", true],
"104":["ans", 100, "Transaction description", true],
"105":["ans", 999, "Reserved for ISO use", true],
"106":["ans", 999, "Reserved for ISO use", true],
"107":["ans", 999, "Reserved for ISO use", true],
"108":["ans", 999, "Reserved for ISO use", true],
"109":["ans", 999, "Reserved for ISO use", true],
"110":["ans", 999, "Reserved for ISO use", true],
"111":["ans", 999, "Reserved for ISO use", true],
"112":["ans", 999, "Reserved for national use", true],
"113":["n", 11, "Authorizing agent institution id code", true],
"114":["ans", 999, "Reserved for national use", true],
"115":["ans", 999, "Reserved for national use", true],
"116":["ans", 999, "Reserved for national use", true],
"117":["ans", 999, "Reserved for national use", true],
"118":["ans", 999, "Reserved for national use", true],
"119":["ans", 999, "Reserved for national use", true],
"120":["ans", 999, "Reserved for national use", true],
"121":["ans", 999, "Reserved for national use", true],
"122":["ans", 999, "Reserved for national use", true],
"123":["ans", 999, "Reserved for national use", true],
"124":["ans", 255, "Info Text", true],
"125":["ans", 50, "Network management information", true],
"126":["ans", 6, "Issuer trace id", true],
"127":["ans", 999, "Reserved for private use", true],
"128":["b", 16, "Message Authentication code", false]};

this.version = '';
this.versionID = '';
this.messageClass = '';
this.messageClassID = '';
this.messageFunction = '';
this.messageFunctionID = '';
this.messageOrigin = '';
this.messageOriginID = '';

this.mti = '';

this.versionArray = {0:'1987', 1:'1993', 2:'2003', 9:'Private usage'};
this.messageClassArray = {1:'Authorization message', 2:'Financial message', 3:'File actions message', 4:'Reversal message', 5:'Reconciliation message', 6:'Administrative message', 7:'Fee collection message', 8:'Network management message', 9:'Reserved by ISO'};
this.messageFunctionArray = {0:'Request', 1:'Request response', 2:'Advice', 3:'Advice response', 4:'Notification', 8:'Response acknowledgement', 9:'Negative acknowledgement'};
this.messageOriginArray = {0:'Acquirer', 1:'Acquirer repeat', 2:'Issuer', 3:'Issuer repeat', 4:'Other', 5:'Other repeat'};
this.messageLength = 0;
this.message = '';
this.bitmap = '';
this.bitmap1 = '';
this.bitmap2 = '';
this.bitmap3 = '';
this.dataElement = '';
this.dataElementOffset = 20;
this.fiedsUsed = [];

this.int2bin = function(integer)
{
	var i, j = integer, k, l, str = '';;
	for(i = 0; i<8; i++)
	{
		k = Math.pow(2, 8-i-1);
		l = (Math.floor(j/k))%2;
		str += l.toString();
	}
	return str;
}

this.hex2bin = function(hexadecimal){
	var bytes = [], dec = 0, str = '';
	for(var i=0; i< hexadecimal.length-1; i+=2){
		dec = parseInt(hexadecimal.substr(i, 2), 16);
		str += this.int2bin(dec);
		bytes.push(dec);
	}
	return str;
}
this.parseBitmap = function()
{
	var bitmap = this.bitmap;
	var str = this.hex2bin(bitmap);
	var i, j, fields = [];
	for(i = 0; i<str.length; i++)
	{
		if(str[i] == '1')
		{
			j = i+1;
			if(j != 1 && j != 65)
			{
				fields.push(j);
			}
		}
	}
	this.fiedsUsed = fields;
}
this.clearData = function(fieldValue, fieldType)
{
	switch(fieldType)
	{
		case 'n':
		if(fieldValue.length)
		{
			fieldValue = parseInt(fieldValue);
		}
		break;
	}
	return fieldValue;
}
this.parseDataElement = function()
{
	var fields = this.fiedsUsed;
	var i;
	var lastOffset = this.dataElementOffset
	var fieldIndex = 0;
	var fieldType = '';
	var fieldLength = 1;
	var fieldName = '';
	var fieldValue = '';
	var buff = '';
	var fobj = [];
	var data = [];
	var isVar = false;
	for(i in fields)
	{
		fieldIndex = fields[i];
		fobj = this.fields[fieldIndex];
		fieldType = fobj[0];
		
		if(fieldType == 'b')
		{
			fieldLength = parseInt(fobj[1]/8);
		}
		else
		{
			fieldLength = fobj[1];
		}
		fieldName = fobj[2];
		
		isVar = fobj[3];
		if(isVar)
		{
			// for data with variable length
			var vl = fieldLength.toString().length;
			var tl = parseInt(this.message.substr(lastOffset, vl));
			lastOffset += vl;
			fieldValue = this.message.substr(lastOffset, tl);
			lastOffset += tl;
		}
		else
		{
			fieldValue = this.message.substr(lastOffset, fieldLength);
			lastOffset += fieldLength;
		}
		data.push({fieldIndex:fieldIndex, fieldType:fieldType, fieldLength:fieldLength, fieldName:fieldName, fieldValue:fieldValue});
	}
	return data;
}

this.init = function(message)
{
	if(message)
	{
		this.message = message;
	}
	message = this.message;
	this.messageLength = message.length;
	this.mti = message.substr(0, 4);
	this.versionID = this.mti.substr(0, 1);
	this.version = this.versionArray[this.versionID];
	
	this.messageClassID = this.mti.substr(1, 1);
	this.messageClass = this.messageClassArray[this.messageClassID];
	
	this.messageFunctionID = this.mti.substr(2, 1);
	this.messageFunction = this.messageFunctionArray[this.messageFunctionID];
	
	this.messageOriginID = this.mti.substr(3, 1);
	this.messageOrigin = this.messageOriginArray[this.messageOriginID];

	
	this.bitmap1 = message.substr(4, 16);
	var bitmap1bin = this.hex2bin(this.bitmap1.substr(0, 2));
	this.bitmap = this.bitmap1;
	if(bitmap1bin[0] == '1')
	{
		this.bitmap2 = message.substr(20, 16);
		var bitmap2bin = this.hex2bin(this.bitmap2.substr(0, 2));
		this.bitmap += this.bitmap2;
		if(bitmap2bin[0] == '1')
		{
			this.bitmap3 = message.substr(36, 16);
			var bitmap2bin = this.hex2bin(this.bitmap2.substr(0, 2));
			this.bitmap += this.bitmap3;
			this.dataElementOffset = 52;
		}
		else
		{
			this.dataElementOffset = 36;
		}

	}
	else
	{
		this.dataElementOffset = 20;
	}
	
	// parse bitmap
	this.parseBitmap();
	this.dataElement = message.substr(this.dataElementOffset);
	this.dataElementLength = message.length - this.dataElementOffset;
	
	
}
if(message)
{
	this.message = message;
	this.init();
}
}