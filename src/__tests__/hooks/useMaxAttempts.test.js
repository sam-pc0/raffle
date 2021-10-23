import useMaxAttempts from "../../hooks/useMaxAttempts";
import { act, renderHook } from "@testing-library/react-hooks";

describe("must be change hasFinishedAttempts when the maxAttempt as reached ", () => {
  let hook;
  beforeEach(() => {
    const { result } = renderHook(() => useMaxAttempts(2));
    hook = result;
  });

  it("should start with value false", () => {
    expect(hook.current.hasFinishedAttempts).toEqual(false);
  });

  it("should set hasFinishedAttempts as true", () => {
    act(() => hook.current.makeAttempt());
    act(() => hook.current.makeAttempt());
    expect(hook.current.hasFinishedAttempts).toEqual(true);
  });
});
