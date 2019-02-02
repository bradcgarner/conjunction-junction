'use strict';

const allFunctions = {
basic:{
isPrimitiveNumber:true,
isObjectLiteral:true,
precisionRound:true
},
conversions:{
ciToCf:true,
galsToInches:true,
inchesToGals:true,
galsToCi:true,
ciToGals:true,
galsToCf:true,
galsToLbs:true,
lbsToGals:true,
_convertToCf:true,
calcVwc:true,
ccToL:true,
ccToM3:true,
m3ToCc:true,
lToCc:true,
celsiusToKelvin:true,
celsiusToF:true,
fToCelsius:true,
kelvinToCelsius:true,
pctToDeg:true,
degToPct:true,
degToRad:true,
radToDeg:true,
msToKph:true,
kphToMs:true,
msToMph:true,
mphToKph:true,
kphToMph:true,
solarKwM2DayToUvProxy:true
},
dateTime:{
isValidDate:true,
calcDayOfYearFromTimestamp:true,
getTheTimezoneOffset:true,
isDaylightSavings:true,
getDaysOfMonth:true,
getNameOfMonth:true,
formatOffsetAsString:true,
leadingZero:true,
removeSpacesFromString:true,
parseTimestampString:true,
convertStringToTimestamp:true,
convertTimestampToString:true,
convertLocalStringTimestampToZuluStringTimestamp:true,
dropZoneFromTimestamp:true,
convertTimestampToIntegers:true,
convertIntegersToTimestamp:true,
totalMinsHoursDays:true,
dateDelta:true,
addTime:true,
createTimeframes:true,
rangeIsIncluded:true,
printDate:true,
createTimestampLabel:true
},
primitives:{
correctInputType:true,
generateRandomNumber:true,
print:true,
numberToLetter:true,
titleCaseWord:true,
lowerCaseWord:true,
convertScToCc:true,
convertCcToSc:true,
convertCcToSpace:true,
convertScToSpace:true
},
objects:{
convertObjectKeyCase:true,
shiftObjectKeysColumn:true,
shiftArrayKeysColumn:true,
getKeyArray:true,
validateObjectKeysPresent:true,
validateObjectKeys:true,
limitObjectKeys:true,
parseValuesObj2Levels:true,
roundAllValues:true,
parseValuesFromArrayOfObj1Level:true,
convertArrayToObject:true,
convertObjectToArray:true,
subArrayByKey:true,
totalValuesByKey:true,
averageValuesByKey:true,
minValuesByKey:true,
maxValuesByKey:true,
mergeArraysOfObjectsByKey:true,
filterSequentialItems:true,
totalAndAverageArrays:true,
deltaArray:true,
immutableArrayInsert:true,
immutableArraySplice:true,
removeAllItemsFromArray:true,
addAllItemsToArray:true,
getPositionToInterpolate:true,
interpolateArrayValues:true
},
sql:{
formatTimestampForSql:true,
escapeSpecial:true,
unEscapeSpecial:true,
formatDataForSql:true,
formatObjectForKnex:true,
formatReqBodyForKnex:true,
prefixCommonKeys:true,
createSqlFetchTableKeys:true,
validateRawKnex:true
}
};

 module.exports = {
allFunctions
};