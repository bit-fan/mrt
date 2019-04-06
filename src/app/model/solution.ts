import { Station } from './station';
export class Solution {
  path: any[];
  textArr: any[];
  constructor(path) {
    this.path = path.slice(0);
  }
  static createRouteText(staArr: Station[]) {
    // add mid station to handle the case that jurong east and raffles place are in both NS and EW line.
    const generateText = (start, mid, end, numStop, type) => {
      let str = '';
      if (type === 'Take') {
        str += `Take ${Station.getCommonLine(start, mid, end)} from ${start.name}, take ${numStop} stop(s) `;
      } else if (type === 'Change') {
        str += `Change to line ${Station.getCommonLine(start, mid, end)}, take ${numStop} stop(s) `;
      }
      str += `to ${end.name}`;
      return str;
    }
    const resText = [];
    let startIdx = 0;
    for (let idx = 1; idx < staArr.length - 1; idx++) {
      if (staArr[idx - 1] && staArr[idx + 1]
        && !Station.isSameLine(staArr[startIdx], staArr[idx + 1])) {
        // is interchange
        resText.push(generateText(staArr[startIdx], staArr[Math.round(startIdx / 2 + idx / 2)], staArr[idx], idx - startIdx, startIdx === 0 ? 'Take' : 'Change'));
        startIdx = idx;
      }
    }
    if (startIdx !== 0) {
      resText.push(generateText(staArr[startIdx], staArr[Math.round(startIdx / 2 + staArr.length / 2 - 0.5)], staArr[staArr.length - 1], staArr.length - 1 - startIdx, 'Change'));
    } else {
      resText.push(generateText(staArr[0], staArr[Math.round(staArr.length / 2 - 0.5)], staArr[staArr.length - 1], staArr.length - 1, 'Take'));
    }
    return resText;
  }
}