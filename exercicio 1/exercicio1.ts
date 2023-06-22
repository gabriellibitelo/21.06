
function checkTriangle(a:number, b:number, c:number): string {
  if (a !== b && b !== c) {
    return "tria";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
