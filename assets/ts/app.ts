import * as _ from "lodash";
import * as nacl from "tweetnacl";
import * as naclutil from "tweetnacl-util";


const foo = "bar";
console.log ("my foo: " + foo);

// const foo = _.padStart("Hello, TypeScript!", 30, ".");
const h = nacl.hash(naclutil.decodeUTF8(foo));
const j = nacl.secretbox.keyLength;
console.log ("my 2nd foo: " + naclutil.encodeBase64(h));

// nacl.box;
const b64enc = naclutil.encodeBase64;
const b64dec = naclutil.decodeBase64;
const utf8enc = naclutil.encodeUTF8;
const utf8dec = naclutil.decodeUTF8;
const a = utf8dec("foobarbaz");
console.log("My a is : " + typeof(/*utf8dec*/(a)));
console.log("Foo: " + naclutil.encodeBase64(utf8dec("Foo")));
console.log("Foo..: " + utf8enc(naclutil.decodeBase64(naclutil.encodeBase64(utf8dec("Foo")))));
// var foo = "bar";
// alert("Hallo Typescript & Webpack " + foo);
