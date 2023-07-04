// @ts-ignore
import { cornify_add } from './cornify';

const pressed: string[] = [];
const code = 'pizza';

function checkCode(e: KeyboardEvent) {
	pressed.push(e.key);
	pressed.length > code.length && pressed.shift();
	pressed.join('') === code && cornify_add();
}

window.addEventListener('keyup', checkCode);
