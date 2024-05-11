function add(...arg)
{
    let sum = 0;
    for(let i=0;i<arg.length;i++)
    {
        sum+=arg[i];
    }

    return sum;
}

module.exports = {add};