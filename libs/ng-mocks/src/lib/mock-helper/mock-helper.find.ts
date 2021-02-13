import funcGetLastFixture from './func.get-last-fixture';
import funcParseFindArgs from './func.parse-find-args';
import funcParseFindArgsName from './func.parse-find-args-name';
import funcParseFindTerm from './func.parse-find-term';

const defaultNotFoundValue = {}; // simulating Symbol

export default (...args: any[]) => {
  const { el, sel, notFoundValue } = funcParseFindArgs(args, defaultNotFoundValue);
  const debugElement = el || funcGetLastFixture()?.debugElement;

  const result = debugElement?.query(funcParseFindTerm(sel));
  if (result) {
    return result;
  }
  if (notFoundValue !== defaultNotFoundValue) {
    return notFoundValue;
  }
  throw new Error(`Cannot find an element via ngMocks.find(${funcParseFindArgsName(sel)})`);
};
