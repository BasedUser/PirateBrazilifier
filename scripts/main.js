const pirates = Seq.of("VALVE", "tuttop", "CODEX", "IGGGAMES", "IgruhaOrg", "FreeTP.Org");

Events.on(PlayerConnectEvent, e => {
	if (pirates.contains(e.player.name)) {
		Call.infoMessage(e.player.con,"Mindustry is free on [royal]https://anuke.itch.io/mindustry[]\n\nMindustry можно скачать бесплатно на [royal]https://anuke.itch.io/mindustry[]\n\n[#0000000][#fac11b80][#fac11b][][]\n[white][#fac11b][#fac11b80][][][]\n[white][#0][][#fac11b][][#0][][][#fac11b][#fac11b80][][]\n[#0][white][#fac11b][][][#fac11b][][]\n[#0][white][#fac11b][][][#fac11b][][][#fac11b80][]\n[#fac11b][#0][white][][white][][white][][]\n[#fac11b80][][#0][][white][]\n[#0][]\n\n\n\n[#fac11b80][][#fac11b80][][]\n[#fac11b80][#fac11b][][]\n[#fac11b80][#fac11b][][]");		
		e.player.con.kick("Ingenuine copy of Mindustry.");
	}
});
