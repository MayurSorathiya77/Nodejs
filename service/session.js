const userSession = new Map();

function setUserId(id,user)
{
    userSession.set(id,user);
}

function getUserId(id)
{
    return userSession.get(id);
}

module.exports = {setUserId,getUserId};