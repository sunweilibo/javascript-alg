function bwPowerSet(originSet) {
  const len = originSet.length;
  const subSets = [];
  const combinationNum = 2 ** len;

  for (let i=0;i<combinationNum;i++) {
    let subSet = [];
    for (let j=0;j<len;j++) {
      if (i & (1 << j)) {
        subSet.push(originSet[j]);
      }
    }
    subSets.push(subSet);
  }
  return subSets;
}

const res = bwPowerSet(["a", "b", "c"]);