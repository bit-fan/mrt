export class Station {
  name: String;
  // line: String;
  // order: Number;
  stationNames: any[] = [];
  links: any[] = [];
  isInterChange: Boolean;
  static isSameLine(sta1: Station, sta2: Station) {
    const name1 = sta1.stationNames.map(name => name.slice(0, 2));
    const name2 = sta2.stationNames.map(name => name.slice(0, 2));
    return name1.some(name => { return name2.indexOf(name) !== -1 });
  }

}