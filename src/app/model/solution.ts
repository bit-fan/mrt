import { Station } from './station';
export class Solution {
  path: any[];
  textArr: any[];
  constructor(path) {
    this.path = path.slice(0);
  }
  static createRouteText(staArr: Station[]) {
    // add mid station to handle the case that jurong east and raffles place are in both NS and EW line.
    const generateReObj = (start, mid, end, numStop, type) => {
      let str = '';
      const resObj = {
        type: type,
        from: start,
        to: end,
        numStops: numStop,
        line: Station.getCommonLine(start, mid, end)
      }
      // if (type === 'Take') {
      //   str += `Take ${Station.getCommonLine(start, mid, end)} from ${start.name}, take ${numStop} stop(s) `;
      // } else if (type === 'Change') {
      //   str += `Change to line ${Station.getCommonLine(start, mid, end)}, take ${numStop} stop(s) `;
      // }
      // str += `to ${end.name}`;

      return resObj;
    }
    const resArr = [];
    let startIdx = 0;
    let commonLines: any[] = Station.getCommonLine(staArr[startIdx], staArr[startIdx], staArr[startIdx]);
    for (let idx = 1; idx < staArr.length - 1; idx++) {
      if (staArr[idx - 1] && staArr[idx + 1]) {
        const newLines = Station.getCommonLine(staArr[idx - 1], staArr[idx], staArr[idx + 1]);
        commonLines = commonLines.filter(line => newLines.includes(line));
        if (commonLines.length === 0) {
          resArr.push(generateReObj(staArr[startIdx], staArr[Math.round(startIdx / 2 + idx / 2)], staArr[idx], idx - startIdx, startIdx === 0 ? 'Take' : 'Change'));
          startIdx = idx;
          commonLines = Station.getCommonLine(staArr[idx], staArr[idx], staArr[idx + 1]);
        }
      }
      // if (staArr[idx - 1] && staArr[idx + 1]
      //   && !Station.isSameLine(staArr[startIdx], staArr[idx + 1])) {
      //   // is interchange
      //   resArr.push(generateReObj(staArr[startIdx], staArr[Math.round(startIdx / 2 + idx / 2)], staArr[idx], idx - startIdx, startIdx === 0 ? 'Take' : 'Change'));
      //   startIdx = idx;
      // }
    }
    if (startIdx !== 0) {
      resArr.push(generateReObj(staArr[startIdx], staArr[Math.round(startIdx / 2 + staArr.length / 2 - 0.5)], staArr[staArr.length - 1], staArr.length - 1 - startIdx, 'Change'));
    } else {
      resArr.push(generateReObj(staArr[0], staArr[Math.round(staArr.length / 2 - 0.5)], staArr[staArr.length - 1], staArr.length - 1, 'Take'));
    }
    return resArr;
  }
}