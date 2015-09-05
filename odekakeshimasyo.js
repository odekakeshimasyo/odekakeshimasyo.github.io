$((function(){
	function highlight() {
		if (typeof(hljs) == "undefined") return;
		var sql = hljs.getLanguage('sql');
		sql.c[0].bK += ' copy delimiter including csv header defaults indexes returning with';
		sql.c[0].k.keyword += ' copy delimiter including csv header defaults indexes returning with';
		hljs.registerLanguage('sql', function(){return sql;});
		hljs.initHighlighting();
	}
	
	function socialbutton() {
		setTimeout(function() {
			/* $('.socialbutton').html($('.socialbutton').get(0).firstChild.nodeValue); */
		}, 3000);
	}
	
	return function() {
		highlight();
		socialbutton();
	}
})());
