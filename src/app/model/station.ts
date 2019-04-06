export class Station {
  name: String;
  // line: String;
  // order: Number;
  stationNames: any[] = [];
  links: any[] = [];
  isInterChange: Boolean;
  static isSameLine(sta1: Station, sta2: Station) {
    if (!sta1 || !sta2) {
      return false;
    }
    const name1 = sta1.stationNames.map(name => name.slice(0, 2));
    const name2 = sta2.stationNames.map(name => name.slice(0, 2));
    return name1.some(name => { return name2.indexOf(name) !== -1 });
  }
  static getCommonLine(sta1: Station, sta2: Station, sta3: Station) {
    if (!sta1 || !sta2 || !sta3) {
      return '';
    }
    const name1 = sta1.stationNames.map(name => name.slice(0, 2));
    const name2 = sta2.stationNames.map(name => name.slice(0, 2));
    const name3 = sta3.stationNames.map(name => name.slice(0, 2));

    const common = [name1, name2, name3].reduce((p, c) => p.filter(e => c.includes(e)));
    return common;
  }

}