import * as recast from "recast";
const {
  variableDeclaration,
  variableDeclarator,
  functionExpression,
  arrowFunctionExpression
} = recast.types.builders;

function fun(a, b) {
  return a + b;
}
const code = Array.isArray.toString();
const ast = recast.parse(code);
const add = ast.program.body[0];
ast.program.body[0] = variableDeclaration("const", [
  variableDeclarator(add.id, arrowFunctionExpression(add.params, add.body))
]);
console.log(add);
const output = recast.print(ast).code;

console.log(output);
