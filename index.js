function anagram(strA,strB)
{
 return cleanStr(strA) === cleanStr(strB)
}

function cleanStr(str)
{

  return
  str.replace(/[^\w]/g,'')
  .split('')
  .sort()
  .join('')
}

console.log(anagram("tool cool","oolt loco"));
