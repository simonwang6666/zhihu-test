$(document).ready(function() { 
// var arr = ["magasa","程毅南","田吉顺"];
var arr=[];
$.getJSON('data/invite_panel.json',function(data)
{
	for(i=0;i<data.invited.length;i++){
		arr.push(data.invited[i].name);
	}
})
var num = arr.length;
$('#users').on('click','a',function(e)
{	
	//e.preventDefault();
	var $this = $(this);
	var father = $this.parent();
	var ele = father.find('[invited]');
	var name = father.find('h4');
	if(ele.attr('invited') == 'n')
	{   
		$('#name').html(process(name.html()));
		$('#num').html(parseInt($('#num').html())+1);
		ele.attr('class','button1');
		ele.attr('invited','y');
		ele.html('收回邀请');
	}
	else
	{	
		$('#name').html(process(name.html()));
		$('#num').html(parseInt($('#num').html())-1);
		ele.attr('class','button');
		ele.attr('invited','n');
		ele.html('发出邀请');
	}
})
function process( str ){
	if($.inArray(str,arr) == -1)
	{
		arr.unshift(str);
		var newarr = arr.slice(0,2);
		return newarr.join('、');

	}
	else
	{
		arr.splice($.inArray(str,arr),1);
		var newarr = arr.slice(0,2);
		return newarr.join('、');
	}
}
}); 
