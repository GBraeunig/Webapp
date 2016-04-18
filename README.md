
Linked Data Browser

The Linked Data Browser is a web client that visualises Links between a designated Linked Data Vocabulary and the Metadata derived from specific Catalogues. It employs a database for the Linking between individual keywords. The current implementation uses the “Agrovoc” agricultural Thesaurus and shows links to Metadata from the GLUES Metadata catalogue. The Links have been generated through the SILK Linked Data Integration Framework.

Structure

The Linked Data Browser is written in Javascript. The modules and their functionality are briefly described here.
•	/app – root folder of the application
o	/bower_components – collection of the employed libraries through bower package manager
o	/css – Css components for the html page
o	/data – all the necessary data to display (links, keywords) in structured text 
o	/fonts – fonts for css
o	/js – all javascript code
o	/view 1…6 – individual angular view representing AgroVoc excerpts

Installation

The basic installation steps are:

Clone Github repository: git clone https://github.com/GeoinformationSystems/LinkedData-Browser
To start type “npm start” from terminal. Needs Node.js.

Javascript Libraries

•	jQuery, https://jquery.org/license/ - MIT License

•	angular.js – MIT License

•	Bootstrap – MIT License

•	ui Bootstrap – MIT Licens

License

Linked Data Browser is licensed under The Apache Software License, Version 2.0

Contact
Georg Bräunig (georg.braeunig@tu-dresden.de)
