const svgText = Bun.file("./AudioWave1.svg").text();
console.log(svgText);

const regex1 = /values="([^"]+)"/g;
const matches1 = svgText.matchAll(regex1);

for (const match1 of matches1) {
  const values = match1[1];
  const regex2 = /([^;]+)/g;
  const matches2 = values.matchAll(regex2);
  for (const match2 of matches2) {
    console.log(match2[0]); // prints each individual value
  }
}