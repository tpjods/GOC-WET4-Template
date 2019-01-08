import {ErrorDocModule} from './error-doc.module';

describe('ErrorDocModule', () => {
  let errorDocModule: ErrorDocModule;

  beforeEach(() => {
    errorDocModule = new ErrorDocModule();
  });

  it('should create an instance', () => {
    expect(errorDocModule).toBeTruthy();
  });
});
