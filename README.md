# mrt
===============================================
Some notes prior to the application:
1. Barhar Junction should add station data 'JW0' to link to the main MRT lines
2. MRT map was got from web, which is the best map I could find, I manually set the points for all stations. It supposed to help user to visualise the path only, accuarate to the level of native eyes.
3. TenMile Junction was found in the map but is not listed in the given JSON file, so just ignore it.

===============================================
Start application:
1. extract the file to any folder,
2. in command line, under this folder run 'npm install -g @angular/cli'
3. run 'npm install'
4. run 'ng build --prod --base-href'
5. look for /dist/mrt/
6. open index.html

OR

4. run 'ng serve'
5. open the link 'localhost:4200' in broswer
===============================================
Application instruction:
1. user have to provide two stations to start finding.
2. By default, the top best 3 routes will be listed, user is freely to choose up to 20 routes(can modify the code to increase the limitation).
3. Results will be shown after clicking 'find route', ranked by total distance, shortest on top.
4. Mouseover any route will animate the path on the right map, interchanges will be highlighted as circles
===============================================
Areas to improve:
1. Original design includes prioritized by distance or number of changes, but due to the existing cicle lines, downtown line, mininum changes may not provide the best result. Further, this can be considered if we can provide the data for travelling time between stations and changing time in interchanges.
2. UX can be improved, color selection.

Due to time limitation, many features are not yet implemented and some parts of the code can be restructured. Leave it to next version if needed.