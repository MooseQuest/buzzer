var records = [
    { id: 1, username: 'guest', password: 'moosequestisthebest', displayName: 'Guest', emails: [ { value: 'junk@moosequest.net' } ] }
  , { id: 2, username: 'host', password: 'am3ricaonline', displayName: 'Host', emails: [ { value: 'junk@moosequest.net' } ] }
  , { id: 3, username: 'guest2', password: 'gameshow', displayName: 'Guest2', emails: [ { value: 'junk@moosequest.net' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}