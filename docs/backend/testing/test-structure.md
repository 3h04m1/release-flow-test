---
title: Test Structure
description: |
  Overview of the test structure, including unit tests, integration tests, and end-to-end
  tests.
---

# Test Structure

1. All tests must be placed in the `__test__` directory of the module they are testing and each test file must be named
    with the `.spec.ts` suffix. This structure helps in organizing tests and makes it easier to run them.
2. Test should have a top level `describe` block that describes the module or feature being tested.
    each separate functionality should have its own `describe` block to group related tests together.
3. Each test case should be defined using the `it` or `test` function, which describes the specific behavior being tested.
4. Use `beforeEach` and `afterEach` hooks to set up and tear down any necessary state before and after each test case.
5. Use `expect` assertions to verify the expected outcomes of the test cases.
6. Use `jest.mock` to mock dependencies and isolate the module being tested.
7. Use `jest.spyOn` to create spies for functions that need to be monitored without altering their behavior.
8. Use `jest.fn()` to create mock functions for testing callbacks or event handlers.
9. Use `jest.clearAllMocks()` in the `afterEach` hook to reset the state of all mocks after each test case.

## Example Test Structure

```typescript
import {MyModule} from '../my-module';
import {MyService} from '../my-service';
import {MyDependency} from '../my-dependency';

describe('MyModule', () => {
  let myModule: MyModule;
  let myService: MyService;
  let myDependency: MyDependency;
  beforeEach(() => {
    myDependency = new MyDependency();
    myService = new MyService(myDependency);
    myModule = new MyModule(myService);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should do something', () => {
    const result = myModule.doSomething();
    expect(result).toBe(true);
  });
  it('should call myService method', () => {
    const spy = jest.spyOn(myService, 'myMethod');
    myModule.callMyServiceMethod();
    expect(spy).toHaveBeenCalled();
  });
  it('should handle errors', () => {
    jest.spyOn(myService, 'myMethod').mockImplementation(() => {
      throw new Error('Test error');
    });
    expect(() => myModule.callMyServiceMethod()).toThrow('Test error');
  });
  it('should return expected value', () => {
    const mockFn = jest.fn().mockReturnValue('expected value');
    const result = myModule.useMockFunction(mockFn);
    expect(result).toBe('expected value');
    expect(mockFn).toHaveBeenCalled();
  });
});
```


