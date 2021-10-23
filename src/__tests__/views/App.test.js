import React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import App from "../../views/App";

jest.mock("../__moks__/Localbase.mock");
jest.mock("../__moks__/react-router.mock");

describe("App must work as expected", () => {
  it("should match with snapshot", () => {
    const app = create(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
