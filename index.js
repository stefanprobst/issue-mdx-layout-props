import { compile } from "xdm";

const doc = `
import Layout from './Layout'

export default Layout
`;

compile(doc).then((vfile) => console.log(String(vfile)));
