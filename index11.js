const parser = require('fast-xml-parser');
const he = require('he');
const axios = require('axios');



// const fetchXmlData = async (url) => {
//     return await axios.get(url);
// }


// const parseData = async () => {

//     // Step 1: Fetch xml from OData endpoint - Articles list without content
//     const response = await fetchXmlData('http://cmscd-mtl.storm.dmz/cd_webservice/odata.svc/CustomMetas?$filter=%28PublicationId+eq+12+and+KeyName+eq+%27TargetParamIndex%27%29+and+%28%28substringof%28%27Schema%7BNews+Article%7D%27,+StringValue%29+OR+substringof%28%27Schema%7BNews+Article+2%7D%27,+StringValue%29%29+and+%28not+substringof%28%27|nc:Insider%27,+StringValue%29+and+not+substringof%28%27|nc:city-takeover%27,+StringValue%29+and+not+substringof%28%27|nc:News+Room%27,+StringValue%29+and+not+substringof%28%27|nc:news-room%27,+StringValue%29+and+not+substringof%28%27|nc:Hide+Article%27,+StringValue%29%29%29');
//     console.log(response);


// }

// parseData();



// const options = {
//     attributeNamePrefix : "@_",
//     attrNodeName: "d:ItemId", //default is 'false'
//     textNodeName : "#text",
//     ignoreAttributes : true,
//     ignoreNameSpace : false,
//     allowBooleanAttributes : false,
//     parseNodeValue : true,
//     parseAttributeValue : false,
//     trimValues: true,
//     // cdataTagName: "__cdata", //default is 'false'
//     cdataPositionChar: "\\c",
//     localeRange: "", //To support non english character in tag/attribute values.
//     parseTrueNumberOnly: false,
//     attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
//     tagValueProcessor : a => he.decode(a) //default is a=>a
// };

// if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
//     var jsonObj = parser.parse(xmlData,options);
// }
 
// // Intermediate obj
// var tObj = parser.getTraversalObj(xmlData,options);
// var jsonObj = parser.convertToJson(tObj,options);

// console.log('')
