			var ran1 = Math.ceil(Math.random() * 64);
				/*if (ran1 === ran2) {
					Math.ceil(Math.random() * 64);
				} 
				else if (ran1 === ran3) {
					Math.ceil(Math.random() * 64);
				} 
				else if (ran1 === ran4) {
					Math.ceil(Math.random() * 64);
				} 
				else if (ran1 === ran5) {
					Math.ceil(Math.random() * 64);
				} 
				else {*/
				document.write("Your first number is " + ran1 + ".<br> ");
				// } 

			var ran2 = Math.ceil(Math.random() * 64);
				if (ran2 === ran1) {
					var ran2 = Math.ceil(Math.random() * 63);
				} 
				/*else if (ran2 === ran3) {
					Math.ceil(Math.random() * 64);
				} 
				else if (ran2 === ran4) {
					Math.ceil(Math.random() * 64);
				} 
				else if (ran2 === ran5) {
					Math.ceil(Math.random() * 64);
				} */
				else {
				document.write("Your second number is " + ran2 + ". <br>");
				}

			var ran3 = Math.ceil(Math.random() * 64);
				if (ran3 === ran1) {
					var ran3 = Math.ceil(Math.random() * 63);
				} 
				else if (ran3 === ran2) {
					var ran3 = Math.ceil(Math.random() * 62);
				} 
				/* else if (ran3 === ran4) {
					Math.ceil(Math.random() * 64);
				} 
				else if (ran3 === ran5) {
					Math.ceil(Math.random() * 64);
				} */
				else {
				document.write("Your third number is " + ran3 + ".<br> ");
				}

			var ran4 = Math.ceil(Math.random() * 64);
				if (ran4 === ran1) {
					var ran4 = Math.ceil(Math.random() * 63);
				} 
				else if (ran4 === ran2) {
					var ran4 = Math.ceil(Math.random() * 62);
				} 
				else if (ran4 === ran3) {
					var ran4 = Math.ceil(Math.random() * 61);
				} 
				/* else if (ran4 === ran5) {
					Math.ceil(Math.random() * 64);
				} */ 
				else {
			document.write("Your fourth number is " + ran4 + ".<br> ");
				}

			var ran5 = Math.ceil(Math.random() * 64);
				if (ran5 === ran1) {
					var ran5 = Math.ceil(Math.random() * 63);
				} 
				else if (ran5 === ran2) {
					var ran5 = Math.ceil(Math.random() * 62);
				} 
				else if (ran5 === ran3) {
					var ran5 = Math.ceil(Math.random() * 61);
				} 
				else if (ran5 === ran4) {
					var ran5 = Math.ceil(Math.random() * 60);
				} 
				else {
			document.write("Your fifth number is " + ran5 + ".<br>");
				}

			var ran6 =  Math.ceil(Math.random() * 29);
			document.write(" And your Power Ball number is " + ran6 + ". ");

			