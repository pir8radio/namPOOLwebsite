    $.getJSON('https://signapool.notallmine.net/api/getMiners', function(data) {
	var miners = (data.miners).length
	var pphys = (data.poolCapacity/1024).toFixed(3)
	var peff = (data.poolTotalEffectiveCapacity/1024).toFixed(3)
	var seff = (data.poolSharedCapacity/1024).toFixed(3)
	//var bonusstr = (data.miners).find(x => x.address === '7338594461977886954').pendingBalance
	//var bonusnum = parseFloat(bonusstr)
	var bonusnum = "68321.097"
	var bonus = bonusnum.toLocaleString("en-US");

	$("#miners").attr("data-target", miners);
	$("#pphys").attr("data-target", pphys);
	$("#peff").attr("data-target", peff);
	$("#seff").attr("data-target", seff);
	$("#bonus2").attr("data-target", bonusnum);
	$("#bonus").text(bonus);
    });
