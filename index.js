// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj ,key ,value){
  const newdriver = {...driver};
  newdriver[key] = value;
  return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return driver;
}

function deleteFromDriverByKey(obj, key, value){
  let newdriver2 = {...driver};
  delete newdriver2.key;
  return newdriver2;
}

function destructivelyDeleteFromDriverByKey(key, value){
  delete driver.key;
  return driver;
}
