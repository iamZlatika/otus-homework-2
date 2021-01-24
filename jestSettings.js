import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// https://github.com/facebook/jest/issues/3449#issuecomment-347337666
// class Worker {
//   constructor(stringUrl) {
//     this.url = stringUrl;
//     this.onmessage = () => undefined;
//   }

//   postMessage(msg) {
//     this.onmessage(msg);
//   }
// }

// window.Worker = Worker;
