


const scriptsInEvents = {

	async Gameplay_Event292_Act4(runtime, localVars)
	{
		sendScore(runtime.globalVars.Score,runtime.globalVars.currentLevel,"gameOver");
	},

	async Gameplay_Event309_Act5(runtime, localVars)
	{
		sendScore(runtime.globalVars.Score,runtime.globalVars.currentLevel,"gameComplete");
	},

	async Loading_Event2_Act3(runtime, localVars)
	{
		gameLoaded();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

