elements.up_pusher = {
	color: "#9fafdf",
	properties: {
		range: 10,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushStrength ??= 1;

		for(h = 0; h < pixel.pushStrength; h++) {
			for(i=(pixel.range - 1); i>=0; i--) {
				if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
					tryMove(pixelMap[pixel.x][pixel.y-1-i],pixel.x,pixel.y-2-i);
				};
			};
		};
		
		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.down_pusher = {
	color: "#9fafdf",
	properties: {
		range: 10,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushStrength ??= 1;

			for(h = 0; h < pixel.pushStrength; h++) {
				for(i=(pixel.range - 1); i>=0; i--) {
					if (!isEmpty(pixel.x,pixel.y+1+i,true)) {
						tryMove(pixelMap[pixel.x][pixel.y+1+i],pixel.x,pixel.y+2+i);
					};
				};
			};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum0", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.left_pusher = {
	color: "#9fafdf",
	properties: {
		range: 10,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushStrength ??= 1;

		for(h = 0; h < pixel.pushStrength; h++) {
			for(i=(pixel.range - 1); i>=0; i--) {
				if (!isEmpty(pixel.x-1-i,pixel.y,true)) {
					tryMove(pixelMap[pixel.x-1-i][pixel.y],pixel.x-2-i,pixel.y);
				};
			};
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.right_pusher = {
	color: "#9fafdf",
	properties: {
		range: 10,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushStrength ??= 1;

		for(h = 0; h < pixel.pushStrength; h++) {
			for(i=(pixel.range - 1); i>=0; i--) {
				if (!isEmpty(pixel.x+1+i,pixel.y,true)) {
					tryMove(pixelMap[pixel.x+1+i][pixel.y],pixel.x+2+i,pixel.y);
				};
			};
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.up_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 10,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;
		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) { pixel.pushTime = 0 };

		if(pixel.charge) {
			pixel.pushTime = pixel.pushLength;
		};

		if(pixel.pushTime > 0) {
			for(h = 0; h < pixel.pushStrength; h++) {
				for(i=(pixel.range - 1); i>=0; i--) {
					if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
						tryMove(pixelMap[pixel.x][pixel.y-1-i],pixel.x,pixel.y-2-i);
					};
				};
			};
			pixel.pushTime--;
		};
		
		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.down_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 10,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;
		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) { pixel.pushTime = 0 };

		if(pixel.charge) {
			pixel.pushTime = pixel.pushLength;
		};

		if(pixel.pushTime > 0) {
			for(h = 0; h < pixel.pushStrength; h++) {
				for(i=(pixel.range - 1); i>=0; i--) {
					if (!isEmpty(pixel.x,pixel.y+1+i,true)) {
						tryMove(pixelMap[pixel.x][pixel.y+1+i],pixel.x,pixel.y+2+i);
					};
				};
			};
			pixel.pushTime--;
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum0", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.left_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 10,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;
		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) { pixel.pushTime = 0 };

		if(pixel.charge) {
			pixel.pushTime = pixel.pushLength;
		};

		if(pixel.pushTime > 0) {
			for(h = 0; h < pixel.pushStrength; h++) {
				for(i=(pixel.range - 1); i>=0; i--) {
					if (!isEmpty(pixel.x-1-i,pixel.y,true)) {
						tryMove(pixelMap[pixel.x-1-i][pixel.y],pixel.x-2-i,pixel.y);
					};
				};
			};
			pixel.pushTime--;
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 1000000,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.right_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 10,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 10;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;
		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) { pixel.pushTime = 0 };

		if(pixel.charge) {
			pixel.pushTime = pixel.pushLength;
		};

		if(pixel.pushTime > 0) {
			for(h = 0; h < pixel.pushStrength; h++) {
				for(i=(pixel.range - 1); i>=0; i--) {
					if (!isEmpty(pixel.x+1+i,pixel.y,true)) {
						tryMove(pixelMap[pixel.x+1+i][pixel.y],pixel.x+2+i,pixel.y);
					};
				};
			};
			pixel.pushTime--;
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 21000000,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 0.85,
	conduct: 1,
	state: "solid",
}

elements.Cementsss = {
    color: "#b5b5b5",
    behavior: behaviors.LIQUID,
    category:"liquids",
    tempHigh: 150,
    stateHigh: "concrete",
    tempLow: -10,
    stateLow: "concrete",
    state: "solid",
    density: 1440,
    hardness: 0.1,
    viscosity: 1000,
    darkText: true
}

elements.Heaterconcrete = {
    color: "#881111",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        if (pixelTicks > 1) {
            changePixel(pixel,"Heaterconcrete")
        }
    },
    category:"machines",
    insulate:false,
    temp:180,
    state: "solid"
}

elements.Heatermetall = {
    color: "#881111",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        if (pixelTicks > 1) {
            changePixel(pixel,"Heatermetall")
        }
    },
    category:"machines",
    insulate:false,
    temp:5000,
    state: "solid"
}
