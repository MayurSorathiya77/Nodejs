exports.arg1 = 19;
exports.arg2 = 12;
exports.arg3 = 23;



exports.sum = (...arg)=>{ 
    let sum = 0;
    for(let i=0;i<arg.length;i++)
    {
        sum+=arg[i];
    }
    return sum;
};

