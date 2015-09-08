var _messageList = [
            {
                "createdAt": "2015-09-07T22:18:30.745Z",
                "objectId": "a4IgVFOR43",
                "roomname": "4chan",
                "text": "this is a thing",
                "updatedAt": "2015-09-07T22:18:30.745Z",
                "username": "person"
            },
            {
                "createdAt": "2015-09-07T22:07:51.021Z",
                "objectId": "2pamrneV9F",
                "roomname": "all",
                "text": "this is working",
                "updatedAt": "2015-09-07T22:07:51.021Z",
                "username": "taylor"
            }];
var _id = 0;

var getRecentMessages = function () {
  //TO-DO: Only return the 100 latest
  returnedList =_messageList.reverse();
  return returnedList;
}

var addMessage = function (data) {
  extendedData = JSON.parse(data);
  _id++
  extendedData['objectId'] = _id;
  extendedData['createdAt'] = new Date();
  _messageList.push(extendedData);
}

module.exports.getRecentMessages = getRecentMessages;
module.exports.addMessage = addMessage;