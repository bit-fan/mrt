# mrt

Some notes prior to the application:
1. Barhar Junction should add station 'JW0' to link to the main MRT lines
2. MRT map was got from web, which is the best map I could found, I manually set the points for all stations. It supposed to help user to visualise the path only, accuarate to the level for native eye.
3. TenMile Junction was found in the map but is not listed in the given JSON file, so just ignore it.


start application:
1. extract the file to any folder,
2. in command line, under this folder run 'npm install -g @angular/cli'
3. run 'ng build --prod --base-href'
4. look for /dist/mrt/
5. open index.html

OR

3. run 'ng serve'
4. open the link 'localhost:4200' in broswer

application instruction:
1. user have to provide two stations to start finding.
2. By default, the top best 3 route will be listed, user is freely to choose up to 20 routes.
3. Results will be shown after clicking 'find route', ranked by total distance, shortest on top
4. Mouse over any route will animate the path on teh right map, changing station will highlighted as circles

area to improve:
1. Original design includes prioritized by distance or number of changes, but due to the existing cicle lines, downtown line, mininum changes may not provide the best result. Further, this can be considered if we can provide the data for travelling time between stations and changing time in interchanges.
2. UX can be improved, color selection.

Due to time limitation, many features are not yet implemented and some parts of teh code can be restructured. Leave it to next version if needed.