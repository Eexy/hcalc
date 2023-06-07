import { buildExpressionTree } from './build-expression-tree';
import { buildPostfix } from './build-postfix';
import { isValidExpression } from './is-valid-expression';

const exp = process.argv[2];

if (exp && isValidExpression(exp)) {
  const postfix = buildPostfix(exp);
  const tree = buildExpressionTree(postfix);
} else {
  console.info('Invalid expression passed');
}
