import React from "react";
import Field from "./Field";
import { mount, shallow } from "enzyme";

describe("Field", () => {
  it("Should render field", () => {
    expect(shallow(<Field field={[[]]} onClick={undefined} />)).not.toBeNull();
  });
  it("Should contain cells", () => {
    const field = mount(<Field field={[[true]]} onClick={undefined} />);
    const cells = field.findWhere((el) => el.hasClass("cell"));
    expect(cells.length).toBe(1);
  });
  it("Should contain number of cells according to field size", () => {
    const field = mount(
      <Field
        field={[
          [false, false],
          [true, true],
        ]}
        onClick={undefined}
      />
    );
    const cells = field.findWhere((el) => el.hasClass("cell"));
    expect(cells.length).toBe(4);
  });
  it("Should call on click handler", () => {
    const handler = jest.fn();
    const field = mount(
      <Field
        field={[
          [false, false],
          [false, true],
        ]}
        onClick={handler}
      />
    );
    field.find(".filled").simulate("click");
    expect(handler).toBeCalledWith(1, 1);
  });
});
