import React from "react";
import Cell from "./Cell";
import { mount, shallow, render } from "enzyme";

describe("Cell", () => {
  it("Should render cell", () => {
    expect(shallow(<Cell />)).not.toBeNull();
  });
  it("Should render empty cell", () => {
    const cell = render(<Cell />);
    expect(cell.hasClass("empty")).toBe(true);
    expect(cell.hasClass("filled")).toBe(false);
  });
  it("Should render filled cell", () => {
    const cell = render(<Cell filled />);
    expect(cell.hasClass("filled")).toBe(true);
    expect(cell.hasClass("empty")).toBe(false);
  });
  it("Should call on click handler", () => {
    const handler = jest.fn();
    const cell = mount(<Cell filled onClick={handler} />);
    cell.simulate("click");
    expect(handler).toBeCalled();
  });
});
