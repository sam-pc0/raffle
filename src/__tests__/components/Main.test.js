import React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Main from "../../components/Main/Main";

jest.mock("../__moks__/Localbase.mock");
jest.mock("../__moks__/react-router.mock");

describe("Main must work as expected", () => {
  it("should match with snapshot", () => {
    const main = create(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    ).toJSON();
    expect(main).toMatchSnapshot();
  });
});
