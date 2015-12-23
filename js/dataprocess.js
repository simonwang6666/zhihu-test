function returnarr(a)
{
	var arr = [];
	for(var i = 0;i < a.invited.length;i++)
	{
		arr.push(a.invited[i].name);
	}
	return arr;
}
function joinname(a)
{
	var arr = [];
	for(var i = 0;i < a.invited.length;i++)
	{
		arr.push(a.invited[i].name);
	}
	var newarr = arr.slice(0,2);
	return newarr.join('、');
}

function countnum(a)
{
	return a.invited.length;
}
module.exports.returnarr = returnarr;
module.exports.joinname = joinname;
module.exports.countnum = countnum;