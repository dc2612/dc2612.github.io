$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', '2ndpage', '3rdPage', "4thpage", '5thpage', '6thpage'],
				menu: '#menu',
				sectionsColor: ['#0129D7', '#0129D7', '#0126cb', '#0129D7', '#0126cb', '#0129D7'  ],
                navigation: true,
				navigationPosition: 'right',
                navigationTooltips: ['Home', 'First project', 'Second project', 'Third project', 'Fourth project', 'Follow' ],
                	scrollingSpeed: 1100
			});
		});